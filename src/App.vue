<template>
  <div id="app">
    <nav>
      <router-link to="/" tag="button" exact>HOME</router-link>
      <router-link to="/skill" tag="button">Skill</router-link>
    </nav>
    <img src="./assets/logo.png">
    <transition name="view">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
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

  .router-link-active {
    background: #e25193;
  }

  .view-enter-active,
  .view-leave-active {
    transition: opacity 0.5s;
  }

  .view-leave-active {
    position: absolute;
  }

  .view-enter,
  .view-leave-to {
    opacity: 0;
  }
</style>
