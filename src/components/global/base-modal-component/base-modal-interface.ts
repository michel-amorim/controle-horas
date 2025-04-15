export interface DialogCabecalhoInterface {
  titulo?: string;
  icone?: string;
  corCabecalho?: string;
}

export interface DialogCorpoInterface {
  skeleton?: boolean;
  quantidadeSkeleton?: number;
  fullWidth?: boolean;
  modalClass?: string;
}

export interface DialogRodapeInterface {
  labelBotaoDireito?: string;

  corBotaoDireito?: string;
  labelBotaoEsquerdo?: string;
  corBotaoEsquerdo?: string;
  disableBotaoDireito?: boolean;
  disableBotaoEsquerdo?: boolean;
  acoes?: boolean;
}

export interface DialogOpcoesInterface {
  modalMaximo?: boolean;
  persistent?: boolean;
}

export interface PropsModal
  extends DialogCabecalhoInterface,
    DialogCorpoInterface,
    DialogRodapeInterface,
    DialogOpcoesInterface {}
