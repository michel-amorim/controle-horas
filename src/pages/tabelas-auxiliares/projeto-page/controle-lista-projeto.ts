import type { Projeto } from 'src/api-client';
import type { TableColumn } from 'src/components/global/tabela-component/tabela-interface';

export type ListaProjetosColunasType = keyof Projeto | 'acao';

export const ListaProjetosColunas: TableColumn<ListaProjetosColunasType>[] = [
  { label: 'Nome', field: 'nome', align: 'center' },
  { label: 'Origem', field: 'origem', align: 'center' },
  { label: 'Horas Maximas', field: 'horasMaxima', align: 'center' },
  { label: 'Concluido', field: 'concluido', align: 'center' },
  { label: 'Ação', field: 'acao', align: 'center' },
];
