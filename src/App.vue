<template>
  <div id="app">
    <div class="siimple-navbar siimple-navbar--yellow siimple-navbar--fluid">
      <div class="siimple-layout--left">
        <router-link class="siimple-navbar-title" to="/">NowOnAir</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import router from './routes.js';

export default {
  name: 'app',
  router: router,
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
