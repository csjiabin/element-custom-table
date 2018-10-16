import {
  TableColumn
} from 'element-ui'
import utils from './mixin/utils.js'
let tableColumnProps = Object.assign({}, TableColumn.props)
tableColumnProps.filteredValue = {
  type: Array,
  default: () => []
}
tableColumnProps.filterMultiple = {
  type: Boolean,
  default: false
}
tableColumnProps.minWidth = {
  type: Number,
  default: 50
}
export default {
  name: 'CsTableColumn',
  components: {
    ElTableColumn: TableColumn
  },
  mixins: [utils],
  props: tableColumnProps,
  render (h, ctx) {
    const renderData = {
      props: this.getProps(TableColumn.props)
    }
    return (
      <el-table-column { ...renderData }>
        {this.$scopedSlots.default}
      </el-table-column>
    )
  }
}
