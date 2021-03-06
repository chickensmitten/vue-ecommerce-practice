import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCurrencyFilter, {
  symbol : '$',
  thousandsSeparator: ',',
  fractionCount: 2,
  fractionSeparator: '.',
  symbolPosition: 'front',
  symbolSpacing: true
})
    

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to) {
    if(to.hash) {
      return { selector: to.hash}
    }

    // if(savedPosition) {
    //   return savedPosition
    // } else {
    //   return {x: 0, y: 0};
    // }

    // return {x: 0, y: 200};
    // return { selector: '.basket'};
  }
});

router.beforeEach((to, from, next) => {
  // console.log(to)
  next() // to complete the navigation, else, components will not load.
  // next(false) stops page components from loading up
})


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
