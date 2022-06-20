<template>
  <div id="app">
    <Header_Marketing />
    <Main_Marketing />
    <Footer_Marketing />
  </div>
</template>

<script>
import Header_Marketing from './components/HeaderMarketing.vue'
import Main_Marketing from './components/MainMarketing.vue'
import Footer_Marketing from './components/FooterMarketing.vue'

export default {
  name: 'App',

  components: {
    Header_Marketing,
    Main_Marketing,
    Footer_Marketing,
  },
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
