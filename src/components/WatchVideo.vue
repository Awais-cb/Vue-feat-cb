<template>
  <div class="WatchVideo container">
	<div v-if="vdata != ''">
	    <h3 class="border-bottom">{{vdata.video.title}}</h3>
		<video-player :vdata="vdata"></video-player>
  	</div>
  	<div v-else>
  		<h3 class="border-bottom">Loading...</h3>
  		<div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 d-flex justify-content-center" >
          <img src="./../assets/loader.gif" class="align-self-center" alt="Loading" width="50" height="50">
        </div>
  	</div>
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
	      vdata : [],
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
