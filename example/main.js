import Vue from 'vue'
import router from './router'
import App from './App'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

Vue.config.devtools = true
Vue.config.productionTip = false

/* eslint-disable no-new */
window.a = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})
