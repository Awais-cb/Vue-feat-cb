<template>
  <div class="photos container">
    <h2>Watch video</h2>

  </div>
</template>

<script>
export default {
  name: 'WatchVideo',
	data () {
	    return {
	      vdetails:[],
	    }
	},
	methods:{
	  	getVideo:function () {
	  		this.$http.get('https://demo.clipbucket.com/enterprise/api_public/getPlaylists/').then(function (response) {
	  			console.log(response);
	  			this.vdetails = response.body.data;
	  		});
	  	},
	},
	created:function () {
	  	this.getVideo();
	},
	// updated:function () {
	// 	this.getPlaylists();
	// }
}
</script>


<style scoped>

</style>
