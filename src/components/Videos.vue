<template>
  	<div class="videos container">
	    <h3 class="border-bottom">{{$t('lang.videos')}}</h3>
	    <div class="row">
			<div v-for='obj in videos' class="col-xs-4 col-sm-4 col-lg-4 col-md-4" >
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
  name: 'Videos',
  data () {
    return {
      videos:[],
    }
  },
  methods:{
  	getVideos:function () {
  		this.$http.get('https://demo.clipbucket.com/enterprise/api_public/getVideos/').then(function (response) {
  			console.log(response);
  			this.videos = response.body.data;
  		});
  	},
  },
  created:function () {
    this.getVideos();
  },
  // updated:function () {
  // 	this.getVideos();
  // }
}
</script>


<style scoped>

</style>
