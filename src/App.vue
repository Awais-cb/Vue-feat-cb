<template>
  <div id="rootComponent">
    <!-- passing title to child as prop -->
    <app-header :appConfigs="appConfigsObj"></app-header>
    <router-view></router-view>
    <app-footer :appConfigs="appConfigsObj"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data(){
    return{
      // this is component property which can be used to get all the configs and distribute the among components (load configs via api and distribute all over the app via props)
      appConfigsObj:{
        title:'Vue feat CB',
      }
    }
  },
  components: {
    'app-header':Header,
    'app-footer':Footer
  }
}
</script>

<style>
#rootComponent {

}
</style>
