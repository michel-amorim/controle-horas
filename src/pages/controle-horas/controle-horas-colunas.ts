import type { TableColumn } from 'src/components/global/tabela-component/tabela-interface';

export interface ControleHorasColunasModel {
  id: number | string;
  nome: string;
  cpfCnpj: string;
  orgaoRemetente: string;
  complementoRem: string | null;
  numeroContrato: string;
  numeroCartaoPostagem: string;
  ufRem: string;
  telefone: string;
  email: string;
}

export type ControleHorasColunasType = keyof ControleHorasColunasModel | 'acao';

export const ControleHorasColunas: TableColumn<ControleHorasColunasType>[] = [
  { label: 'Nome', field: 'nome', align: 'center' },
  { label: 'CPF/CNPJ', field: 'cpfCnpj', align: 'center' },
  { label: 'Órgão Remetente', field: 'orgaoRemetente', align: 'center' },
  { label: 'Cidade/UF', field: 'ufRem', align: 'center' },
];
