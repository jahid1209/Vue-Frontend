import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes.js';
import { store } from './store/store.js';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

//docker run -p 8080:8080 nazmulnaim/fullstack-code-test-with-vertx:latest


