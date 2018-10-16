import DataTable from './data-table'
// import TableColumn from './table-column'
import { TableColumn } from 'element-ui'

TableColumn.name = 'CsTableColumn'
export { DataTable, TableColumn }
/* istanbul ignore next */
DataTable.install = function install (Vue) {
  Vue.component(DataTable.name, DataTable)
  Vue.component(TableColumn.name, TableColumn)
}

export default DataTable
