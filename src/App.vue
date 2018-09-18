<template>
  <div id="rootComponent">
    <!-- passing title to child as prop -->
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
    
    }
  },
  components: {
    'app-header':Header,
    'app-footer':Footer
  },
  methods:{
    getConfigsApi(){
      axios.get('https://demo.clipbucket.com/enterprise/api_public/getConfigs/').then((response) =>{
          this.$store.commit('setConfigs',response.data.data);
      },(error)=>{
          console.log(error);
      });
    }
  },
  created(){
      this.getConfigsApi();
  }
}
</script>

<style>
#rootComponent {

}
</style>
