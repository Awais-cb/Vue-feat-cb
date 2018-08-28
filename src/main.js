// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routes from './routes'
import App from './App'



Vue.config.productionTip = false


Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
	// default is hash
	mode:'history',
	base:__dirname,
	// defined here src/routes.js
	routes:Routes
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
