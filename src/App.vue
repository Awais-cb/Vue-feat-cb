<template>
  <div id="rootComponent">
    <!-- passing title to child as prop -->
    <app-header :appConfigs="configs"></app-header>
    <router-view></router-view>
    <app-footer :appConfigs="configs"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data(){
    return{
      configs:{},
    }
  },
  methods:{
      getConfigs:function () {
        this.$http.get('http://10.1.1.55/cb_multi/upload/api_public/getConfigs/').then(function (response) {
          this.configs = response.body.data;
        });
      },
  },
  components: {
    'app-header':Header,
    'app-footer':Footer
  },
  created:function () {
      this.getConfigs();
      console.log(this.configs)
  }
}
</script>

<style>
#rootComponent {

}
</style>
