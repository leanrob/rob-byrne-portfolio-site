import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAnalytics from 'vue-analytics'
// only import the icons you use to reduce bundle size
import 'vue-awesome/icons/brands/instagram';
import 'vue-awesome/icons/brands/linkedin-in';
import 'vue-awesome/icons/brands/github';
import 'vue-awesome/icons/brands/codepen';
import 'vue-awesome/icons/rss';
import 'vue-awesome/icons/heart';

/* Register component with one of 2 methods */

import Icon from 'vue-awesome/components/Icon';

Vue.use(VueAnalytics, {
  id: 'UA-139335465-1',
  router
});

// globally (in your main .js file)
Vue.component('v-icon', Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
