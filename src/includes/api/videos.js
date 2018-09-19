import axios from 'axios'
axios.defaults.baseURL = 'https://demo.clipbucket.com/enterprise/api_public';

export default {
	getFeaturedVideosApi(){
		  return axios.get('/getVideos/?sort=featured').then((response)=>{
    			var featuredVideos = response.data.data;
    			return featuredVideos;
  		},(error)=>{
          return error;
      });
	},
	getRecentVideosApi(){
		  return axios.get('/getVideos/?sort=most_recent').then((response)=>{
    			var recVideos = response.data.data;
    			return recVideos;
  		},(error)=>{
          return error;
      });
	},
	getVideosApi(){
      return axios.get('/getVideos/').then((response)=>{
          var videos = response.data.data;
          return videos;
      },(error)=>{
          return error;
      });
  },
  getVideoApi(videoId){
		  return axios.get('https://demo.clipbucket.com/enterprise/api_public/getVideos/?video_id='+videoId).then((response)=>{
          var rawData = response.data.data;
          rawData = rawData[0];
          var vdata = rawData;
          return vdata;
      },(error)=>{
          return error;
      });
	}
}