<template>
  <q-dialog :id="uniqueId" v-model="baseModal" :full-width="fullWidth" :persistent="persistent">
    <q-card :class="modalClass" class="container-base-modal">
      <!-- cabecalho modal -->
      <q-card-section class="container-header">
        <q-icon v-if="icone" :color="corCabecalho" :name="icone" class="content-icon" />
        <h1 :class="`text-${corCabecalho}`">{{ titulo }}</h1>
        <q-space />
      </q-card-section>
      <q-separator spaced />
      <!-- skeleton para carregamento -->
      <q-card-section v-if="skeleton" class="q-px-none">
        <q-skeleton
          v-for="n in quantidadeSkeleton"
          height="24px"
          :key="n"
          type="text"
          class="q-mb-xs"
        />
      </q-card-section>
      <!-- conteudo modal -->
      <q-card-section v-else class="q-px-none">
        <slot></slot>
      </q-card-section>
      <!-- navegacao/rodepe -->
      <q-card-section :class="botaoClass">
        <BotaoComponent
          v-if="labelBotaoEsquerdo"
          :disable="disableBotaoEsquerdo"
          outline
          :label="labelBotaoEsquerdo"
          v-close-popup
        />
        <BotaoComponent
          v-if="labelBotaoDireito"
          :label="labelBotaoDireito"
          @click="clickDireito"
          :color="corBotaoDireito"
          :disable="disableBotaoDireito"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { PropsModal } from './base-modal-interface';
import { gerarId } from 'src/utils/gerador-id-util';

const props = withDefaults(defineProps<PropsModal>(), {
  corCabecalho: 'primary',
  labelOnOk: 'Confirmar',
  colorOnOk: 'primary',
  disableOnOk: false,
  disableCancel: false,
  skeleton: false,
  quantidadeSkeleton: 5,
  persistent: false,
  labelBotaoEsquerdo: 'fechar',
  labelBotaoDireito: 'Cadastrar',
});

const emit = defineEmits(['clickDireito', 'clickEsquerdo']);
const baseModal = ref(true);
const uniqueId = gerarId(props.titulo || 'padrao', 'modal');

const botaoClass = computed(() => {
  if (props.labelBotaoEsquerdo && props.labelBotaoDireito) {
    return 'content-dois-botoes';
  } else if (props.labelBotaoEsquerdo) {
    return 'content-botao-esquerdo';
  } else if (props.labelBotaoDireito) {
    return 'content-botao-direito';
  }
  return '';
});

const clickDireito = () => {
  emit('clickEsquerdo');
};

const clickEsquerdo = () => {
  emit('clickDireito');
};

defineExpose({
  clickEsquerdo,
  clickDireito,
});
</script>

<style src="./base-modal-styles.scss" lang="scss" />
