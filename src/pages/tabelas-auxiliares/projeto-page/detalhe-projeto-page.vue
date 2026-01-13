<template>
  <ContainerComponent :visivel="true" :titulo="titulo">
    <div class="projeto-detalhes">
      <!-- Header com ações -->
      <div class="detalhes-header">
        <div class="detalhes-acoes">
          <BotaoComponent
            :label="modoEdicao ? 'Cancelar' : 'Editar'"
            :icone-esquerda="modoEdicao ? 'close' : 'edit'"
            @click="toggleModoEdicao"
          />
          <BotaoComponent
            v-if="modoEdicao"
            label="Salvar"
            icone-esquerda="done"
            color="positive"
            @click="salvarProjeto"
          />
          <BotaoComponent
            v-else
            :label="projeto?.concluido ? 'Reabrir Projeto' : 'Fechar Projeto'"
            :icone-esquerda="projeto?.concluido ? 'toggle_on' : 'toggle_off'"
            @click="alterarStatusProjeto"
          />
        </div>
      </div>

      <!-- Informações do Projeto -->
      <CardComponent titulo="Informações do Projeto">
        <div class="projeto-info-grid">
          <EditableFieldComponent
            v-model="formulario.nome"
            label="Nome"
            :editing="modoEdicao"
            type="text"
          />
          <EditableFieldComponent
            v-model="formulario.origem"
            label="Origem"
            :editing="modoEdicao"
            type="text"
          />
          <EditableFieldComponent
            v-model="formulario.cor"
            label="Cor"
            :editing="modoEdicao"
            type="color"
          />
          <EditableFieldComponent
            :model-value="String(formulario.horasMaxima || '')"
            label="Horas Máximas"
            :editing="modoEdicao"
            type="number"
            @update:model-value="formulario.horasMaxima = Number($event) || 0"
          />

          <!-- Status do Projeto -->
          <div class="field-display">
            <div class="field-label">Status</div>
            <div class="status-badge">
              <BadgeBooleanComponent :valor="!projeto?.concluido" />
              <span>{{ projeto?.concluido ? 'Concluído' : 'Ativo' }}</span>
            </div>
          </div>
        </div>

        <!-- Progresso de Horas -->
        <div v-if="horasInfo && projeto?.horasMaxima" class="horas-progresso">
          <div class="progresso-label">
            Horas Trabalhadas: <strong>{{ horasInfo.horasFormatadas }}</strong>
            <span>de {{ projeto.horasMaxima }}h</span>
          </div>
          <q-linear-progress
            :value="horasInfo.horasTrabalhadas / projeto.horasMaxima"
            :color="corProgresso"
            size="20px"
            class="q-mt-sm"
          >
            <div class="absolute-full flex flex-center">
              <span class="text-white text-bold">
                {{ ((horasInfo.horasTrabalhadas / projeto.horasMaxima) * 100).toFixed(0) }}%
              </span>
            </div>
          </q-linear-progress>
        </div>
      </CardComponent>

      <!-- Lista de Atividades -->
      <CardComponent titulo="Atividades" class="q-mt-md">
        <template #acoes>
          <BotaoComponent
            label="Nova Atividade"
            icone-esquerda="add"
            @click="cadastrarAtividade"
          />
          <BotaoComponent
            :label="mostrarInativos ? 'Ocultar Inativas' : 'Mostrar Inativas'"
            :icone-esquerda="mostrarInativos ? 'visibility_off' : 'visibility'"
            flat
            @click="toggleMostrarInativos"
          />
        </template>

        <TabelaComponent :rows="atividadesFiltradas" :columns="AtividadesColunas">
          <template #ativo="{ cell }">
            <BadgeBooleanComponent :valor="cell" />
          </template>
          <template #acao="{ row }">
            <div class="acoes-atividade">
              <BotaoComponent
                icone-esquerda="edit"
                flat
                dense
                @click="editarAtividade(row as Atividade)"
              />
              <BotaoComponent
                :icone-esquerda="(row as Atividade).ativo ? 'visibility_off' : 'visibility'"
                flat
                dense
                :color="(row as Atividade).ativo ? 'warning' : 'positive'"
                @click="alterarStatusAtividade(row as Atividade)"
              />
            </div>
          </template>
        </TabelaComponent>
      </CardComponent>
    </div>
  </ContainerComponent>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import ContainerComponent from 'src/components/global/container-component/container-component.vue';
