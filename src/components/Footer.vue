<template>
<footer class="Footer navbar-dark bg-dark">
    <div class="footer-copyright text-center py-3"><a href="https://demo.clipbucket.com" target="blank"> {{appConfigs.title}}</a> © {{year}}
    </div>
</footer>
</template>
<script>
export default {
    name: 'Footer',
    props:{
        appConfigs:{
            type:Object
        }
    },
    data(){
        return{
            year:new Date().getFullYear(),
        }
    }
}
</script>
<style scoped>
.Footer{
    color:#fff;
    margin-top: 30px;
}
a{
   color:#fff; 
}
</style>