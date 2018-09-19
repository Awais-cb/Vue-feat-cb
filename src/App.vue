<template>
  <div id="rootComponent">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import confs from '@/includes/api/appConfigs'

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
    setAppConfigs:function () {
      confs.getConfigsApi().then(confs =>{
        this.$store.commit('setConfigs',confs);
      });    
    }
  },
  created(){
      this.$i18n.locale = 'en';
      this.setAppConfigs();
  }
}
</script>

<style>
#rootComponent {

}
</style>
