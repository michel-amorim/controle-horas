<template>
  <base-modal-component
    ref="baseModal"
    modal-class="container-modal"
    titulo="Cadastrar horas"
    @clickDireito="cadastrarProjeto"
  >
    <form-component desativar-submit desativar-reset @submit="cadastrarProjeto">
      <div class="formulario-grid">
        <div class="linha">
          <input-component
            label="Nome do sistema"
            v-model="formulario.nome"
            :rules="[FormRules.campoObrigatorio]"
          />
        </div>

        <div class="linha">
          <input-component
            label="Origem"
            v-model="formulario.origem"
            :rules="[FormRules.campoObrigatorio]"
          />
        </div>

        <div class="linha-dupla">
          <color-component v-model="formulario.cor" />
          <input-component
            type="number"
            label="Horas Maximas"
            v-model="formulario.horasMaxima"
            :rules="[FormRules.campoObrigatorio]"
          />
        </div>
      </div>
    </form-component>
  </base-modal-component>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FormComponent from 'src/components/global/form-component/form-component.vue';
import FormRules from 'src/utils/form/form-rules';
import { ProjetoService } from 'src/service/projetos/projeto.service';
import type { AdicionarProjetoDto } from 'src/api-client';

const baseModal = ref();
const emit = defineEmits(['ok']);

const formulario = ref<AdicionarProjetoDto>({
  nome: '',
  origem: '',
  cor: '',
  horasMaxima: 0,
});

const cadastrarProjeto = async () => {
  const { status } = await ProjetoService.cadastrar(formulario.value);
  if (status === 201) {
    emit('ok');
    baseModal.value.baseModal = false;
  }
};
</script>

<style lang="scss" src="./cadastrar-horas.scss" />
