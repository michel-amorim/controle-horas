import type { QIconProps } from 'quasar';
import type { PropsInputPadrao } from '../padrao/input-interface';

type PropsEstado = Pick<PropsInputPadrao, 'filled' | 'readonly' | 'disable' | 'dense' | 'color'>;
type PropsValidacao = Pick<PropsInputPadrao, 'rules' | 'label' | 'modelValue' | 'outlined'>;
type PropsIcone = {
  iconeEsquerda?: QIconProps['name'];
};

export interface PropsInputHora extends PropsEstado, PropsValidacao, PropsIcone {
  inputClass?: string;
}
