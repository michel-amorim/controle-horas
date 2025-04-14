<template>
  <q-btn
    :id="uniqueId"
    :color="color"
    :round="round"
    :dense="dense"
    :disable="disable"
    :flat="flat"
    :icon="iconeEsquerda"
    :icon-right="iconeDireita"
    :label="label"
    :outline="outline"
    :size="computedSize"
    :text-color="textColor"
    :type="type"
    :class="classeBotao"
    :href="href"
    unelevated
    @click="$emit('click')"
  >
    <q-tooltip
      v-if="!!tooltip && !disable"
      :class="['text-uppercase', 'text-subtitle2', `bg-${color}`]"
    >
      {{ tooltip }}
    </q-tooltip>
    <q-badge v-if="badge" :color="corBadge" floating rounded> {{ badge }} </q-badge>
  </q-btn>
</template>
<script lang="ts" setup>
import { gerarId } from 'src/utils/gerador-id-util';
import type { PropsBotao } from './botao-interface';
import { computed } from 'vue';
import { obterTamanho } from 'src/utils/medidas-util';
import type { MedidasKeys } from 'src/constants/medidas-espaços';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<PropsBotao>(), {
  color: 'primary',
  classeBotao: '',
  outline: false,
});

const uniqueId = gerarId(
  String(props.label || props.iconeEsquerda || props.iconeDireita || 'padrao'),
  'button',
);

const computedSize = computed(() => obterTamanho(props.size as MedidasKeys));
</script>
