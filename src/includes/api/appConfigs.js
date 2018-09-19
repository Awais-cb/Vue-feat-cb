import axios from 'axios'
axios.defaults.baseURL = 'https://demo.clipbucket.com/enterprise/api_public';

// *Promises can never return data they can return promise only which has to be catched*
export default {
	getConfigsApi : function(){
		return axios.get('/getConfigs/').then(
			(response)=>{
				var data = response.data.data;
				return data;
			},(error)=>{
				console.log(error);
				return error;
			}
		);
	}
}