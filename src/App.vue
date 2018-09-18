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
      this.$http.get('https://demo.clipbucket.com/enterprise/api_public/getConfigs/').then(response =>{
          this.$store.commit('setConfigs',response.body.data);
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
