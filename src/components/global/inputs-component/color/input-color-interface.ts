import type { QColorProps } from 'quasar';
import type { PropsInputPadrao } from '../padrao/input-interface';

type inputProps = Pick<PropsInputPadrao, 'outlined' | 'rules'>;
type StateProps = Pick<
  QColorProps,
  'bordered' | 'noFooter' | 'noHeader' | 'defaultView' | 'formatModel' | 'disable'
>;

export interface InputColorProps extends inputProps, StateProps {
  modelValue: string | undefined;
}
