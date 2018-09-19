import axios from 'axios'
axios.defaults.baseURL = 'https://demo.clipbucket.com/enterprise/api_public';

export default {
	getPlaylistsApi(){
		return axios.get('/getPlaylists/').then((response)=>{
  			var playlists = response.data.data;
  			return playlists;
  		},(error)=>{
          	 return error;
       	});
	}
}