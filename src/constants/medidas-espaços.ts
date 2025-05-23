export const Medidas = {
  '2xs': '2px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '40px',
  '3xl': '48px',
  '4xl': '56px',
  '5xl': '64px',
} as const;

export type MedidasKeys = keyof typeof Medidas;
export type MedidasValor = (typeof Medidas)[MedidasKeys];
