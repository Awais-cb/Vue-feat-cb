<template>
  <div class="photos container">
    <h3 class="border-bottom">{{ $t("lang.playlists") }}</h3>
    <div v-if="playlists.length" class="row">
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
	<div v-else class="row">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 d-flex justify-content-center" >
          <img src="./../assets/loader.gif" class="align-self-center" alt="Loading" width="50" height="50">
        </div>
    </div>

  </div>
</template>

<script>
import playlists from '../includes/api/playlists'	
export default {
  name: 'Playlists',
	data () {
	    return {
	      playlists:[],
	    }
	},
	methods:{
	  	setPageData:function () {
    		playlists.getPlaylistsApi().then(data =>{
              this.playlists = data;
        });
  	}
	},
	created:function () {
	  	this.setPageData();
	},
}
</script>


<style scoped>

</style>
