
import utils from './mixin/utils.js'
import table from './mixin/table.js'
import pagination from './mixin/pagination.js'
import { Card } from 'element-ui'
import 'element-ui/lib/theme-chalk/card.css'
export default {
  name: 'CsDataTable',
  components: {
    ElCard: Card
  },
  mixins: [utils, table, pagination],
  props: Card.props,
  render (h, ctx) {
    const renderCardParams = {
      props: this.getProps(Card.props)
    }
    return h('el-card', renderCardParams, [
      this.renderSlot('header'),
      this.renderTable(),
      this.renderPager()
    ])
  }
}
