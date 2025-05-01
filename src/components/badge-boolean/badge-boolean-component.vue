<template>
  <q-badge
    :label="labelTexto"
    :color="badgeColor"
    class="q-pa-sm text-uppercase text-white text-weight-medium"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  valor: boolean;
}>();

const badgeColor = props.valor ? 'negative' : 'info';
const labelTexto = props.valor ? 'Fechado' : 'Aberto';
</script>
