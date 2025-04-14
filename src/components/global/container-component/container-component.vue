<template>
  <q-page class="container-page">
    <div class="container">
      <header v-if="visivel">
        <div>
          <h1>{{ titulo }}</h1>
        </div>
        <q-separator />
        <nav v-if="acoes?.length">
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
      <slot></slot>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import type { PropsContainer } from './container-interface';

const props = withDefaults(defineProps<PropsContainer>(), {
  visivel: false,
});

onMounted(() => {
  document.title = props.titulo;
});
</script>

<style src="./container-styles.scss" lang="scss" />
