<template>
  <BaseModalComponent
    ref="baseModal"
    modalClass="container-modal"
    titulo="Cadastrar atividade"
    @click-direito="cadastrarNovaAtividade"
  >
    <FormComponent desativar-reset desativar-submit class="formulario-campos">
      <InputComponent
        label="Nome da atividade"
        v-model="formulario.nome"
        :rules="[FormRules.campoObrigatorio]"
      />
      <SelecaoComponent
        option-label="nome"
        option-value="id"
        label="Projeto"
        v-model="formulario.projetoId"
        :opcoes="opcoesProjeto"
        :rules="[FormRules.campoObrigatorio]"
      />
      <InputComponent
        label="Descrição"
        v-model="formulario.descricao"
        autogrow
        counter
        maxlength="100"
      />
    </FormComponent>
  </BaseModalComponent>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import FormComponent from 'src/components/global/form-component/form-component.vue';
import type { AdicionarAtividadeDto, Projeto } from 'src/api-client';
import { StatusHttpSucesso } from 'src/constants/status-http-sucesso';
import { ProjetoService } from 'src/service/projetos/projeto.service';
import FormRules from 'src/utils/form/form-rules';
import { Notify } from 'quasar';

const baseModal = ref();
const emit = defineEmits(['ok']);
const opcoesProjeto = ref<Projeto[]>([]);

const formulario = ref<AdicionarAtividadeDto>({
  projetoId: '',
  descricao: '',
  nome: '',
});

const cadastrarNovaAtividade = async () => {
  try {
    const { status } = await ProjetoService.cadastrarAtividade(formulario.value, {
      mensagem: false,
    });
    if (status === StatusHttpSucesso.CREATED) {
      emit('ok');
      baseModal.value?.fechar();
    }
  } catch (error) {
    console.error('Erro ao cadastrar atividade:', error);
    Notify.create({
      type: 'negative',
      message: 'Erro ao cadastrar atividade',
    });
  }
};

const obterProjetos = async () => {
  try {
    const { data, status } = await ProjetoService.listar(undefined, {
      mensagem: false,
    });
    if (status === StatusHttpSucesso.OK) opcoesProjeto.value = data;
  } catch (error) {
    console.error('Erro ao carregar projetos:', error);
    Notify.create({
      type: 'negative',
      message: 'Erro ao carregar projetos',
    });
  }
};

onMounted(() => void obterProjetos());
</script>

<style lang="scss" src="./cadastrar-atividade.scss" />
