import Vue from 'vue'
import Index from './index'
import Index2 from './index2'
import VueRouter from 'vue-router'

// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入bootstrap/jquery
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'

import IndexRouter from '../router/indexRouter'
import BackRouter from '../router/backRouter'
//导入axios
import Axios from 'axios'

//配置axios访问的地址
Axios.defaults.baseURL = "http://localhost:8080/oasystem_web"
// 将baseURL绑定到全局
Vue.prototype.$axios = Axios

//导入vuex
import Store from '../vuex/store.js'

Vue.use(ElementUI)
Vue.use(VueRouter);


let routerArray = IndexRouter.concat(BackRouter);
new Vue({
  el: '#app',
  //render: h => h(Index),
  router: new VueRouter({
    routes: routerArray
  }),
})
