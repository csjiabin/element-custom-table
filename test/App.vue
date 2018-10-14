<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <p><a href="https://github.com/csjiabin/element-custom-table">github</a></p>
    <cs-data-table
      v-loading="loading"
      style="width:1000px;margin:auto;"
      :data="data.list"
      ref="table"
      layout="sizes,prev,pager,next,total"
      :total="data.total"
      :current-page.sync="params.page"
      :page-sizes="[5, 10, 15]"
      :page-size.sync="params.pageSize"
      :body-style="{ padding: 0,paddingBottom:'16px' }"
      @selection-change="handleSelectionChange"
      :header="`selection ${multipleSelection.length}`">
      <cs-table-column type="selection" width="60" fixed/>
      <cs-table-column type="index" width="50" fixed/>
      <template v-for="(item,idx) in headers">
        <cs-table-column
          :prop="item.value"
          :label="item.text"
          :sortable="item.sortable"
          :min-width="item.minWidth || 100"
          :key="idx"/>
      </template>
      <cs-table-column
        fixed="right"
        prop="status"
        label="Status"
        align="center"
        width="80"
        :filters="[{text: 'good', value: 'good'}, {text: 'bad', value: 'bad'}]"
        :filter-method="filterHandler"
        :formatter="formatter"/>
      <cs-table-column
        fixed="right"
        label="Handle"
        align="center"
        width="100">
        <template slot-scope="{row}">
          <el-button
            @click.native.prevent="detailRow(row)"
            type="text"
            size="small">
            detail
          </el-button>
        </template>
      </cs-table-column>
    </cs-data-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([data.list[1], data.list[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
    <div style="margin: 20px auto 0;width:1000px">
      <p>selection:</p>
      {{multipleSelection}}
    </div>
  </div>
</template>

<script type="text/babel">
import {
  Button
} from 'element-ui'
// import { DataTable, TableColumn } from '../src'
export default {
  name: 'app',
  components: {
    ElButton: Button
  //   DataTable,
  //   TableColumn
  },
  data () {
    return {
      headers: [
        { text: 'Dessert (100g serving)', value: 'name', minWidth: 300 },
        { text: 'Calories', value: 'calories', sortable: true, minWidth: 200 },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron', sortable: true }
      ],
      data: {
        list: [],
        total: 0
      },
      msg: 'Welcome to Your Vue.js App',
      multipleSelection: [],
      loading: true,
      params: {
        page: 1,
        pageSize: 5
      }
    }
  },
  watch: {
    params: {
      async handler () {
        this.data = await this.getDataFromApi()
      },
      deep: true
    }
  },
  async mounted () {
    this.data = await this.getDataFromApi()
  },
  methods: {
    formatter (row) {
      return row.status
    },
    filterHandler (value, row) {
      return row.status === value
    },
    detailRow (row) {
      console.log(row)
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.table.toggleRowSelection(row)
        })
      } else {
        this.$refs.table.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    getDataFromApi () {
      this.loading = true
      return new Promise((resolve, reject) => {
        const { page, pageSize } = this.params

        let list = this.getDesserts()
        const total = list.length
        if (pageSize > 0) list = list.slice((page - 1) * pageSize, page * pageSize)
        setTimeout(() => {
          this.loading = false
          resolve({
            list,
            total
          })
        }, 1000)
      })
    },
    getDesserts () {
      let data = [
        {
          value: false,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          value: false,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          value: false,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          value: false,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          value: false,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          value: false,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          value: false,
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          value: false,
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
      data.forEach(item => {
        item.status = Math.ceil(Math.random() * 10) % 2 === 0 ? 'good' : 'bad'
      })
      return data
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1,
  h2 {
    font-weight: normal;
  }
</style>
