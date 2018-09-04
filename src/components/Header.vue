<template>
    <header class="Header">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <router-link class="navbar-brand" to="/">{{configs.title}}</router-link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <router-link class="nav-link" to="/">{{ $t("lang.home") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/videos">{{ $t("lang.videos") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/channels">{{ $t("lang.channels") }}</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/playlists" >{{ $t("lang.playlists") }}</router-link>
                  </li>
                </ul>

                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    computed:{
        configs(){
          // using vuex getters data from vuex states 
          return this.$store.getters.getConfigs;
        }
    },
    data(){
        return{
        }
    }
}
</script>

<style scoped>

</style>