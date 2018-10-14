import Vue from 'vue'
import App from './App.vue'
import {
  Loading
} from 'element-ui'
import DataTable from '../src'
Vue.use(DataTable)
Vue.use(Loading.directive)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
