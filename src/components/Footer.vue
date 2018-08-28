<template>
<footer class="Footer navbar-dark bg-dark">
    <div class="footer-copyright text-center py-3">© {{year}} Copyright:
        <a href="https://demo.clipbucket.com" target="blank"> Clipbucket</a>
    </div>
</footer>
</template>
<script>
export default {
    name: 'Footer',
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