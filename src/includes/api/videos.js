import axios from 'axios'
axios.defaults.baseURL = 'https://demo.clipbucket.com/enterprise/api_public';

export default {
	getFeaturedVideosApi:function () {
		return axios.get('/getVideos/?sort=featured').then(function (response) {
  			var featuredVideos = response.data.data;
  			return featuredVideos;
  		},(error)=>{
          	return error;
      	});
	},
	getRecentVideosApi:function () {
		return axios.get('/getVideos/?sort=most_recent').then(function (response) {
  			var recVideos = response.data.data;
  			return recVideos;
  		},(error)=>{
          	 return error;
       	});
	},
	getVideosApi:function () {
		return axios.get('/getVideos/').then(function (response) {
  			var videos = response.data.data;
  			return videos;
  		},(error)=>{
          	 return error;
       	});
	}
}