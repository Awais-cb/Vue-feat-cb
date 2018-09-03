// The purpose of creating store.js is to sparete 'state manager/data presister' from rest of the app
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

function stateBuilder(data) {
  	return new Vuex.Store({
    	state: {
      		configs: data,
    	},
  	});
}

export default stateBuilder;