import type { QDateProps } from 'quasar';
import type { PropsInputPadrao } from '../padrao/input-interface';

type StateProps = Pick<QDateProps, 'mask' | 'bordered' | 'range' | 'disable' | 'readonly'>;
type VariantProps = Pick<QDateProps, 'textColor' | 'color'>;

export interface InputDataHoraProps extends PropsInputPadrao, StateProps, VariantProps {
  modelValue: string | null | undefined;
}
