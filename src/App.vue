<template>
  <div id="app">
    <Header_Marketing />
  </div>
</template>

<script>
import Header_Marketing from './components/HeaderMarketing.vue'

export default {
  name: 'App',
  components: {
    Header_Marketing,
  }
}
</script>

<style lang="scss">

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
