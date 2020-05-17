<template>
  <div class="admin_wrapper">
    <div class="current_user_wrapper">

    </div>
    <div class="menu_wrapper">
      <h3>Menu:</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Remove from Menu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Margherita</td>
            <td>
              <button type="button" class="btn_red">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="order_wrapper">

    </div>
  </div>
</template>

<script>
export default {
  name: 'admin'  
};
</script>

<style scoped>

</style>