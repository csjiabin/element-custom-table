# element-custom-table

> webpack-simple element-ui custom table

> simple element-ui table encapsulation

## use

### install

```bash
npm install element-custom-table -S
```

### 完整引入

在 main.js 中写入以下内容：

```js
import Vue from "vue";
import ElementCustomTable from "element-custom-table";
import App from "./App.vue";

Vue.use(ElementCustomTable);

new Vue({
  el: "#app",
  render: h => h(App)
});
```

### 按需引入

```js
import Vue from "vue";
import { DataTable, TableColumn } from "element-custom-table";
import App from "./App.vue";

Vue.component(DataTable.name, DataTable);
Vue.component(TableColumn.name, TableColumn);

new Vue({
  el: "#app",
  render: h => h(App)
});
```

### Code example

```html
<template>
  <div id="app">
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
      :body-style="{ padding: 0,paddingBottom:'16px' }">
      <cs-table-column type="selection" width="60" fixed/>
      <cs-table-column type="index" width="50" fixed/>
        <cs-table-column
          prop="name"
          label="Name"/>
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
  </div>
</template>
<script>
  export default {
    data(){
      return {
        data: {
          list: [
            {
              name: 'Frozen Yogurt',
              calories: 159,
              fat: 6.0,
              carbs: 24,
              protein: 4.0,
              iron: '1%',
              status: 'good'
            },
            {
              name: 'Ice cream sandwich',
              calories: 237,
              fat: 9.0,
              carbs: 37,
              protein: 4.3,
              iron: '1%',
              status: 'bad'
            }
          ],
          total: 0
        }
      }
    },
    methods:{
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
      }
    }
  }
</script>
```

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Example Image

![这是一张图](screenshot.png)
