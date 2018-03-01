import Vue from 'vue';
import App from './App';
import router from './router';
import resource from './plugins/resources';
import * as resources from './resources';

Vue.config.productionTip = false;

Vue.use(resource, {
  resources,
  endpoint: '/static',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
