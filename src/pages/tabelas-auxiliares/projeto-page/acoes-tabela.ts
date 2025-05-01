import { Dialog } from 'quasar';
import type { Projeto } from 'src/api-client';
import AtualizarStatusProjetoModal from 'src/components/modals/atualizar-status-projeto/atualizar-status-projeto-modal.vue';
import VisualziarProjetoModal from 'src/components/modals/visualizacao-completa/visualizar-projeto/visualziar-projeto-modal.vue';

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
    onClick: () => {
      Dialog.create({
        component: VisualziarProjetoModal,
        componentProps: { linhaTabela },
      });
    },
  };

  const cadastrarHoras = {
    id: 'cadastrar-horas',
    label: 'Cadastrar horas',
    icon: 'schedule',
  };

  const editarCadastroProjeto = {
    id: 'editar-cadastro',
    label: 'Editar cadastro projeto',
    icon: 'edit',
    onClick: () => alert('Precisa fazer o endpoint!'),
  };

  return [cadastrarHoras, atualizarProjeto, visualizacaoCompleta, editarCadastroProjeto];
}