import CardComponent from 'src/components/global/card-component/card-component.vue';
import TabelaComponent from 'src/components/global/tabela-component/tabela-component.vue';
import BotaoComponent from 'src/components/global/botao-component/padrao/botao-component.vue';
import BadgeBooleanComponent from 'src/components/badge-boolean/badge-boolean-component.vue';
import EditableFieldComponent from 'src/components/global/editable-field/editable-field.vue';
import CadastrarAtividadeModal from 'src/components/modals/cadastrar-atividade/cadastrar-atividade-modal.vue';
import EditarAtividadeModal from 'src/components/modals/editar-atividade/editar-atividade-modal.vue';
import { ProjetoService } from 'src/service/projetos/projeto.service';
import type { Projeto, Atividade, AtualizarProjetoDto } from 'src/api-client';
import { StatusHttpSucesso } from 'src/constants/status-http-sucesso';
import { Notify, Dialog } from 'quasar';
import { AtividadesColunas } from './detalhe-projeto-colunas';

interface HorasInfo {
  projetoId: string;
  horasTrabalhadas: number;
  horasFormatadas: string;
}

const route = useRoute();
const projetoId = (route.params.id as string) || '';

const projeto = ref<Projeto | null>(null);
const horasInfo = ref<HorasInfo | null>(null);
const atividades = ref<Atividade[]>([]);
const modoEdicao = ref(false);
const mostrarInativos = ref(false);

const formulario = ref<AtualizarProjetoDto>({
  nome: '',
  origem: '',
  cor: '',
  horasMaxima: 0,
});

const titulo = computed(() =>
  projeto.value ? `Projeto: ${projeto.value.nome}` : 'Detalhes do Projeto'
);

const atividadesFiltradas = computed(() =>
  mostrarInativos.value
    ? atividades.value
    : atividades.value.filter((a) => a.ativo)
);

const corProgresso = computed(() => {
  if (!projeto.value?.horasMaxima || !horasInfo.value) return 'primary';
  const percentual =
    (horasInfo.value.horasTrabalhadas / projeto.value.horasMaxima) * 100;
  if (percentual >= 90) return 'negative';
  if (percentual >= 75) return 'warning';
  return 'positive';
});

const carregarProjeto = async () => {
  try {
    const { data, status } = await ProjetoService.encontrar({ id: projetoId }, {
      mensagem: false,
    });

    if (status === StatusHttpSucesso.OK) {
      projeto.value = data;
      formulario.value = {
        nome: data.nome,
        origem: data.origem,
        cor: data.cor,
        horasMaxima: data.horasMaxima,
      };
    }
  } catch {
    Notify.create({
      type: 'negative',
      message: 'Erro ao carregar projeto',
    });
  }
};

const carregarHoras = async () => {
  try {
    const { data, status } = await ProjetoService.calcularHoras({ id: projetoId }, {
      mensagem: false,
    });

    if (status === StatusHttpSucesso.OK) {
      horasInfo.value = data;
    }
  } catch {
    // Erro ao carregar horas - será exibido em outro local ou log
  }
};

const carregarAtividades = async () => {
  try {
    const { data, status } = await ProjetoService.listarAtividades(
      { id: projetoId },
      {
        mensagem: false,
        params: { mostrarInativos: mostrarInativos.value },
      }
    );

    if (status === StatusHttpSucesso.OK) {
      atividades.value = data;
    }
  } catch {
    Notify.create({
      type: 'negative',
      message: 'Erro ao carregar atividades',
    });
  }
};

