// The purpose of creating store.js is to sparete 'state manager/data presister' from rest of the app
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

function stateBuilder(data) {
  	return new Vuex.Store({
    	state: {
      		configs: data,
          app_language: 'en'
    	},
    	getters: {
    		getConfigs(state){
          // a getter is always have to return something
          return state.configs;
        },
        getAppLang(state){
    			// a getter is always have to return something
    			return state.app_language;
    		}
    	},
      mutations:{
        // state manipulators will be added here
      }
  	});
}

export default stateBuilder;