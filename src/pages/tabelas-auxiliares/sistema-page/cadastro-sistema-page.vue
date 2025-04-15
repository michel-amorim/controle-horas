<template>
  <ContainerComponent titulo="Cadastrar sistema">
    <FormComponent submit-label="cadastrar" desativar-reset>
      <div class="formulario-grid">
        <InputComponent
          label="Nome do sistema"
          v-model="formulario.nomeSistema"
          :rules="[FormRules.campoObrigatorio]"
        />
        <InputComponent
          label="Grupo"
          v-model="formulario.grupo"
          :rules="[FormRules.campoObrigatorio]"
        />

        <SelectComponent
          label="Modalidade"
          multiple
          use-chips
          v-model="formulario.modalidade"
          :opcoes="opcoesModalidadeCadastroSistema"
          :rules="[FormRules.campoObrigatorio]"
        />
        <ColorComponent v-model="formulario.cor" />
      </div>
    </FormComponent>
  </ContainerComponent>
</template>

<script setup lang="ts">
import { opcoesModalidadeCadastroSistema } from 'src/@types/enum/modalidade-cadastro-sistema';
import FormComponent from 'src/components/global/form-component/form-component.vue';
import SelectComponent from 'src/components/global/inputs-component/selecao/select-component.vue';
import FormRules from 'src/utils/form/form-rules';
import { ref } from 'vue';

const formulario = ref({
  nomeSistema: '',
  grupo: '',
  modalidade: [],
  cor: '',
});
</script>

<style src="./cadastrar-sistema.scss" />
