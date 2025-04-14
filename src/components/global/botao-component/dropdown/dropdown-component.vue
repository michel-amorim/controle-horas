<template>
  <q-btn-dropdown
    :id="uniqueId"
    unelevated
    :label="label"
    :color="cor"
    :class="classeBotao"
    :flat="flat"
    :outline="outline"
  >
    <q-list>
      <template v-for="item in itens" :key="item.id">
        <q-item :exact="item.exact" :href="item.href" clickable @click="item.onClick" v-close-popup>
          <q-item-section v-if="item.icon" side>
            <q-icon :name="item.icon" color="dark" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
      </template>
    </q-list>
  </q-btn-dropdown>
</template>
<script lang="ts" setup>
import { gerarId } from 'src/utils/gerador-id-util';
import type { PropsBotaoDropdown } from './dropdown-interface';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<PropsBotaoDropdown>(), {
  cor: 'primary',
  itens: () => [],
});

const uniqueId = gerarId(String(props.label || 'button-dropdown'), 'button');
</script>
