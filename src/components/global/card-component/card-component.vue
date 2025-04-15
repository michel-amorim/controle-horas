<template>
  <q-card :class="classeCard" flat bordered class="container-card">
    <header>
      <h1>{{ titulo }}</h1>

      <nav v-if="acoes">
        <BotaoComponent
          v-for="(button, index) in acoes"
          :key="`${index}-${button.id}`"
          :color="button.color"
          :flat="button.flat"
          :icon="button.iconeEsquerda"
          :label="button.label"
          :outline="button.outline"
          :tooltip="button.tooltip"
          @click="button.onClick"
        />
      </nav>
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
