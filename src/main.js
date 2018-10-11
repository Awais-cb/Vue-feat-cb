import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import { store } from './store';
import Meta from 'vue-meta'
import VueI18n from 'vue-i18n'
import {messages} from './langs/messages'
import App from './App'


Vue.config.productionTip = false


Vue.use(VueRouter);
Vue.use(Meta);
Vue.use(VueI18n);

// router object
const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:Routes
});


// vue-meta for loading custom scripts
Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid'
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
