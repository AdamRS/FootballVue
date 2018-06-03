import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App, {
    props: {
      apiKey: "c5bf0dcb22ba9924ce7c93f227ec8bba45ce022933001d89994a1a0491afc9a2"
    }
  })
})
