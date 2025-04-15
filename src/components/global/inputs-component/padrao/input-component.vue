<template>
  <label v-if="titulo">{{ titulo }}</label>
  <q-input
    :for="uniqueId"
    :disable="disable"
    v-model.trim="inputValue"
    :class="[inputClass]"
    :readonly="readonly"
    :label="label"
    :type="type"
    :dense="dense"
    :color="color"
    :outlined="outlined"
    :mask="mask"
    :rules="rules"
    :error-message="errorMessage"
    :hint="hint"
    :autofocus="autofocus"
    :clearable="clearable"
    :filled="filled"
    :bg-color="filled ? undefined : 'white'"
    :counter="counter"
    :maxlength="maxlength"
    :autogrow="autogrow"
    :rows="type === 'textarea' ? textareaRows : undefined"
    :inputClass="inputClass"
    unmasked-value
  >
    <template v-if="!!iconeEsquerdo" #prepend>
      <q-icon
        :name="iconeEsquerdo"
        :color="corIcone"
        @click="iconeEsquerdoClick"
        :class="{ 'cursor-pointer': !!iconeEsquerdoClick }"
      />
    </template>
    <template v-if="!!iconeDireito" #append>
      <q-icon
        :name="iconeDireito"
        :color="corIcone"
        @click="iconeDireitoClick"
        :class="{ 'cursor-pointer': !!iconeDireitoClick }"
      />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { gerarId } from 'src/utils/gerador-id-util';
import { useModel } from 'vue';
import type { PropsInputPadrao } from './input-interface';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<PropsInputPadrao>(), {
  filled: true,
  corIcone: 'primary',
  textareaRows: 5,
  rules: () => [],
});

const uniqueId = gerarId(props.label || 'padrao', 'input');

const inputValue = useModel(props, 'modelValue');
</script>

<style src="./input-styles.scss" lang="scss" />
