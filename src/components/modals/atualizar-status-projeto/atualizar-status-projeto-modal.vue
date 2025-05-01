<template>
  <base-modal-component
    ref="baseModal"
    modal-class="container-modal"
    titulo="Atualizar Status"
    @clickDireito="atualizarStatus"
  >
    <div class="content-aviso">
      Você está prestes a {{ linhaTabela.concluido ? 'reabrir' : 'fechar' }} o projeto
      <span>"{{ linhaTabela.nome }}"</span>.
      <br />
      Deseja realmente prosseguir com essa alteração?
    </div>
  </base-modal-component>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Projeto } from 'src/api-client';
import { ProjetoService } from 'src/service/projetos/projeto.service';
import { StatusHttpSucesso } from 'src/constants/status-http-sucesso';

const props = defineProps<{
  linhaTabela: Projeto;
}>();

const baseModal = ref();

const atualizarStatus = async () => {
  const servico = props.linhaTabela.concluido
    ? ProjetoService.alterarProjetoFechar
    : ProjetoService.alterarProjetoAbrir;

  const { status } = await servico(props.linhaTabela.id);

  if (status === StatusHttpSucesso.OK) {
    baseModal.value.baseModal = false;
  }
};
</script>

<style lang="scss" src="./atualizar-status-styles.scss" />
