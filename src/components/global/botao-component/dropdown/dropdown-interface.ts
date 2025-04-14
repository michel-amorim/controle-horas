import type { QItemProps, QIconProps, QBtnDropdown } from 'quasar';
import type { PropsEstado } from '../padrao/botao-interface';

export type PropsItensSelecao = Pick<QItemProps, 'exact' | 'href' | 'onClick'> & {
  id: string;
  label: string;
  icon?: QIconProps['name'];
};

export interface PropsBotaoDropdown extends PropsEstado {
  label?: QBtnDropdown['label'];
  cor?: QBtnDropdown['color'];
  itens: PropsItensSelecao[];
  classeBotao?: string;
}
