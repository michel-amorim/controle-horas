<template>
  <ContainerComponent titulo="Ops, página não encontrada!">
    <ErrorComponent :chaveErro="ErrorStatus.NOT_FOUND" />
  </ContainerComponent>
</template>
<script lang="ts" setup>
import { ErrorStatus } from 'src/@types/error/error-enum';
import ErrorComponent from 'src/components/error/error-component.vue';
</script>
