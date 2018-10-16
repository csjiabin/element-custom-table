import {
  Table
} from 'element-ui'
import 'element-ui/lib/theme-chalk/table.css'
let tableProps = Object.assign({}, Table.props)
delete tableProps.size
export default {
  components: {
    ElTable: Table
  },
  props: Object.assign({
    tableSize: String, // medium / small / mini
    tableClass: {
      type: String,
      default: ''
    }
  }, tableProps),
  methods: {
    clearSelection () {
      this.$refs.table.clearSelection()
    },
    toggleRowSelection (row, selected) {
      this.$refs.table.toggleRowSelection(row, selected)
    },
    toggleAllSelection () {
      this.$refs.table.toggleAllSelection()
    },
    toggleRowExpansion (row, expanded) {
      this.$refs.table.toggleRowExpansion(row, expanded)
    },
    setCurrentRow (row) {
      this.$refs.table.setCurrentRow(row)
    },
    clearSort () {
      this.$refs.table.clearSort()
    },
    clearFilter () {
      this.$refs.table.clearFilter()
    },
    doLayout () {
      this.$refs.table.doLayout()
    },
    sort (prop, order) {
      this.$refs.table.sort(prop, order)
    },
    select (selection, row) {
      this.$emit('select', selection, row)
    },
    selectAll (selection) {
      this.$emit('select-all', selection)
    },
    selectionChange (selection) {
      this.$emit('selection-change', selection)
    },
    cellMouseEnter (row, column, cell, event) {
      this.$emit('cell-mouse-enter', row, column, cell, event)
    },
    cellMouseLeave (row, column, cell, event) {
      this.$emit('cell-mouse-leave', row, column, cell, event)
    },
    cellClick (row, column, cell, event) {
      this.$emit('cell-click', row, column, cell, event)
    },
    cellDblclick (row, event) {
      this.$emit('cell-dblclick', row, event)
    },
    rowClick (row, event, column) {
      this.$emit('row-click', row, event, column)
    },
    rowContextmenu (row, event) {
      this.$emit('row-contextmenu', row, event)
    },
    rowDblclick (row, event) {
      this.$emit('row-dblclick', row, event)
    },
    headerClick (column, event) {
      this.$emit('header-click', column, event)
    },
    headerContextmenu (column, event) {
      this.$emit('header-contextmenu', column, event)
    },
    sortChange ({
      column,
      prop,
      order
    }) {
      this.$emit('sort-change', {
        column,
        prop,
        order: order ? order.replace('ending', '') : null
      })
    },
    filterChange (filters) {
      this.$emit('filter-change', filters)
    },
    highlightChange (currentRow, oldCurrentRow) {
      this.$emit('highlight-change', currentRow, oldCurrentRow)
    },
    headerDragend (newWidth, oldWidth, column, event) {
      this.$emit('header-dragend', newWidth, oldWidth, column, event)
    },
    expandChange (row, expandedRows) {
      this.$emit('expand-change', row, expandedRows)
    },
    renderTable () {
      const h = this.$createElement
      const renderTableParams = {
        ref: 'table',
        class: this.tableClass,
        props: Object.assign({
          size: this.tableSize
        }, this.getProps(Table.props)),
        on: {
          'select': this.select,
          'select-all': this.selectAll,
          'selection-change': this.selectionChange,
          'cell-mouse-enter': this.cellMouseEnter,
          'cell-mouse-leave': this.cellMouseLeave,
          'cell-click': this.cellClick,
          'cell-dblclick': this.cellDblclick,
          'row-click': this.rowClick,
          'row-contextmenu': this.rowContextmenu,
          'row-dblclick': this.rowDblclick,
          'header-click': this.headerClick,
          'header-contextmenu': this.headerContextmenu,
          'sort-change': this.sortChange,
          'filter-change': this.filterChange,
          'current-change': this.highlightChange,
          'header-dragend': this.headerDragend,
          'expand-change': this.expandChange
        }
      }
      return h('el-table', renderTableParams, [
        this.renderSlot('default'),
        this.renderSlot('append'),
        this.renderSlot('empty')
      ])
    }
  }
}
