import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

// MaterialDashboard plugin
import MaterialDashboard from "./dashboard";

import Chartist from "chartist";

Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);

Vue.config.productionTip = false


Vue.prototype.$Chartist = Chartist;

new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    Chartist: Chartist
  }
}).$mount('#app')