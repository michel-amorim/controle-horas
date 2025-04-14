import type { QIconProps, QSelectProps } from 'quasar';

type PropsEstado = Pick<
  QSelectProps,
  | 'dense'
  | 'disable'
  | 'outlined'
  | 'readonly'
  | 'filled'
  | 'clearable'
  | 'color'
  | 'bgColor'
  | 'modelValue'
  | 'autofocus'
  | 'inputClass'
>;
type PropsVariante = Pick<
  QSelectProps,
  | 'multiple'
  | 'useInput'
  | 'optionLabel'
  | 'optionValue'
  | 'useChips'
  | 'hideDropdownIcon'
  | 'onFilter'
>;

type PropsRetorno = Pick<QSelectProps, 'hint' | 'errorMessage' | 'label'>;
type PropsValidacao = Pick<QSelectProps, 'rules'>;

export interface OpcaoSelecaoComRotulo<T = string> {
  label: string;
  value: T;
}

export type OpcaoSelecao<T = string> = OpcaoSelecaoComRotulo<T> | T;

type PropsIcone = {
  corIcone?: QIconProps['color'];
  iconeEsquerdo?: QIconProps['name'];
  iconeDireito?: QIconProps['name'];
};

type EventoClick = {
  iconeEsquerdoClick?: () => void;
  iconeDireitoClick?: () => void;
};

export interface PropsInputSelecao<Value = string>
  extends PropsEstado,
    PropsVariante,
    PropsRetorno,
    PropsValidacao,
    PropsIcone,
    EventoClick {
  opcoes?: OpcaoSelecao<Value>[];
  isChips?: boolean;
}
