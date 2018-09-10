<template>
    <div class="Player">
        <video preload="none" class="video-js vjs-default-skin" width="640" height="360" controls>
            <source src="http://video.h-cdn.com/static/hls/cdn2/master.m3u8" type="application/x-mpegurl">
        </video>
    </div>
</template>
<script>
// var playerLib = require('../assets/player/hola_player.dev.js');
export default {
    name: 'Player',

    data(){
        return{
           
        }
    },
    methods:{
        initPlayer:function(){
            window.hola_player({title: 'Test title'});
        }
    },
    created:function(){
        this.initPlayer();
    }
}
</script>
<style scoped>
.Player{
}

</style>