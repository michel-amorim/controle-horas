<template>
  <q-file
    :for="uniqueId"
    v-model="inputValue"
    class="file-input"
    :autofocus="autofocus"
    :readonly="readonly"
    :color="color"
    :error-message="errorMessage"
    :counter="counter"
    :multiple="multiple"
    :accept="accept"
    :maxFileSize="maxFileSize"
    :maxTotalSize="maxTotalSize"
    :maxFiles="maxFiles"
    :useChips="false"
    :rules="rules"
    :borderless="borderless"
  >
    <template #file>
      <div style="display: none"></div>
    </template>

    <template #default>
      <div v-if="filesList.length === 0" class="q-file-container">
        <iconComponent name="cloud_upload" size="xl" />
        <p class="upload-title">Arraste e solte os seus arquivos aqui ou clique para selecionar</p>
        <small class="upload-subtitle">Arquivos suportados: {{ hint }}</small>
      </div>

      <div v-else class="q-file-container">
        <iconComponent name="upload_file" size="xl" />
        <p class="file-title">Arquivo anexado com sucesso</p>

        <div v-if="filesList[0]" class="upload-chip">
          <p>{{ filesList[0]?.name }}</p>
          <!-- <q-icon name="delete" color="negative" size="sm" @click.stop="clearFile" /> -->
          <q-btn dense flat icon="delete" color="negative" @click.stop="clearFile" />
        </div>
      </div>
    </template>
  </q-file>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { PropsFile } from './file-interface';
import { gerarId } from 'src/utils/gerador-id-util';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<PropsFile>(), {
  iconColor: 'primary',
  borderless: true,
  filled: true,
  label: 'Arraste e solte os seus arquivos aqui ou clique para selecionar',
});

const uniqueId = gerarId(props.label || 'Arquivo', 'input-file');
const inputValue = ref<File | File[] | null>(null);

const filesList = computed<File[]>(() => {
  if (!inputValue.value) return [];
  if (Array.isArray(inputValue.value)) return inputValue.value;
  return [inputValue.value];
});

const clearFile = () => {
  inputValue.value = null;
};
</script>

<style lang="scss" src="./file-styles.scss" />
