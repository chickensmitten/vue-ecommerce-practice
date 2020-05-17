<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view></router-view>
    <!-- <appMenu></appMenu> -->
    <appAdmin></appAdmin>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    appHeader: Header
  }
}
</script>

<style>

</style>
