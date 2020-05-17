<template>
  <div id="app">
    <appHeader></appHeader>
    <appHome></appHome>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    appHeader: Header,
    appHome: Home
  }
}
</script>

<style>

</style>
