import { Dialog } from 'quasar';
import type { Projeto } from 'src/api-client';
import AtualizarStatusProjetoModal from 'src/components/modals/atualizar-status-projeto/atualizar-status-projeto-modal.vue';

export function dropdonwItens(linhaTabela: Projeto) {
  const atualizarProjeto = {
    id: 'atualizar-cliente',
    label: 'Atualizar status',
    icon: 'autorenew',

    onClick: () => {
      Dialog.create({
        component: AtualizarStatusProjetoModal,
        componentProps: { linhaTabela },
      });
    },
  };

  const visualizacaoCompleta = {
    id: 'visualizacao-completa',
    label: 'Visualização Completa',
    icon: 'fullscreen',
  };

  const cadastrarHoras = {
    id: 'cadastrar-horas',
    label: 'Cadastrar horas',
    icon: 'schedule',
  };

  return [cadastrarHoras, atualizarProjeto, visualizacaoCompleta];
}
