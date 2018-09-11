// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routes from './routes'
import store from './store';
// library for multi lingual translations
import VueI18n from 'vue-i18n'
import {messages} from './langs/messages'
import App from './App'


Vue.config.productionTip = false


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueI18n);


// router object
const router = new VueRouter({
	// default is hash
	mode:'history',
	base:__dirname,
	// defined here src/routes.js
	routes:Routes
});


// object for multi lingual translations
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});


Vue.http.get('https://demo.clipbucket.com/enterprise/api_public/getConfigs/')
.then(function (response) {
	var data = response.body.data;
	// console.log(data);
	new Vue({
		el: '#app',
		components: { App },
		template: '<App/>',
		store: store(data),
		router:router,
		i18n
	});
}).catch(function(error){
    console.log(error);
});
