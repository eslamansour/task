<template>
  <div>
    <div class="header">
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Source Sans Pro", sans-serif;
  background-color: #d5dae5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  width: 100%;
  z-index: 3;
  height: 50px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #fff;
  border-bottom: 3px solid #ffffff;
  -webkit-box-shadow: 0 5px 5px -6px rgb(87, 87, 87);
  -moz-box-shadow: 0 5px 5px -6px rgb(87, 87, 87);
  box-shadow: 0 5px 5px -6px rgb(87, 87, 87);
}
.nav-link{
  padding: 0px;
  transition: 0.3s;
}
.nav-link:hover{
  padding-right: 20px;
  border-right: #65bde1 4px solid;
}
.dropdown{
  float: right;
}
</style>
