<template>
  <div class="menu_wrapper">
    <!-- menu -->
    <div class="menu">
      <h3>~ Authentic handmade pizza ~</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>
                ~ Pepperoni ~
              </strong>
            </td>
          </tr>
          <tr>
            <td>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ex voluptatum? Porro sit incidunt minima recusandae, vitae similique dolor sequi maxime cum eum facere voluptates velit libero eaque nesciunt est!
              </small>
            </td>
          </tr>   
          <tr>
            <td>9"</td>
            <td>$6.95</td>
            <td>
              <button class="btn_green" type="button">+</button>
            </td>
          </tr>       
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  h3 {
    text-align: center;
  }

  .menu_wrapper {
    display: flex;
    flex-direction: column;
  }

  .menu {
    background: #f1e6da;
    border-radius: 3px;
    height: 100vh;
    margin: 10px;
    padding: 10px;
  }

  @media screen and (min-width: 900px) {
    .menu_wrapper {
      flex-direction: row;
      justify-content: space-between;
    }    

    .menu {
      width: 65vw;
    }
  }
</style>