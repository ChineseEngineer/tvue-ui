<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition
            name="fade"
            mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  #nav a.router-link-exact-active {
    color: #42b983;
  }
  /* 路由过度动画 begin */
  .fade-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .fade-leave-active {
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }
  .fade-enter-active, .fade-leave-active {
    will-change: transform;
    transition: all .5s;
  }
  /* 路由过度动画 end */
</style>
