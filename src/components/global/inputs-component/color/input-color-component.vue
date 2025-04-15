<template>
  <q-select
    v-model="inputValue"
    use-chips
    display-value="colorTranslation"
    filled
    use-input
    hide-dropdown-icon
    @click="togglePopup"
    :rules="rules"
  >
    <template v-slot:selected>
      <q-chip
        v-if="inputValue"
        dense
        square
        color="white"
        text-color="primary"
        class="q-my-none q-ml-xs q-mr-none"
      >
        <q-avatar class="badge" :color="badgeColor" text-color="white" />
        <span class="q-ml-xs text-caption"> {{ colorTranslation }}</span>
      </q-chip>
      <q-badge class="bg-transparent text-red" v-else>Escolha uma cor</q-badge>
    </template>
    <template v-slot:append>
      <q-icon name="colorize" class="cursor-pointer" @click="togglePopup">
        <q-popup-proxy v-model="showPopup" cover transition-show="scale" transition-hide="scale">
          <q-color v-model="inputValue" no-footer no-header default-view="palette" />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-select>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useModel } from 'vue';
import { colorMapping } from 'src/constants/color/color-mapping';
import type { InputColorProps } from './input-color-interface';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<InputColorProps>(), {
  outlined: true,
  color: 'primary',
  rules: () => [],
});

const inputValue = useModel(props, 'modelValue');
const colorTranslation = ref('');
const badgeColor = ref('');
const textColor = ref('');
const showPopup = ref(false);

const togglePopup = (event: Event) => {
  event.stopPropagation();
  showPopup.value = !showPopup.value;
};

const updateColorDetails = (hexValue: string | undefined) => {
  if (hexValue) {
    const colorDetails = colorMapping[hexValue.toLowerCase()];
    if (colorDetails) {
      colorTranslation.value = colorDetails.translation;
      textColor.value = colorDetails.textColor || 'white';
      badgeColor.value = colorDetails.name;
    } else {
      colorTranslation.value = 'Cor desconhecida';
      badgeColor.value = 'grey';
    }
  }
};

watch(
  inputValue,
  (newValue) => {
    if (newValue) {
      updateColorDetails(newValue);
    }
  },
  { immediate: true },
);
</script>

<style scoped>
.badge {
  border: 1px solid rgba(0, 0, 0, 0.271);
}
</style>
