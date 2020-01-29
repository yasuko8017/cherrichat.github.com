import Vue from 'vue'
import App from './App.vue'

import './style/reset.sass';
import i18n from "./i18n/i18n";

new Vue({
  i18n,
  el: '#app',
  render: h => h(App)
})
