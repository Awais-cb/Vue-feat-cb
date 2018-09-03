<template>
<footer class="Footer navbar-dark bg-dark">
    <div class="footer-copyright text-center py-3"><a href="https://demo.clipbucket.com" target="blank"> {{configs.title}}</a> © {{year}}
    </div>
</footer>
</template>
<script>
export default {
    name: 'Footer',
    computed:{
        configs(){
          // comming from vuex states 
          return this.$store.state.configs;
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