<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view></router-view>
    <div class="info_block_wrapper">
      <router-view name='ordering-guide'></router-view>
      <router-view name='delivery'></router-view>
      <router-view name='history'></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import { dbMenuRef } from './firebase'

export default {
  name: 'app',
  components: {
    appHeader: Header
  },
  created(){
    this.$store.dispatch('setMenuRef', dbMenuRef)
  }
};
</script>

<style>
body {
  font-family: "Crimson Text", "serif";
  margin: 0;
  font-size: 1.5em;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 10px 0;
  background: #f1e6da;
}

li {
  list-style: none;
}

span {
  margin: 0 5px;
}

button {
  background: rgb(63, 145, 63);
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
}

input, 
textarea {
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
  background: rgb(254, 254, 252);
  border: solid 1px #f7de38;
}

.info_block-wrapper {
  display: flex;
  flex-direction: column;
}

.info_block {
  background: #f1e6da;
  margin: 10p 0;
  padding: 10px;
}

.info_block h3 {
  text-align: center;
}

.info_block_content{
  display: flex;
  align-items: center;
}

.info_block img {
  width: 30%;
}

@media screen and (min-wdith: 900px) {
  .info_block {
    width: 100%;
  }
  .info_block_wrapper {
    flex-direction: row;
  }
  .info_block:nth-child(2) {
    margin: 10px;
  }
  .info_block:nth-child(2) {
    order: -1;
  }  
  .info_block_content {
    flex-direction: column;
    align-items: center;
  }
  .info_block img {
    max-width: 100%;
  }
}
</style>
