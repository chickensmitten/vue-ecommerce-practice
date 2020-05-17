import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '*', redirect: '/'} // covering for unrecognized URL
]
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
