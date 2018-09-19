<template>
  <div class="WatchVideo container">
    <h3 class="border-bottom">{{vdata.video.title}}</h3>
	<video-player :vdata="vdata"></video-player>
  </div>
</template>

<script>
import videos from '../includes/api/videos'
import Player from './player/Player';
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
	  	setPageData:function () {
	  		videos.getVideoApi(this.videoId).then(data =>{
                this.vdata = data;
          	});
	  	}
	},
	created:function () {
	  	this.setPageData();
	}
}
</script>


<style scoped>

</style>
