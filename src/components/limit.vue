<template>
  <div>
    <mt-header title="限时秒杀">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
      <div class="tabs">
        <template v-for="(item,index) in titleTab" item='item'>
          <div class="tab_box">
            <p>{{item}}</p>
          </div>
          
        </template>
        
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      titleTab:["全部","休闲美食","居家百货","服饰鞋包","美妆个护","母婴玩具","书籍卡碟","其它"]
    }
  }
}
</script>

<style>
.tabs{
  background-color: #fff;
  margin-bottom:10px;
  /* width:100%;
  overflow-y: hidden;
  overflow-x: scroll; */
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  
}
.tab_box{
  
}
</style>
