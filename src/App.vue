<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view ref="messageRef" class="pageContent"></router-view>
  </div>
</template>

<script>
import navBar from "./components/navBar/Navbar.vue";

export default {
  data() {
    return {
      
    };
  },
  components:{
    navBar
  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
  @font-face {
    font-family: "cairo-bold";
    src: url("../src/assets/fonts/Cairo-Bold.ttf");
  }
  @font-face {
    font-family: "cairo-regular";
    src: url("../src/assets/fonts/Cairo-Regular.ttf");
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "cairo-regular" !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .pageContent{
    padding: 10px 20px;
    margin-top: 76px;
    margin: 30px;
    background-color: white;
    border-radius: 5px;
    box-shadow:#c2c2c2 1px 0px 6px 0px;
  }
</style>
