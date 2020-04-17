<!--
 * @Author: wangteng
 * @Date: 2020-04-16 19:49:16
 * @LastEditTime: 2020-04-16 20:07:44
 * @LastEditors: wangteng
 * @FilePath: /coureseware/src/views/studyReport/App.vue
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Index</router-link> |
      <router-link to="/about">Other</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
