import Vue from 'vue';
import App from './App.vue';
import vueRouter from 'vue-router';
import Mint from 'mint-ui';
import './assets/css/cssreset.css';
import './assets/js/iconfont.js';
import './assets/css/iconfont.css';
import '../node_modules/mint-ui/lib/style.css';
import './assets/css/main.css';
import router from './assets/js/router.js';

Vue.use(vueRouter);
Vue.use(Mint);

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
