<template>
  <div id="app">
    <appHeader></appHeader>
    <appHome></appHome>
    <appMenu></appMenu>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'

export default {
  name: 'app',
  components: {
    appHeader: Header,
    appHome: Home,
    appMenu: Menu
  }
}
</script>

<style>

</style>
