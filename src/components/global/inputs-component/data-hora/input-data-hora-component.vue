<template>
  <q-input
    v-model="inputValue"
    :class="inputClass"
    :disable="disable"
    :readonly="readonly"
    :label="label"
    :color="color"
    :rules="rules"
    :error-message="errorMessage"
    :bg-color="filled ? undefined : 'white'"
    :hint="hint"
    :outlined="outlined"
    :filled="filled"
    mask="##/##/#### ##:##"
  >
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer" :color="color">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date v-model="inputValue" mask="DD/MM/YYYY HH:mm">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Fechar" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>

    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer" :color="color">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-time v-model="inputValue" mask="DD/MM/YYYY HH:mm" format24h>
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Fechar" color="primary" flat />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { useModel } from 'vue';
import { type InputDataHoraProps } from './input-data-hora-interface';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<InputDataHoraProps>(), {
  filled: true,
  color: 'primary',
});
const inputValue = useModel(props, 'modelValue');
</script>
