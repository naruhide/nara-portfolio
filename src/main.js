// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ja'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons"; // 通常のフリーアイコン
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; // ブランドアイコンを使うにはこれを読み込む必要がある
import { faFacebook } from "@fortawesome/free-brands-svg-icons"; // ブランドアイコンを使うにはこれを読み込む必要がある
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vueSmoothScroll from 'vue-smoothscroll'
import * as VueGoogleMaps from 'vue2-google-maps'

library.add(faCoffee, faTwitter, faFacebook, fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);
// Vue.component(Skill);
Vue.use(ElementUI, {locale})
Vue.use(vueSmoothScroll)
Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places'
  },
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
