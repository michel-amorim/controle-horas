<template>
  <BaseModalComponent ref="baseModal" modalClass="container-modal" titulo="Cadastrar horas">
    <FormComponent desativar-reset desativar-submit>
      <DataComponent label="Data" v-model="formulario.dataAtual" />
      <SelecaoComponent v-model="formulario.sistema" label="Sistema" :opcoes="[]" />
      <SelecaoComponent v-model="formulario.grupo" label="Grupo" :opcoes="[]" />

      <div class="container-horas">
        <template v-for="horas in formulario.horas" :key="horas.id">
          <div class="content-botao-horas">
            <BotaoComponent
              @click="removerHora(horas.id)"
              color="negative"
              dense
              icone-direita="delete"
            />
          </div>
          <HorasComponent label="Entrada - saída" v-model="horas.hora" />
        </template>
      </div>
      <BotaoComponent icone-esquerda="add" dense @click="adicionarHora" />

      <InputComponent label="Observação" type="textarea" v-model="formulario.observacao" />
    </FormComponent>
  </BaseModalComponent>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import FormComponent from 'src/components/global/form-component/form-component.vue';
import { obterDataAtual } from 'src/utils/data-utils';

const baseModal = ref();
const formulario = ref({
  dataAtual: '',
  sistema: '',
  grupo: '',
  observacao: '',
  horas: [{ id: crypto.randomUUID(), hora: '' }],
});

const adicionarHora = () =>
  formulario.value.horas.push({
    id: crypto.randomUUID(),
    hora: '',
  });

const removerHora = (id: string) =>
  (formulario.value.horas = formulario.value.horas.filter((h) => h.id !== id));

onMounted(() => (formulario.value.dataAtual = obterDataAtual()));
</script>

<style lang="scss" src="./cadastrar-horas.scss" />
