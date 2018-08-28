<template>
    <header class="Header">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <router-link class="navbar-brand" to="/">Vue feat clipbucket</router-link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/videos">Videos</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/channels">Channels</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/playlists" >Playlists</router-link>
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
    data(){
        return{
        }
    }
}
</script>

<style scoped>

</style>