<template>
  <div class="index container">
    <h3 class="border-bottom">{{ $t("lang.featured_videos") }}</h3>
    <div v-if="featuredVideos.length" class="row">
  		<div v-for='obj in featuredVideos' class="col-xs-4 col-sm-4 col-lg-4 col-md-4" >
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
  <h3 class="border-bottom">{{ $t("lang.recent_videos") }}</h3>
  <div v-if="recVideos.length" class="row">
		<div v-for='obj in recVideos' class="col-xs-4 col-sm-4 col-lg-4 col-md-4" >
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
import axios from 'axios'  
export default {
  name: 'Index',
  data () {
    return {
      featuredVideos:[],
      recVideos:[],
    }
  },
  methods:{
  	getFeaturedVideos:function () {
      let self = this;
  		axios.get('https://demo.clipbucket.com/enterprise/api_public/getVideos/?sort=featured').then(function (feat_response) {
  			console.log(feat_response.data.data);
  			self.featuredVideos = feat_response.data.data;
  		},(error)=>{
          console.log(error);
      });
  	},
  	getRecVideos:function () {
      let self = this;
  		axios.get('https://demo.clipbucket.com/enterprise/api_public/getVideos/?sort=most_recent').then(function (rec_response) {
  			console.log(rec_response.data.data);
  			self.recVideos = rec_response.data.data;
  		},(error)=>{
          console.log(error);
      });
  	},
  },
  created:function () {
    this.getRecVideos();
    this.getFeaturedVideos();
  },
}
</script>


<style scoped>

</style>
