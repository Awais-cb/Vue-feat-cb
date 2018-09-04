<template>
<footer class="Footer navbar-dark bg-dark">
    <div class="footer-copyright text-center py-3"><a href="https://demo.clipbucket.com" target="blank"> {{configs.title}}</a> © {{year}}
    </div>
</footer>
</template>
<script>
// Using curly braces with 'mapGetters' because 'mapGetters' is not a default export of vuex and is defined as const while exporting 'export const mapGetters = someCode'    
import {mapGetters} from 'vuex';
export default {
    name: 'Footer',
    // using vuex getters data from vuex states second way 
    computed:{
        // we can directly assign 'mapGetters' to 'computed:' but the better way is to use triple dots(Spread syntax) ES6,triple dots will extract all the properties/getters from 'mapGetters' one by one iterably and will assign them to parent computed object now we can add other computed properties too
        ...mapGetters({
            configs:'getConfigs',
        })
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