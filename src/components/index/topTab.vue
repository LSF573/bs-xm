<template>
  <div class="tabs">
    <template v-for="(item,index) in titleTab" item='item'>
      <div class="tab_box" @click="tabClick(index)" >
        <p>{{item}}</p>
        <div class="line" v-if="index==tabIndex"></div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props:['titleTab','page'],
  data(){
    return{
      tabIndex:'0',
    }
  },
  
  methods:{
    tabClick(index){
      this.tabIndex = index.toString();
      console.log(index);
      this.$emit('tabClick',this.tabIndex);
    }
  }
}
</script>

<style>
.tabs{
  background-color:#FF8080;
  margin-bottom:20px;
  width:100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  overflow: auto;
  /* padding-left: 32px; */
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
