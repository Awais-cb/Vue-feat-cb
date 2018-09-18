<template>
  <div class="WatchVideo container">
    <h3 class="border-bottom">{{vdata.video.title}}</h3>
	<video-player :vdata="vdata"></video-player>
  </div>
</template>

<script>
import Player from './player/Player';
import axios from 'axios'
export default {
  name: 'WatchVideo',
	data () {
	    return {
	      videoId : this.$route.params.id,
	      vdata:'',
	    }
	},
	components:{
		'video-player':Player,
	},
	methods:{
	  	getVideo:function () {
	  		let self = this;
	  		axios.get('https://demo.clipbucket.com/enterprise/api_public/getVideos/?video_id='+this.videoId).then(function (response) {
	  			var rawData = response.data.data;
	  			rawData = rawData[0];
	  			self.vdata = rawData;
	  		},(error)=>{
		        console.log(error);
		    });
	  	},
	},
	created:function () {
	  	this.getVideo();
	}
}
</script>


<style scoped>

</style>
