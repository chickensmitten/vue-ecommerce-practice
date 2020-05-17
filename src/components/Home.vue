<template>
  <div class="background">
    <div class="background-overlay">
      <h2>
        Welcome to Pizza Planet!
      </h2>
      <img src="../assets/images/roller.png" alt="Roller">
      <h3>Feeling Hungry?</h3>
      <button class="order_btn" @click="goToMenu">Let's order!</button>
    </div>      
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToMenu() {
      // this.$router.go(-1)
      // this.$router.replace('/menu');
      // the method above takes us back to previous page.
      // this.$router.replace({ name: "menuLink"});
      // this.$router.push({ name: "menuLink"});
      // warning, the browsing history is replaced like replacing an element in array. 
      // so when you do this, it will go back rather than the about page.
    }
  }
};
</script>

<style>
  h2, h3 {
    margin: 2%;
  }

  .background {
    background: url('../assets/images/dough.jpg') center;
    background-size: cover;
    height: 30vh;
    display: flex;
    text-align: center;
    align-items: center;
  }

  .background-overlay {
    display: flex;
    flex-direction: column;
    background: #f1e6da;
    opacity: 0.8;
    width: 50%;
    margin: 0 auto;
    padding: 5px;
    align-items: center;
  }

  .background-overlay > img {
    max-width: 15%;
  }

  .order_btn {
    background: #f7df38;
    border-radius: 3px;
    margin-bottom: 10px;
    padding: 10px;
    cursor: pointer;
  }
</style>