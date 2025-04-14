import type { QFileProps } from 'quasar';

type PropsEstado = Pick<
  QFileProps,
  'dense' | 'disable' | 'readonly' | 'autofocus' | 'filled' | 'borderless'
>;

type PropsVariante = Pick<QFileProps, 'bgColor' | 'color'>;
type PropsRetorno = Pick<QFileProps, 'label' | 'errorMessage' | 'counter' | 'clearable'>;
type PropsValidacao = Pick<
  QFileProps,
  | 'onClear'
  | 'multiple'
  | 'accept'
  | 'maxFileSize'
  | 'maxTotalSize'
  | 'maxFiles'
  | 'useChips'
  | 'modelValue'
  | 'rules'
>;

export interface PropsFile extends PropsEstado, PropsVariante, PropsRetorno, PropsValidacao {
  classeInput?: string;
  hint: QFileProps['hint'];
}
