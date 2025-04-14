<template>
  <q-layout view="hhh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <BotaoComponent
          icone-esquerda="menu"
          dense
          outlined
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
    </q-header>

    <DrawerComponent
      v-model="leftDrawerOpen"
      show-if-above
      :breakpoint="900"
      :width="280"
      :items="sidebar"
    />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { LayoutProps } from './layout-interface';
import DrawerComponent from 'src/components/drawer/drawer-component.vue';

defineProps<LayoutProps>();

const leftDrawerOpen = ref(false);
</script>
