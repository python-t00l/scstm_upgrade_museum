import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import promise from 'es6-promise'
import 'babel-polyfill'
import iView from 'iview'

import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.prototype.$http = axios

//axios.defaults.withCredentials=true;

Vue.use(iView);
promise.polyfill()

//loading进度条加载
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  window.scrollTo(0, 0);
  iView.LoadingBar.finish();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
