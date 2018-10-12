<template>
  	<div class="channels container">
	    <h3 class="border-bottom">{{$t('lang.featured_channels')}}</h3>
	    <div class="row">
			<div v-for='obj in featChannels' class="col-xs-4 col-sm-4 col-lg-4 col-md-4" >
				<div class="card" style="width: 18rem;">	
					<img class="card-img-top" v-bind:src=obj.avatar alt="Card image cap">
				 	<div class="card-body">
					    <h6 class="card-title">{{obj.username}}</h6>
					    <p class="card-text">{{obj.subscribers}} {{$t('lang.subscribers')}}</p>
				  	</div>
				</div>
			</div>
		</div>
		<h3 class="border-bottom">{{$t('lang.other_channels')}}</h3>
	    
			<div v-if='channels.length' class="row">	
				<div v-for='obj in channels' class="col-xs-4 col-sm-4 col-lg-4 col-md-4" >
					<div class="card" style="width: 18rem;">	
						<img class="card-img-top" v-bind:src=obj.avatar alt="Card image cap">
					 	<div class="card-body">
						    <h6 class="card-title">{{obj.username}}</h6>
						    <p class="card-text">{{obj.subscribers}} {{$t('lang.subscribers')}}</p>
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
import channels from '../includes/api/channels' 	
export default {
  	name: 'Channels',
	data () {
	    return {
	      featChannels:[],
	      channels:[],
	    }
	},
	metaInfo:{
    	titleTemplate: 'Channels | %s',
 	},
	methods:{
	  	setPageData:function () {
          channels.getFeatChannelsApi().then(data =>{
            this.featChannels = data;
          });
          channels.getChannelsApi().then(data =>{
            this.channels = data;
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
