import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import VueRouter from 'vue-router'

import Uploads from './components/uploads.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)


const routes = [{
    path: '/',
    component: Uploads,
    title: 'index'
}]

const router = new VueRouter({
    routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
