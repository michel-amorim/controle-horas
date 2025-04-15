<template>
  <q-input
    v-model="inputString"
    mask="##:## - ##:##"
    :label="label"
    :rules="rules"
    :filled="filled"
    :readonly="readonly"
    :outlined="outlined"
    :disable="disable"
    :color="color"
    :class="inputClass"
  >
    <template #append>
      <q-icon name="access_time" class="cursor-pointer" :color="color">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <div class="q-pa-sm">
            <q-tabs
              v-model="abaSelecionada"
              dense
              class="text-primary"
              active-color="primary"
              indicator-color="primary"
            >
              <q-tab name="inicio" label="Início" />
              <q-tab name="fim" label="Fim" />
            </q-tabs>

            <q-tab-panels v-model="abaSelecionada" animated>
              <q-tab-panel name="inicio" class="q-pa-sm">
                <q-time flat v-model="horaInicial" format24h />
              </q-tab-panel>
              <q-tab-panel name="fim" class="q-pa-sm">
                <q-time flat v-model="horaFinal" format24h />
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { ref, watch } from 'vue';
import { defineProps, withDefaults, useModel } from 'vue';
import type { PropsInputHora } from './horas-interface';

const props = withDefaults(defineProps<PropsInputHora>(), {
  rules: () => [],
  filled: true,
  color: 'primary',
});

const inputString = useModel(props, 'modelValue') as Ref<string | null>;

const abaSelecionada = ref<'inicio' | 'fim'>('inicio');
const horaInicial = ref<string | null>(null);
const horaFinal = ref<string | null>(null);

watch([horaInicial, horaFinal], ([inicio, fim]) => {
  inputString.value = inicio && fim ? `${inicio} - ${fim}` : '';
});

watch(inputString, (val) => {
  if (typeof val === 'string' && val.includes(' - ')) {
    const [inicio, fim] = val.split(' - ');
    horaInicial.value = inicio || null;
    horaFinal.value = fim || null;
  } else {
    horaInicial.value = null;
    horaFinal.value = null;
  }
});
</script>
