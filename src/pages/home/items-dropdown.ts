import { Dialog } from 'quasar';
import DoisBotõesModal from 'src/components/modais-components/dois-botoes/dois-botões-modal.vue';
import SemBotõesModal from 'src/components/modais-components/sem-botoes/sem-botões-modal.vue';
import UmBotõesModal from 'src/components/modais-components/um-botao/um-botões-modal.vue';

export function itensDropdown() {
  const semBotoes = {
    id: 'sem-botao',
    label: 'Modal um botão',
    icon: 'looks_two',
    onClick: () => {
      Dialog.create({
        component: UmBotõesModal,
      });
    },
  };

  const umBotao = {
    id: 'um-botao',
    label: 'Modal sem botão',
    icon: 'error',
    onClick: () => {
      Dialog.create({
        component: SemBotõesModal,
      });
    },
  };
  const doisBotoes = {
    id: 'editar-grupo',
    label: 'Modal dois botões',
    icon: 'looks_one',
    onClick: () => {
      Dialog.create({
        component: DoisBotõesModal,
      });
    },
  };

  return [doisBotoes, umBotao, semBotoes];
}
