<template>
  <div class="tabs">
    <template v-for="(item,index) in titleTab" item='item'>
      <div class="tab_box">
        <p>{{item}}</p>
        <div class="line" v-if="index==0"></div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props:['titleTab','page']
}
</script>

<style>
.tabs{
  background-color:#F46C69;
  margin-bottom:20px;
  width:100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  overflow: auto;
  padding-left: 32px;
  position: fixed;
}

.tab_box{
  padding:15px 0;
  margin-right:15px;
  color:white;
  font-size:18px;
  white-space: nowrap;
  font-family: 'Microsoft Yahei';
}
.line{
  width:25px;
  height:3px;
  border-radius: 2px;
  background-color: #fff;
  margin:5px auto 0;
}
</style>
