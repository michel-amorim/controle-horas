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

export const mockControleHorasData = [
  {
    id: 1,
    nome: 'João Silva',
    cpfCnpj: '123.456.789-00',
    orgaoRemetente: 'Secretaria de Educação',
    complementoRem: 'Sala 203',
    numeroContrato: 'CT-2023-001',
    numeroCartaoPostagem: '9876543210',
    ufRem: 'SP',
    telefone: '(11) 98765-4321',
    email: 'joao.silva@email.com',
  },
  {
    id: 2,
    nome: 'Maria Oliveira',
    cpfCnpj: '987.654.321-00',
    orgaoRemetente: 'Departamento de Finanças',
    complementoRem: null,
    numeroContrato: 'CT-2023-002',
    numeroCartaoPostagem: '1234567890',
    ufRem: 'RJ',
    telefone: '(21) 99876-5432',
    email: 'maria.oliveira@email.com',
  },
  {
    id: 3,
    nome: 'Carlos Souza',
    cpfCnpj: '321.654.987-00',
    orgaoRemetente: 'Gabinete do Prefeito',
    complementoRem: 'Anexo B',
    numeroContrato: 'CT-2023-003',
    numeroCartaoPostagem: '5647382910',
    ufRem: 'MG',
    telefone: '(31) 91234-5678',
    email: 'carlos.souza@email.com',
  },
];
