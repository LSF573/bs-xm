<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Microsoft Yahei', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background-color: #F8F8F2;
  height:100%;
  margin-top: 60px;
}
*{
  margin:0;
  padding:0;
}
.mint-header{
  padding:30px 15px;
  font-size:22px;
  position: fixed;
  top:0;
  width:100%;
  border-bottom:1px solid #DCDCD4;
  z-index: 1000;
}
</style>
