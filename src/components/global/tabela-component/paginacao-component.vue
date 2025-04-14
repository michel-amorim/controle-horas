<template>
  <q-pagination
    v-if="isVisible"
    v-model="model"
    :max="totalPaginas"
    class="flex flex-center q-mt-sm"
    input
  />
</template>
<script lang="ts" setup>
import { computed, useModel } from 'vue';
import type { PropsPaginacao } from './paginacao-interface';

const props = withDefaults(defineProps<PropsPaginacao>(), {
  totalPaginas: 1,
});
const isVisible = computed(() => props.totalPaginas > 1);
const model = useModel(props, 'modelValue');
</script>
