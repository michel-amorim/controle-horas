<template>
  <BaseModalComponent
    ref="baseModal"
    modalClass="container-modal"
    titulo="Editar Atividade"
    @click-direito="salvar"
  >
    <FormComponent desativar-submit desativar-reset @submit="salvar">
      <InputComponent
        label="Nome da atividade"
        v-model="formulario.nome"
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
import { ref } from 'vue';
import BaseModalComponent from 'src/components/global/base-modal-component/base-modal-component.vue';
import FormComponent from 'src/components/global/form-component/form-component.vue';
import InputComponent from 'src/components/global/inputs-component/padrao/input-component.vue';
import type { Atividade, AtualizarAtividadeDto } from 'src/api-client';
import { StatusHttpSucesso } from 'src/constants/status-http-sucesso';
import { ProjetoService } from 'src/service/projetos/projeto.service';
import FormRules from 'src/utils/form/form-rules';
import { Notify } from 'quasar';

const props = defineProps<{
  atividade: Atividade;
}>();

const baseModal = ref();
const emit = defineEmits(['ok']);

const formulario = ref<AtualizarAtividadeDto>({
  nome: props.atividade.nome,
  descricao: props.atividade.descricao || '',
});

const salvar = async () => {
  try {
    const { status } = await ProjetoService.atualizarAtividade({
      id: props.atividade.id,
      dto: formulario.value,
    });

    if (status === StatusHttpSucesso.OK) {
      Notify.create({
        type: 'positive',
        message: 'Atividade atualizada com sucesso',
      });
      emit('ok');
      baseModal.value?.fechar();
    }
  } catch {
    Notify.create({
      type: 'negative',
      message: 'Erro ao atualizar atividade',
    });
  }
};
</script>

<style lang="scss" scoped>
.container-modal {
  min-width: 400px;
}
</style>
