<template>
  <ContainerComponent :visivel="true" titulo="Lista de atividades">
    <FormComponent class="q-mb-md" @submit="pesquisarAtividades">
      <div class="row q-gutter-x-sm">
        <SelecaoComponent
          input-class="col"
          label="Mês"
          :opcoes="obterMesesAno()"
          v-model="formulario.mes"
        />
        <InputComponent input-class="col" label="Ano" v-model="formulario.ano" />
      </div>
      <template #optionalBtn>
        <BotaoComponent icone-esquerda="add" label="atividade" @click="cadastrarHoras" />
      </template>
    </FormComponent>
    <TabelaComponent :rows="dadosTabela" :columns="ControleHorasColunas" />
  </ContainerComponent>
</template>

<script setup lang="ts">
import FormComponent from 'src/components/global/form-component/form-component.vue';
import TabelaComponent from 'src/components/global/tabela-component/tabela-component.vue';
import { onMounted, ref } from 'vue';
import { ControleHorasColunas } from './controle-horas-colunas';
import { Dialog, Notify } from 'quasar';
import { obterMesesAno } from 'src/constants/meses-constants';
import { anoAtual, mesAtual } from 'src/utils/data-utils';
import { ProjetoService } from 'src/service/projetos/projeto.service';
import type { RelatorioItemDto } from 'src/api-client';
import { StatusHttpSucesso } from 'src/constants/status-http-sucesso';
import CadastrarAtividadeModal from 'src/components/modals/cadastrar-atividade/cadastrar-atividade-modal.vue';

const formulario = ref<{ mes: number; ano: number }>({
  mes: mesAtual(),
  ano: anoAtual(),
});

const cadastrarHoras = () => {
  void Dialog.create({
    component: CadastrarAtividadeModal,
  }).onOk(() => {
    void pesquisarAtividades();
  });
};

const dadosTabela = ref<RelatorioItemDto[]>([]);
const carregando = ref(false);

const pesquisarAtividades = async () => {
  try {
    carregando.value = true;
    const { data, status } = await ProjetoService.relatorio(formulario.value, {
      mensagem: false,
    });
    if (status === StatusHttpSucesso.OK) {
      dadosTabela.value = data || [];
    }
  } catch (error) {
    console.error('Erro ao buscar atividades:', error);
    Notify.create({
      type: 'negative',
      message: 'Erro ao buscar relatório de horas',
    });
  } finally {
    carregando.value = false;
  }
};

onMounted(() => void pesquisarAtividades());
</script>
