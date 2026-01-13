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
import { Notify } from 'quasar';

const props = defineProps<{
  linhaTabela: Projeto;
}>();

const baseModal = ref();
const emit = defineEmits(['ok']);

const atualizarStatus = async () => {
  try {
    const { status } = await (props.linhaTabela.concluido
      ? ProjetoService.abrir({ id: props.linhaTabela.id })
      : ProjetoService.fechar({ id: props.linhaTabela.id }));

    if (status === StatusHttpSucesso.OK) {
      emit('ok');
      baseModal.value?.fechar?.();
    }
  } catch (error) {
    console.error('Erro ao atualizar status:', error);
    Notify.create({
      type: 'negative',
      message: 'Erro ao atualizar status do projeto',
    });
  }
};
</script>

<style lang="scss" src="./atualizar-status-styles.scss" />
