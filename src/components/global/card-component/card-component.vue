<template>
  <q-card :class="classeCard" flat bordered class="container-card">
    <header>
      <h2>{{ titulo }}</h2>
    </header>
    <q-separator class="separador" />
    <slot></slot>
  </q-card>
</template>

<script setup lang="ts">
import type { PropsCard } from './card-interface';

defineOptions({
  inheritAttrs: false,
});

withDefaults(defineProps<PropsCard>(), {});
</script>

<style lang="scss" src="./card-syles.scss" />
