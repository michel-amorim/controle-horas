import type { TableColumn } from 'src/components/global/tabela-component/tabela-interface';
import type { Atividade } from 'src/api-client';

export const AtividadesColunas: TableColumn<keyof Atividade | 'acao'>[] = [
  { label: 'Nome', field: 'nome', align: 'left' },
  { label: 'Descrição', field: 'descricao', align: 'left' },
  { label: 'Status', field: 'ativo', align: 'center' },
  { label: 'Ações', field: 'acao', align: 'center', style: 'width: 100px; min-width: 100px;' },
];
