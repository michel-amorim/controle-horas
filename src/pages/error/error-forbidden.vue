<template>
  <ContainerComponent titulo="Falha de acesso">
    <ErrorComponent :chaveErro="ErrorStatus.FORBIDDEN" />
  </ContainerComponent>
</template>
<script lang="ts" setup>
import { ErrorStatus } from 'src/@types/error/error-enum';
import ErrorComponent from 'src/components/error/error-component.vue';
</script>
