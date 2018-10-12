<template>
    <div class="Player">
        <video :poster="vidThumb" preload="none" class="video-js vjs-default-skin" width="1110" height="650" controls>
            <source :src="vidUrl" type="application/x-mpegurl">
        </video> 
    </div>
</template>
<script>
export default {
    name: 'Player',

    data(){
        return{
           vidUrl:this.vdata.video.files['240'],
           vidThumb:this.vdata.video.thumbs['big'],
        }
    },
    props:{
        vdata:{
            required:true
        }
    },
    methods:{
        initPlayer:function(){
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