<template>
  <ContainerComponent titulo="Cadastrar sistema">
    <FormComponent submit-label="cadastrar" desativar-reset @submit="send">
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
        <ColorComponent v-model="formulario.cor" />
      </div>
    </FormComponent>
  </ContainerComponent>
</template>

<script setup lang="ts">
import FormComponent from 'src/components/global/form-component/form-component.vue';
import FormRules from 'src/utils/form/form-rules';
import { ref } from 'vue';
import { ProjetoService } from 'src/service/projeto.service';

const formulario = ref({
  nomeSistema: '',
  grupo: '',
  modalidade: [],
  cor: '',
});

async function send(valid: boolean){
  if(valid){
    await ProjetoService.cadastrar({
      cor: formulario.value.cor,
      nome: formulario.value.nomeSistema,
      origem: formulario.value.grupo
    })
  }
}
</script>

<style src="./cadastrar-sistema.scss" />
