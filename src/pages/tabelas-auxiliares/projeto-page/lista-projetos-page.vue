<template>
  <ContainerComponent :visivel="true" titulo="Lista de Projetos">
    <form-component desativar-reset desativar-submit class="contianer-formulario">
      <template #optionalBtn>
        <botao-component icone-esquerda="add" label="projeto" @click="cadastrarNovoProjeto" />
      </template>
    </form-component>
    <tabela-component :rows="dadosTabela" :columns="ListaProjetosColunas">
      <template #concluido="{ cell }">
        <badge-boolean-component :valor="cell" />
      </template>
      <template #acao="{ row }">
        <DropdownComponent :itens="dropdonwItens(row)" />
      </template>
    </tabela-component>
  </ContainerComponent>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Projeto } from 'src/api-client';
import FormComponent from 'src/components/global/form-component/form-component.vue';
import { ListaProjetosColunas } from 'src/pages/tabelas-auxiliares/projeto-page/controle-lista-projeto';
import { ProjetoService } from 'src/service/projetos/projeto.service';
import BadgeBooleanComponent from 'src/components/badge-boolean/badge-boolean-component.vue';
import ModalCadastrarProjeto from 'src/components/modals/cadastrar-projetos/cadastrar-horas-modal.vue';
import { Dialog } from 'quasar';
import { dropdonwItens } from './acoes-tabela';

const dadosTabela = ref<Projeto[]>([]);

const listaDeProjetos = async () => {
  const { data } = await ProjetoService.listarAtvidades(undefined, { mensagem: false });
  if (data) dadosTabela.value = data;
};

const cadastrarNovoProjeto = () => {
  Dialog.create({
    component: ModalCadastrarProjeto,
  }).onOk(() => {
    void listaDeProjetos();
  });
};

onMounted(() => listaDeProjetos());
</script>

<style lang="scss" src="./lista-projetos.scss" />
