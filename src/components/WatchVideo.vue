<template>
  <div class="WatchVideo container">
    <h3 class="border-bottom">{{vdata.title}}</h3>
	<Player/>
  </div>
</template>

<script>
import Player from './player/Player';
export default {
  name: 'WatchVideo',
	data () {
	    return {
	      videoId : this.$route.params.id,
	      vdata:[]
	    }
	},
	components:{
		Player
	},
	methods:{
	  	getVideo:function () {
	  		this.$http.get('https://demo.clipbucket.com/enterprise/api_public/getVideos/?video_id='+this.videoId).then(function (response) {
	  			var rawData = response.body.data;
	  			rawData = rawData[0];
	  			console.log(rawData);
	  			this.vdata = rawData.video;
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
