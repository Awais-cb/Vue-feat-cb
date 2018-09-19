<template>
  	<div class="videos container">
	    <h3 class="border-bottom">{{$t('lang.videos')}}</h3>
	    <div v-if='videos.length' class="row">
  			<div v-for='obj in videos' class="col-xs-4 col-sm-4 col-lg-4 col-md-4" >
  				<router-link class="nav-link" :to="'/watch/'+obj.video.videoid">
            <div class="card" style="width: 18rem;">	
    					<img class="card-img-top" v-bind:src=obj.video.thumbs.big alt="Card image cap">
    				 	<div class="card-body">
    					    <h6 class="card-title">{{obj.video.title}}</h6>
    					    <p class="card-text">{{obj.video.views}} {{$t('lang.views')}}</p>
    				  	</div>
    				</div>
          </router-link>
  			</div>
		  </div>
      <div v-else class="row">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 d-flex justify-content-center" >
          <img src="./../assets/loader.gif" class="align-self-center" alt="Loading" width="50" height="50">
        </div>
      </div>
  	</div>
</template>

<script>
import videos from '../includes/api/videos'   
export default {
  name: 'Videos',
  data () {
    return {
      videos:[],
    }
  },
  methods:{
  	setPageData:function () {
    		videos.getFeaturedVideosApi().then(data =>{
              this.videos = data;
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
