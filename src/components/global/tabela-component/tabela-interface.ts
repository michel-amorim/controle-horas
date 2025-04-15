import type { QTableColumn, QTableProps } from 'quasar';
import type { PropsPaginacao } from './paginacao-interface';

export type TableColumn<Field> = {
  name?: string;
  field: Field;
  label?: string;
  required?: boolean;
  align?: QTableColumn['align'];
  sortable?: QTableColumn['sortable'];
  classes?: string;
  style?: string;
  format?: QTableColumn['format'];
};

export type TableSlot<
  Value = unknown,
  Datum extends Record<string, Value> = Record<string, Value>,
  SlotName extends string = Extract<keyof Datum, string>,
> = {
  [PropName in SlotName]: (props: { row: TableRow<Datum>; cell: Datum[PropName] }) => unknown[];
};

export type TableRow<
  Entity extends Record<string, Value>,
  Value = unknown,
  Columns extends string = Extract<keyof Entity, string>,
> = {
  [Column in Columns]: Entity[Column];
};
export interface TableProps<
  Entity extends Record<Columns, Value>,
  ExtraColumns extends string = string,
  Columns extends string = Extract<keyof Entity, string> | ExtraColumns,
  Value = unknown,
> {
  rows: Entity[];
  columns: TableColumn<Columns>[];
  modelValue?: PropsPaginacao['modelValue'];
  paginacao?: PropsPaginacao['totalPaginas'];
  dense?: QTableProps['dense'];
  classeTabela?: string;
}
