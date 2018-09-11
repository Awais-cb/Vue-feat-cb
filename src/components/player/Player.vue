<template>
    <div class="Player">
        <video preload="none" class="video-js vjs-default-skin" width="1110" height="650" controls>
            <source src="https://demo.clipbucket.com/enterprise/files/videos/2018/03/20/1521531717e6dbe/1521531717e6dbe.m3u8" type="application/x-mpegurl">
        </video>
    </div>
</template>
<script>
var playerLib = require('../../assets/player/hola_player.dev.js');
export default {
    name: 'Player',

    data(){
        return{
           
        }
    },
    props:{
        vdata:{
            // type:Array,
            required:true
        }
    },
    methods:{
        initPlayer:function(){
            // console.log(this.vdata.video.thumbs);
            window.hola_player({title: this.vdata.video.title});
        }
    },
    mounted:function(){
        this.initPlayer();
    }
}
</script>
<style scoped>
.Player{
}

</style>