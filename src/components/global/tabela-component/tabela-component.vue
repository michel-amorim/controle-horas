<template>
  <q-table
    bordered
    flat
    :dense="dense"
    separator="cell"
    table-header-class="header-class-tabela"
    hide-pagination
    wrap-cells
    :rows="rows"
    :columns="columns"
    :class="classeTabela"
    :rows-per-page-options="[0]"
    no-data-label="Nenhum resultado encontrado!"
    row-key="name"
    table-class="linha-cor "
  >
    <template #body-cell="props">
      <q-td :props="props" class="vertical-middle">
        <template v-if="props.col.field === 'acao'">
          <slot :cell="props.value" :name="props.col.field" :row="props.row" />
        </template>

        <template v-else-if="props.value">
          <slot :cell="props.value" :name="props.col.field" :row="props.row">
            {{ props.value }}
          </slot>
        </template>

        <template v-else>
          <q-icon name="close" color="grey-6" size="sm" />
        </template>
      </q-td>
    </template>
  </q-table>
  <template v-if="paginacao && model">
    <PaginacaoComponent v-model="model" :totalPaginas="paginacao" />
  </template>
</template>

<script generic="Datum extends Record<string, unknown>" lang="ts" setup>
import { computed, useModel } from 'vue';
import type { TableProps, TableSlot } from './tabela-interface';
import PaginacaoComponent from 'components/global/tabela-component/paginacao-component.vue';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<TableProps<Datum>>(), {
  rows: () => [],
  columns: () => [],
  classeTabela: '',
});

defineSlots<TableSlot<Datum>>();
const model = useModel(props, 'modelValue');
const columns = computed(() =>
  props.columns.map(col => ({ ...col, headerClasses: 'vertical-middle' })),
);

const rows = computed(() =>
  props.rows.map((row, index) => ({
    ...row,
    classes: index % 2 === 0 ? 'bg-red-1' : 'bg-green-1',
  })),
);
</script>

<style lang="scss" src="./tabela-styles.scss" />
