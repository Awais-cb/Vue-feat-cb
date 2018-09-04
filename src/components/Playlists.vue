<template>
  <div class="photos container">
    <h3 class="border-bottom">{{ $t("lang.playlists") }}</h3>
    <div class="row">
  		<div v-for='obj in playlists' class="col-xs-4 col-sm-4 col-lg-4 col-md-4" >
  			<div class="card" style="width: 18rem;">	
  				<!-- <img class="card-img-top" v-bind:src=obj.first_item.thumbs.big alt="Card image cap"> -->
  			 	<div class="card-body">
  				    <h6 class="card-title">{{obj.playlist_name}}</h6>
  				    <p class="card-text">{{obj.total_items}} {{$t('lang.items')}}</p>
  			  	</div>
  			</div>
  		</div>
	 </div>

  </div>
</template>

<script>
export default {
  name: 'Playlists',
	data () {
	    return {
	      playlists:[],
	    }
	},
	methods:{
	  	getPlaylists:function () {
	  		this.$http.get('https://demo.clipbucket.com/enterprise/api_public/getPlaylists/').then(function (response) {
	  			console.log(response);
	  			this.playlists = response.body.data;
	  		});
	  	},
	},
	created:function () {
	  	this.getPlaylists();
	},
	// updated:function () {
	// 	this.getPlaylists();
	// }
}
</script>


<style scoped>

</style>
