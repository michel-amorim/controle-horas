const FormRules = {
  campoObrigatorio(value: unknown) {
    if (!value) return 'Esse campo é obrigatório';
    if (Array.isArray(value) && value.length === 0) return 'Esse campo é obrigatório';

    return true;
  },
  tamanhoMinimo(min: number) {
    return (value: []) => value?.length >= min || `Este campo deve ter ao menos ${min} caracteres`;
  },
};

export default FormRules;
