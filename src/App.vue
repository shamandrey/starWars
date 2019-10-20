<template>
  <div id="app">
    <span>STAR</span>
    <img alt="Vue logo" src="./assets/logo.png"><img alt="Vue logo" src="./assets/logo.png">
    <span>ARS</span>
    <Navigation></Navigation>
    <RandomPlanet></RandomPlanet>
    <router-view class="router-view"/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import RandomPlanet from "./components/RandomPlanet";
export default {
  name: 'app',
  components: {
    RandomPlanet: RandomPlanet,
    Navigation: Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .router-view {
    margin-top: 10px;
  }

</style>
