import type { PropsBotao } from '../botao-component/padrao/botao-interface';

export interface PropsCard {
  titulo: string;
  classeCard?: string;
  centralizarHeader?: boolean | undefined;
  acoes?: PropsBotao[];
}
