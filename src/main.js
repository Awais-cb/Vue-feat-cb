// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Index from './components/Index'
import Videos from './components/Videos'
import Playlists from './components/Playlists'
import Channels from './components/Channels'


Vue.config.productionTip = false


Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
	// default is hash
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/',component:Index},
		{path:'/videos',component:Videos},
		{path:'/playlists',component:Playlists},
		{path:'/channels',component:Channels},
	]
});


const vm = new Vue({
	router,
	template:`
		<div id ='app'>
			<nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
			  <router-link class="navbar-brand" to="/">Vue feat clipbucket</router-link>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    
			    <ul class="navbar-nav mr-auto">
			      <li class="nav-item">
			        <router-link class="nav-link" to="/">Home</router-link>
			      </li>
			      <li class="nav-item">
			        <router-link class="nav-link" to="/videos">Videos</router-link>
			      </li>
			      <li class="nav-item">
			        <router-link class="nav-link" to="/channels">Channels</router-link>
			      </li>
			      <li class="nav-item">
			        <router-link class="nav-link" to="/playlists" >Playlists</router-link>
			      </li>
			    </ul>

			    <form class="form-inline my-2 my-lg-0">
			      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
			      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			    </form>
			  </div>
			</nav>
			<router-view></router-view>
		</div>
	`
});

vm.$mount('#app');
