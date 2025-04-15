<template>
  <q-form @submit.prevent="onSubmit" @reset="onReset" ref="formRef" greedy class="q-mb-lg">
    <header>
      <h2>{{ titulo }}</h2>
    </header>
    <slot class="row q-col-gutter-sm"></slot>

    <div class="flex justify-between q-mt-md">
      <div>
        <slot name="optionalBtn"></slot>
      </div>

      <div class="row items-center">
        <BotaoComponent
          v-if="!desativarSubmit"
          outline
          type="submit"
          :label="submitLabel"
          icone-direita="search"
        />
        <BotaoComponent
          v-if="!desativarReset"
          type="reset"
          icone-esquerda="delete"
          color="negative"
          classeBotao="q-ml-sm"
        />
      </div>
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { RegrasFormulario } from './form-interface';

withDefaults(defineProps<RegrasFormulario>(), {
  submitLabel: 'Pesquisar',
  iconSubmit: 'search',
  desativarReset: false,
  desativarSubmit: false,
});

const emit = defineEmits<{
  (e: 'submit', isValid: boolean): void;
  (e: 'onReset'): void;
  (e: 'rules', rules: RegrasFormulario): void;
}>();

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
const formRef = ref<InstanceType<(typeof import('quasar'))['QForm']> | null>(null);

const onSubmit = async () => {
  if (formRef.value) {
    const valid = await formRef.value.validate();
    emit('submit', valid);
  }
};

const onReset = () => {
  emit('onReset');
  formRef.value?.resetValidation();
};
</script>

<style lang="scss" scoped>
h2 {
  color: $primary;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
}
</style>
