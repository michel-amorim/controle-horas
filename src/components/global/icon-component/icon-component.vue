<template>
  <q-icon :name="computedIcon" :size="computedSize" :color="color" class="icon-component" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IconProps } from './icon-interface';

import { obterTamanho } from 'src/utils/medidas-util';
import type { MedidasKeys } from 'src/constants/medidas-espaços';

const props = defineProps<IconProps>();

const computedIcon = computed(() => {
  return `o_${props.name}`;
});

const computedSize = computed(() => obterTamanho(props.size as MedidasKeys));
</script>
