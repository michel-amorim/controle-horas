import type { PropsBotao } from '../botao-component/padrao/botao-interface';

export interface PropsContainer {
  titulo: string;
  visivel?: boolean;
  acoes?: PropsBotao[];
}
