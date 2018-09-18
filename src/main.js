// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import { store } from './store';
// library for multi lingual translations
import VueI18n from 'vue-i18n'
import {messages} from './langs/messages'
import App from './App'


Vue.config.productionTip = false


Vue.use(VueRouter);
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
  locale: null,
  messages,
});


new Vue({
	el: '#app',
	components: { App },
	template: '<App/>',
	store,
	router,
	i18n
});
