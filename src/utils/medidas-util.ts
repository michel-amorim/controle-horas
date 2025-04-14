import { Medidas } from 'src/constants/medidas-espaços';

export function obterTamanho(size: keyof typeof Medidas): string {
  return Medidas[size];
}
