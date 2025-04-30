<template>
  <ContainerComponent :visivel="true" titulo="Consultar Horas">
    <FormComponent class="q-mb-md">
      <div class="row q-gutter-x-sm">
        <SelecaoComponent input-class="col" label="Sistemas" :opcoes="[]" v-model="formulario" />
      </div>
      <template #optionalBtn>
        <BotaoComponent label="Cadastrar hora" @click="cadastrarHoras" />
      </template>
    </FormComponent>
    <TabelaComponent :rows="[]" :columns="ControleHorasColunas" />
  </ContainerComponent>
</template>

<script setup lang="ts">
import FormComponent from 'src/components/global/form-component/form-component.vue';
import TabelaComponent from 'src/components/global/tabela-component/tabela-component.vue';
import { ref } from 'vue';
import { ControleHorasColunas } from './controle-horas-colunas';
import { Dialog } from 'quasar';
import CadastrarHorasModal from 'src/components/modals/cadastrar-horas/cadastrar-horas-modal.vue';

const formulario = ref();

const cadastrarHoras = () => {
  Dialog.create({
    component: CadastrarHorasModal,
  });
};
</script>
