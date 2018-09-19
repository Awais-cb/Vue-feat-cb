import axios from 'axios'
axios.defaults.baseURL = 'https://demo.clipbucket.com/enterprise/api_public';

export default {
	getFeatChannelsApi(){
		  return axios.get('/getUsers/?sort=featured').then(function (response) {
    			var featuresChannels = response.data.data;
    			return featuresChannels;
  		},(error)=>{
          return error;
      });
	},	
	getChannelsApi(){
		  return axios.get('/getUsers/').then(function (response) {
    			var channels = response.data.data;
    			return channels;
  		},(error)=>{
          return error;
      });
	}
}