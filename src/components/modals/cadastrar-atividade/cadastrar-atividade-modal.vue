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
import { AtividadeService } from 'src/service/atividades/atividades.service';
import { StatusHttpSucesso } from 'src/constants/status-http-sucesso';
import { ProjetoService } from 'src/service/projetos/projeto.service';
import FormRules from 'src/utils/form/form-rules';

const baseModal = ref();
const opcoesProjeto = ref<Projeto[]>([]);

const formulario = ref<AdicionarAtividadeDto>({
  projetoId: '',
  descricao: '',
  nome: '',
});

const cadastrarNovaAtividade = async () => {
  const { status } = await AtividadeService.adicionarAtividade(formulario.value);
  if (status === StatusHttpSucesso.CREATED) baseModal.value?.fechar();
};

const obterProjetos = async () => {
  const { data, status } = await ProjetoService.listarProjetos(undefined, {
    mensagem: false,
  });
  if (status === StatusHttpSucesso.OK) opcoesProjeto.value = data;
};

onMounted(() => void obterProjetos());
</script>

<style lang="scss" src="./cadastrar-atividade.scss" />