const toggleModoEdicao = () => {
  if (modoEdicao.value) {
    // Cancelar - restaurar valores originais
    formulario.value = {
      nome: projeto.value?.nome || '',
      origem: projeto.value?.origem || '',
      cor: projeto.value?.cor || '',
      horasMaxima: projeto.value?.horasMaxima || 0,
    };
  }
  modoEdicao.value = !modoEdicao.value;
};

const salvarProjeto = async () => {
  try {
    const { status } = await ProjetoService.atualizar(
      { id: projetoId, dto: formulario.value }
    );

    if (status === StatusHttpSucesso.OK) {
      Notify.create({
        type: 'positive',
        message: 'Projeto atualizado com sucesso',
      });
      modoEdicao.value = false;
      await carregarProjeto();
    }
  } catch {
    Notify.create({
      type: 'negative',
      message: 'Erro ao atualizar projeto',
    });
  }
};

const alterarStatusProjeto = async () => {
  try {
    const metodo = projeto.value?.concluido
      ? ProjetoService.abrir
      : ProjetoService.fechar;

    const { status } = await metodo({ id: projetoId });

    if (status === StatusHttpSucesso.OK) {
      const acao = projeto.value?.concluido ? 'reaberto' : 'fechado';
      Notify.create({
        type: 'positive',
        message: `Projeto ${acao} com sucesso`,
      });
      await carregarProjeto();
    }
  } catch (error: unknown) {
    let mensagem = 'Erro ao alterar status do projeto';
    if (typeof error === 'object' && error !== null && 'response' in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      mensagem = axiosError.response?.data?.message || mensagem;
    }
    Notify.create({
      type: 'negative',
      message: mensagem,
    });
  }
};

const cadastrarAtividade = () => {
  void Dialog.create({
    component: CadastrarAtividadeModal,
    componentProps: {
      projetoId: projetoId,
    },
  }).onOk(() => {
    void carregarAtividades();
    void carregarHoras();
  });
};

const editarAtividade = (atividade: Atividade) => {
  void Dialog.create({
    component: EditarAtividadeModal,
    componentProps: {
      atividade,
    },
  }).onOk(() => {
    void carregarAtividades();
  });
};

const alterarStatusAtividade = async (atividade: Atividade) => {
  try {
    const { status } = await ProjetoService.alterarStatusAtividade({
      id: atividade.id,
      dto: { ativo: !atividade.ativo },
    });

    if (status === StatusHttpSucesso.OK) {
      const acao = atividade.ativo ? 'desativada' : 'ativada';
      Notify.create({
        type: 'positive',
        message: `Atividade ${acao} com sucesso`,
      });
      await carregarAtividades();
    }
  } catch {
    Notify.create({
      type: 'negative',
      message: 'Erro ao alterar status da atividade',
    });
  }
};

const toggleMostrarInativos = () => {
  mostrarInativos.value = !mostrarInativos.value;
  void carregarAtividades();
};

onMounted(() => {
  void carregarProjeto();
  void carregarHoras();
  void carregarAtividades();
});
</script>

<style lang="scss" scoped>
.projeto-detalhes {
  .detalhes-header {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 4px;
    display: flex;
    justify-content: flex-end;

    .detalhes-acoes {
      display: flex;
      gap: 0.5rem;
    }
  }

  .projeto-info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 1rem;
  }

  .field-display {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    .field-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: #666;
    }

    .status-badge {
      padding: 0.75rem;
      background-color: #f5f5f5;
      border-radius: 4px;
      border: 1px solid #e0e0e0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
      color: #333;
    }
  }

  .horas-progresso {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid #e0e0e0;

    .progresso-label {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0.5rem;

      strong {
        color: #1976d2;
      }

      span {
        color: #999;
        margin-left: 0.5rem;
      }
    }
  }

  .acoes-atividade {
    display: flex;
    gap: 0.25rem;
  }
}
</style>
