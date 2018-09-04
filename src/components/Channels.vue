<template>
  	<div class="channels container">
	    <h3 class="border-bottom">{{$t('lang.featured_channels')}}</h3>
	    <div class="row">
			<div v-for='obj in featChannels' class="col-xs-4 col-sm-4 col-lg-4 col-md-4" >
				<div class="card" style="width: 18rem;">	
					<img class="card-img-top" v-bind:src=obj.avatar alt="Card image cap">
				 	<div class="card-body">
					    <h6 class="card-title">{{obj.username}}</h6>
					    <p class="card-text">{{obj.subscribers}} subscribers</p>
				  	</div>
				</div>
			</div>
		</div>
		<h3 class="border-bottom">{{$t('lang.other_channels')}}</h3>
	    <div class="row">
			<div v-for='obj in channels' class="col-xs-4 col-sm-4 col-lg-4 col-md-4" >
				<div class="card" style="width: 18rem;">	
					<img class="card-img-top" v-bind:src=obj.avatar alt="Card image cap">
				 	<div class="card-body">
					    <h6 class="card-title">{{obj.username}}</h6>
					    <p class="card-text">{{obj.subscribers}} subscribers</p>
				  	</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  	name: 'Channels',
	data () {
	    return {
	      featChannels:[],
	      channels:[],
	    }
	},
	methods:{
	  	getFeatChannels:function () {
	  		this.$http.get('https://demo.clipbucket.com/enterprise/api_public/getUsers/?sort=featured').then(function (response) {
	  			console.log(response);
	  			this.featChannels = response.body.data;
	  		});
	  	},
	  	getChannels:function () {
	  		this.$http.get('https://demo.clipbucket.com/enterprise/api_public/getUsers/').then(function (response) {
	  			console.log(response);
	  			this.channels = response.body.data;
	  		});
	  	},	  	
	},
	created:function () {
	  	this.getFeatChannels();
	  	this.getChannels();
	},	
	// updated:function () {
	//   	this.getFeatChannels();
	//   	this.getChannels();
	// }
}
</script>


<style scoped>

</style>
