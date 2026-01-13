<template>
  <base-modal-component
    ref="baseModal"
    modal-class="container-modal"
    :titulo="`projeto ${linhaTabela.nome}`"
    :skeleton="loading"
  >
    <pre>{{ listaAtividadesProjeto }}</pre>
  </base-modal-component>
</template>

<script setup lang="ts">
import type { Atividade, Projeto } from 'src/api-client';
import { StatusHttpSucesso } from 'src/constants/status-http-sucesso';
import { ProjetoService } from 'src/service/projetos/projeto.service';
import { onMounted, ref } from 'vue';

const props = defineProps<{
  linhaTabela: Projeto;
}>();
const listaAtividadesProjeto = ref<Atividade[]>([]);
const loading = ref(false);

const buscarDetalhesProjeto = async () => {
  try {
    loading.value = true;
    const { status, data } = await ProjetoService.listarAtividades(
      { id: props.linhaTabela.id },
      {
        mensagem: false,
        loading: false,
      },
    );

    if (status === StatusHttpSucesso.OK) listaAtividadesProjeto.value = data;
  } catch (error) {
    console.error('Erro ao buscar atividades:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => buscarDetalhesProjeto());
</script>

<style lang="scss" src="./visualizar-projeto-styles.scss" />
