import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

// Import the styling for the site
import './assets/styles/main.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
