<template>
  <div id="app">
    <appHeader></appHeader>
    <appHome></appHome>
    <!-- <appMenu></appMenu> -->
    <appAdmin></appAdmin>
  </div>
</template>

<script>
import Header from './components/Header';
import Home from './components/Home';
// import Menu from './components/Menu';
import Admin from './components/Admin';

export default {
  name: 'app',
  components: {
    appHeader: Header,
    appHome: Home,
    appAdmin: Admin
  }
}
</script>

<style>

</style>
