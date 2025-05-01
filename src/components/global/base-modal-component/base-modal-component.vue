<template>
  <q-dialog :id="uniqueId" v-model="baseModal" :full-width="fullWidth" :persistent="persistent">
    <q-card :class="modalClass" class="container-base-modal">
      <!-- cabeçalho -->
      <q-card-section class="container-header">
        <q-icon v-if="icone" :color="corCabecalho" :name="icone" class="content-icon" />
        <h1 :class="`text-${corCabecalho}`">{{ titulo }}</h1>
        <q-space />
      </q-card-section>

      <q-separator spaced />

      <!-- skeleton -->
      <q-card-section v-if="skeleton" class="q-px-none">
        <q-skeleton
          v-for="n in quantidadeSkeleton"
          :key="n"
          height="24px"
          type="text"
          class="q-mb-xs"
        />
      </q-card-section>

      <!-- conteúdo -->
      <q-card-section v-else class="q-px-none">
        <slot />
      </q-card-section>

      <!-- rodapé -->
      <q-card-section :class="botaoClass">
        <botao-component
          v-if="labelBotaoEsquerdo"
          :disable="disableBotaoEsquerdo"
          outline
          :label="labelBotaoEsquerdo"
          v-close-popup
        />
        <botao-component
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
  if (props.labelBotaoEsquerdo && props.labelBotaoDireito) return 'content-dois-botoes';
  if (props.labelBotaoEsquerdo) return 'content-botao-esquerdo';
  if (props.labelBotaoDireito) return 'content-botao-direito';
  return '';
});

const clickDireito = () => {
  emit('clickDireito');
};

const clickEsquerdo = () => {
  emit('clickEsquerdo');
};

defineExpose({
  clickEsquerdo,
  clickDireito,
  baseModal,
});
</script>

<style lang="scss" src="./base-modal-styles.scss" />
