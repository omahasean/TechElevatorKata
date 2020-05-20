<template>
  <div id="app">
    <the-header />
    <router-view class="page-content" />
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
*,
:after,
:before {
  box-sizing: border-box;
}

:root {
  --theme-primary: #fffffd;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

.page-content {
  height: calc(100vh - 72px);
  margin-top: 72px;
}
</style>
