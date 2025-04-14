import type { QDateProps, QIconProps } from 'quasar';
import type { PropsInputPadrao } from '../padrao/input-interface';

type PropsEstado = Pick<PropsInputPadrao, 'filled' | 'readonly' | 'disable' | 'dense' | 'color'>;
type PropsValidacao = Pick<
  PropsInputPadrao,
  'rules' | 'mask' | 'label' | 'modelValue' | 'outlined'
>;

type PropsData = Pick<QDateProps, 'range'>;
type PropsIcone = {
  iconeEsquerda?: QIconProps['name'];
};

export interface PropsInputData extends PropsEstado, PropsValidacao, PropsData, PropsIcone {
  inputClass?: string;
}
