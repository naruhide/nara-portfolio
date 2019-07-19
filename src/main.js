// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons"; 
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; 
import { faFacebook } from "@fortawesome/free-brands-svg-icons"; 
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vueSmoothScroll from 'vue-smoothscroll'
import * as VueGoogleMaps from 'vue2-google-maps'

library.add(faCoffee, faTwitter, faFacebook, fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(vueSmoothScroll)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDxPYNHH02iz3zvOOrplci-lT0vpSk_iZY',
    libraries: 'places'
  },
})
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
