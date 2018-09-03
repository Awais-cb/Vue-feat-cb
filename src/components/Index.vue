<template>
  <div class="index container">
    <h3 class="border-bottom">Featured Videos</h3>
    <div class="row">
  		<div v-for='obj in featuredVideos' class="col-xs-4 col-sm-4 col-lg-4 col-md-4" >
  			<div class="card" style="width: 18rem;">	
  				<img class="card-img-top" v-bind:src=obj.video.thumbs.big alt="Card image cap">
  			 	<div class="card-body">
  				    <h6 class="card-title">{{obj.video.title}}</h6>
  				    <p class="card-text">{{obj.video.views}} Views</p>
  			  	</div>
  			</div>
  		</div>
	 </div>
  <h3 class="border-bottom">Most Recent</h3>
	<div class="row">
		<div v-for='obj in recVideos' class="col-xs-4 col-sm-4 col-lg-4 col-md-4" >
			<div class="card" style="width: 18rem;">	
				<img class="card-img-top" v-bind:src=obj.video.thumbs.big alt="Card image cap">
			 	<div class="card-body">
				    <h6 class="card-title">{{obj.video.title}}</h6>
				    <p class="card-text">{{obj.video.views}} Views</p>
			  	</div>
			</div>
		</div>
	</div>

  </div>
</template>

<script>
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
  		this.$http.get('https://demo.clipbucket.com/enterprise/api_public/getVideos/?sort=featured').then(function (feat_response) {
  			console.log(feat_response);
  			this.featuredVideos = feat_response.body.data;
  		});
  	},
  	getRecVideos:function () {
  		this.$http.get('https://demo.clipbucket.com/enterprise/api_public/getVideos/?sort=most_recent').then(function (rec_response) {
  			console.log(rec_response);
  			this.recVideos = rec_response.body.data;
  		});
  	},
  },
  created:function () {
    this.getRecVideos();
    this.getFeaturedVideos();
  },
  // updated:function () {
  // 	this.getRecVideos();
  // 	this.getFeaturedVideos();
  // }
}
</script>


<style scoped>

</style>
