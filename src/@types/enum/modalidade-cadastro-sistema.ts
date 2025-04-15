export const ModalidadeCadastroSistema = {
  FRONT_END: 'FRONTEND',
  BACK_END: 'BACKEND',
} as const;

export const opcoesModalidadeCadastroSistema = Object.entries(ModalidadeCadastroSistema).map(
  ([key, value]) => ({
    label: key.replace('_', '-').toLowerCase(),
    value,
  }),
);
