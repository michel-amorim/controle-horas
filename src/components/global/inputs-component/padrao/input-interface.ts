import type { QIconProps, QInputProps } from 'quasar';

export type PropsEstado = Pick<
  QInputProps,
  | 'dense'
  | 'outlined'
  | 'disable'
  | 'readonly'
  | 'autofocus'
  | 'autogrow'
  | 'filled'
  | 'inputClass'
  | 'modelValue'
>;
export type VariantProps = Pick<QInputProps, 'bgColor' | 'type' | 'color'>;
type PropsFeedback = Pick<QInputProps, 'label' | 'errorMessage' | 'hint' | 'counter' | 'clearable'>;

type PropsValidacao = Pick<QInputProps, 'mask' | 'rules' | 'maxlength' | 'onClear'>;

type PropsIcone = {
  corIcone?: QIconProps['color'];
  iconeEsquerdo?: QIconProps['name'];
  iconeDireito?: QIconProps['name'];
};

type PropsEvento = {
  iconeEsquerdoClick?: () => void;
  iconeDireitoClick?: () => void;
};

export interface PropsInputPadrao
  extends PropsEstado,
    VariantProps,
    PropsFeedback,
    PropsIcone,
    PropsValidacao,
    PropsEvento {
  textareaRows?: number;
  inputClass?: string;
  titulo?: string;
}
