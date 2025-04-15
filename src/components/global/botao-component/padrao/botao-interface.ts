import type { QBtnProps } from 'quasar';
import type { MaterialIconValues } from 'src/constants/lista-icons-constants';
import type { MedidasKeys } from 'src/constants/medidas-espaços';

export type PropsEstado = Pick<QBtnProps, 'disable' | 'flat' | 'outline' | 'dense' | 'round'>;

type PropsConteudo = Pick<QBtnProps, 'label' | 'onClick' | 'type' | 'href' | 'textColor' | 'color'>;

type PropsVariante = {
  iconeEsquerda?: MaterialIconValues | undefined;
  iconeDireita?: MaterialIconValues | undefined;
};

export interface PropsBotao extends PropsEstado, PropsVariante, PropsConteudo {
  tooltip?: string | undefined;
  classeBotao?: string | undefined;
  id?: string;
  badge?: string | number | null;
  corBadge?: string;
  size?: MedidasKeys;
}
