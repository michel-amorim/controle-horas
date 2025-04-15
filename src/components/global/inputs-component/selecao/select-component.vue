<template>
  <q-select
    :for="uniqueId"
    :class="[inputClass]"
    v-model="inputValue"
    :disable="disable"
    :readonly="readonly"
    :label="label"
    :dense="dense"
    :color="color"
    :outlined="outlined"
    :rules="rules"
    :multiple="multiple"
    :new-value-mode="isChips ? 'add-unique' : undefined"
    :hide-dropdown-icon="hideDropdownIcon"
    :use-chips="useChips"
    :use-input="useInput"
    :error-message="errorMessage"
    :hint="hint"
    :autofocus="autofocus"
    :filled="filled"
    :bg-color="filled ? undefined : 'white'"
    :options="opcoes"
    :option-label="optionLabel"
    :option-value="optionValue"
    emit-value
    map-options
    :clearable="clearable"
    popup-content-style="width:200px; heigth: 100px"
  >
    <template v-if="!!iconeEsquerdo" #prepend>
      <q-icon
        :name="iconeEsquerdo"
        :color="corIcone"
        @click="iconeEsquerdoClick"
        :class="{ 'cursor-pointer': !!iconeEsquerdoClick }"
      />
    </template>

    <!-- Ícone à direita -->
    <template v-if="!!iconeDireito" #append>
      <q-icon
        :name="iconeDireito"
        :color="corIcone"
        @click="iconeDireitoClick"
        :class="{ 'cursor-pointer': !!iconeDireitoClick }"
      />
    </template>
    <template v-if="!isChips" v-slot:no-option>
      <q-item>
        <q-item-section class="text-italic text-grey"> Sem itens cadastrados </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script generic="Value" setup lang="ts">
import { useModel } from 'vue';

import { gerarId } from 'src/utils/gerador-id-util';
import type { PropsInputSelecao } from './select-interface';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<PropsInputSelecao<Value>>(), {
  filled: true,
  corIcone: 'primary',
  isChips: false,
  options: () => [],
  rules: () => [],
});

const uniqueId = gerarId(props.label || 'padrao', 'input-select');
const inputValue = useModel(props, 'modelValue');
</script>

<style lang="scss" src="./select-styles.scss" />
