import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueKonva from 'vue-konva'
import JsonExcel from 'vue-json-excel'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'

Vue.config.productionTip = false

Vue.use(VueKonva);
Vue.component("downloadExcel", JsonExcel);
gsap.registerPlugin(MotionPathPlugin);

new Vue({
  vuetify,
  JsonExcel,
  render: h => h(App)
}).$mount('#app')
