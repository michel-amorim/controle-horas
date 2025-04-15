<template>
  <ContainerComponent :visivel="true" titulo="Consultar Horas">
    <FormComponent>
      <div class="row q-gutter-x-sm">
        <SelecaoComponent input-class="col" label="select" :opcoes="[]" v-model="formulario" />
        <InputComponent input-class="col" label="texto" v-model="formulario" />
      </div>
      <template #optionalBtn>
        <BotaoComponent label="Cadastrar hora" />
      </template>
    </FormComponent>
    <TabelaComponent :rows="mockControleHorasData" :columns="ControleHorasColunas" />
  </ContainerComponent>
</template>

<script setup lang="ts">
import FormComponent from 'src/components/global/form-component/form-component.vue';
import TabelaComponent from 'src/components/global/tabela-component/tabela-component.vue';
import { ref } from 'vue';
import { ControleHorasColunas, mockControleHorasData } from './controle-horas-colunas';

const formulario = ref();
</script>
