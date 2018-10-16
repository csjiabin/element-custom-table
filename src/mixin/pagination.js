import {
  Pagination
} from 'element-ui'
import 'element-ui/lib/theme-chalk/pagination.css'
export default {
  components: {
    ElPagination: Pagination
  },
  props: Pagination.props,
  methods: {
    pageSizeChange (size) {
      this.$emit('page-size-change', size)
      this.$emit('update:pageSize', size)
    },
    pageCurrentChange (page) {
      this.$emit('page-current-change', page)
      this.$emit('update:currentPage', page)
    },
    pagePrevClick (page) {
      this.$emit('page-prev-click', page)
    },
    pageNextClick (page) {
      this.$emit('page-next-click', page)
    },
    renderPager () {
      const h = this.$createElement
      const renderPagerParams = {
        style: {
          'margin-top': '16px',
          'text-align': 'center'
        },
        props: this.getProps(Pagination.props),
        on: {
          'size-change': this.pageSizeChange,
          'current-change': this.pageCurrentChange,
          'prev-click': this.pagePrevClick,
          'next-click': this.pageNextClick
        }
      }
      return h(
        'el-pagination', renderPagerParams
      )
    }
  }
}
