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
import { Dialog } from 'quasar';
import { obterMesesAno } from 'src/constants/meses-constants';
import { anoAtual, mesAtual } from 'src/utils/data-utils';
import { AtividadeService } from 'src/service/atividades/atividades.service';
import type { Atividade } from 'src/api-client';
import { StatusHttpSucesso } from 'src/constants/status-http-sucesso';
import CadastrarAtividadeModal from 'src/components/modals/cadastrar-atividade/cadastrar-atividade-modal.vue';

const formulario = ref<{ mes: number; ano: number }>({
  mes: mesAtual(),
  ano: anoAtual(),
});

const cadastrarHoras = () =>
  Dialog.create({
    component: CadastrarAtividadeModal,
  });

const dadosTabela = ref<Atividade[]>([]);

const pesquisarAtividades = async () => {
  const { data, status } = await AtividadeService.listarAtividadesGeral(formulario.value, {
    mensagem: false,
  });
  if (status === StatusHttpSucesso.OK) dadosTabela.value = data;
};

onMounted(() => void pesquisarAtividades());
</script>
