<template>
  <q-page class="container-page">
    <CardComponent classe-card="container" :titulo="titulo" :acoes="acoes ?? []">
      <slot></slot>
    </CardComponent>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import type { PropsContainer } from './container-interface';

const props = withDefaults(defineProps<PropsContainer>(), {
  visivel: true,
  acoes: () => [],
});

onMounted(() => {
  document.title = props.titulo;
});
</script>

<style src="./container-styles.scss" lang="scss" />
