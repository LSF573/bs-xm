<template>
  <div class="component">
    <div v-for='(item,index) in orderList' :key='index' item='item' class="lsf_box">
      <img :src="item.img" alt="" class="pro_img">
      <div class="lsf_bottom">
        <p class="item_title">{{item.title}}</p>
        <!-- <p class="item_price">￥{{item.price}}  &nbsp;&nbsp;<span class="span">{{item.state==1?'待下单':(item.state==2?'进行中':(item.state==3?'已完成':''))}}</span></p> -->
         <p class="item_price">￥{{item.price}}  &nbsp;&nbsp;<span class="span">已完成</span></p>
      </div>
    </div>
  </div>
</template>

<script> 
export default {
  props:['orderList'],
  data(){
    return{
    
    }
  }
}
</script>

<style scoped>
.lsf_box{
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
}
.pro_img{
  width:180px;
  height:140px;
}
.component {
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.lsf_bottom{
  padding:0 10px 10px 10px;
}
.item_title { 
  font-size: 18px;
  width:160px;
  margin-bottom:5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  height:52px;
}
.item_price{
  color:#F37620;
  font-size:20px;
}
.span{
  float: right;
}
</style>
