export const obterMesesAno = (): { label: string; value: number }[] => {
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  return meses.map((mes, index) => ({
    label: mes,
    value: index + 1,
  }));
};
