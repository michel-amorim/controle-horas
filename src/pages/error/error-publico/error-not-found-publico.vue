<template>
  <ContainerComponent :visivel="false" titulo="Ops, página não encontrada!">
    <div>
      <ErrorComponent :chaveErro="ErrorStatus.NOT_FOUND" />
      <div class="q-mt-lg flex justify-center">
        <BotaoComponent label="Ir para o login" outline @click="goLogin" />
      </div>
    </div>
  </ContainerComponent>
</template>
<script lang="ts" setup>
import { ErrorStatus } from 'src/@types/error/error-enum';
import ErrorComponent from 'src/components/error/error-component.vue';

function goLogin() {
  console.log('deslog');
}
</script>
