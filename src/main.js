import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false


Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDZkiASvelK1aD_el52h6BDv82yeS33CZk",
    libraries: "places,visualization"
  },
  installComponents: true
})


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
