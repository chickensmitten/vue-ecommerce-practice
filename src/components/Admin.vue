<template>
  <div class="admin_wrapper">
    <AdminContent v-if="currentUser !== null " />
    <Login v-if="currentUser == null"></Login>
  </div>
</template>

<script>
  import Login from './Login'
  import { mapGetters } from 'vuex'
  import AdminContent from './AdminContent'
  // const AdminContent = () => import('./AdminContent')
  // another way to do lazy loading

  export default {
    name: 'admin',
    components: {
      Login,
      AdminContent
    },
    computed: {
      ...mapGetters(["currentUser"])
    }
  }
</script>

<style scoped>
  .admin_wrapper {
    margin: 10px;
  }

</style>