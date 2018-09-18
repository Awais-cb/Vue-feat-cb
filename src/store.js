// The purpose of creating store.js is to sparete 'state manager/data presister' from rest of the app
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);


export const store = new Vuex.Store({
  	// schema to presist data in
    state: {
    		configs: [],
        appLanguage: 'en',
        currentTheme:'default'
  	},
    
    // State manipulators will be added here
    mutations:{
      setConfigs(state,configObj){
        state.configs = configObj;
      }
    },

    // Getter is always have to return something from state
    getters: {
      getConfigs(state){
        return state.configs;
      }
  	},

});