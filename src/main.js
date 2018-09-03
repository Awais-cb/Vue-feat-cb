// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routes from './routes'
import store from './store';
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


Vue.http.get('http://10.1.1.55/cb_multi/upload/api_public/getConfigs/')
.then(function (response) {
	var data = response.body.data;
	console.log(data);
	new Vue({
		el: '#app',
		components: { App },
		template: '<App/>',
		store: store(data),
		router:router
	});
})
