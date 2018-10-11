<template>
    <div class="Player">
        <video preload="none" class="video-js vjs-default-skin" width="1110" height="650" controls>
            <source src="https://demo.clipbucket.com/enterprise/files/videos/2018/03/20/1521531717e6dbe/1521531717e6dbe.m3u8" type="application/x-mpegurl">
        </video>
    </div>
</template>
<script>
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
    metaInfo: {
        script: [
          { src: '../../../static/js/jquery.min.js', type: 'text/javascript', body: true },
          { src: '../../assets/player/hola_player.dev.js', type: 'text/javascript', body: true }
        ]
    },
    methods:{
        initPlayer:function(){
            window.hola_player({title: this.vdata.video.title});
        }
    },
    mounted:function(){
        setTimeout(function () {
            this.initPlayer();
        }, 2000);
    }
}
</script>
<style scoped>
.Player{
}

</style>