<template>
  <template v-if="range">
    <q-input
      v-model="inputString"
      mask="##/##/#### - ##/##/####"
      :for="uniqueId"
      :rules="rules"
      :label="label"
      :filled="filled"
      :readonly="readonly"
      :outlined="outlined"
      :disable="disable"
      :color="color"
      :class="inputClass"
    >
      <template #append>
        <q-icon name="event" class="cursor-pointer" :color="color">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="inputRange" range mask="DD/MM/YYYY">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Fechar" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </template>

  <template v-else>
    <q-input
      v-model="inputString"
      mask="##/##/####"
      :for="uniqueId"
      :rules="rules"
      :label="label"
      :filled="filled"
      :readonly="readonly"
      :outlined="outlined"
      :disable="disable"
      :color="color"
      :class="inputClass"
    >
      <template #append>
        <q-icon name="event" class="cursor-pointer" :color="color">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="inputSingleDate" mask="DD/MM/YYYY">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Fechar" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </template>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { defineProps, useModel, withDefaults } from 'vue';
import type { PropsInputData } from './date-interface';
import { gerarId } from 'src/utils/gerador-id-util';

const props = withDefaults(defineProps<PropsInputData>(), {
  mask: 'date',
  rules: () => [],
  icon: 'event',
  filled: true,
  color: 'primary',
  range: false,
});

const inputString = useModel(props, 'modelValue');
const uniqueId = gerarId(props.label || 'padrao', 'input-date');

const inputRange = ref<{ from: string | null; to: string | null }>({
  from: null,
  to: null,
});

const inputSingleDate = ref<string | null>(null);

watch(inputRange, (newRange) => {
  if (props.range && newRange.from && newRange.to) {
    inputString.value = `${newRange.from} - ${newRange.to}`;
  } else {
    inputString.value = '';
  }
});

watch(inputSingleDate, (newDate) => {
  if (!props.range) {
    inputString.value = newDate || '';
  }
});

watch(inputString, (newString) => {
  if (props.range) {
    if (typeof newString === 'string' && newString.includes(' - ')) {
      const [from, to] = newString.split(' - ');
      inputRange.value = { from: from || null, to: to || null };
    } else {
      inputRange.value = { from: null, to: null };
    }
  } else if (typeof newString === 'string' || newString === null) {
    inputSingleDate.value = newString;
  }
});
</script>
