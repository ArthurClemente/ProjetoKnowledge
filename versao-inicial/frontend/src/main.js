import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFydGh1ciBKb3NlIENsZW1lbnRlIiwiZW1haWwiOiJhcnRodXJjbGVtZW50dGVAaG90bWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTk5MzI2MjU2LCJleHAiOjE1OTk1ODU0NTZ9.K6vX6ximFC6PemsCe5lOwu0AL-XB2JgBBzJftigundQ'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')