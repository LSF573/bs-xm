<template>
  <div class="order_page">
    <mt-header title="我的订单">
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <topTab :titleTab="titleTab"></topTab>
    <div class="zw"></div>
    <orderList :orderList='orderList'></orderList>
    <!-- <div class="mytab">
      <template v-for="(item,index) in tabArray">
        <div class="">
          <p>{{item}}</p>
        </div>
      </template>
    </div> -->
  </div>
</template>

<script>
import topTab from '@/components/index/topTab'
import orderList from '@/components/common/orderList'
export default {
  data(){
    return{
      titleTab:['全部','待下单','进行中','已完成'],
      orderList:[
        {
          img:require('../assets/product.png'),
          title:'测试加速度会尽快发的看法和健康的健康十分hsdgjfs',
          price:12,
          state:1 // 1待下单 2进行中 3已完成
        },{
          img:require('../assets/product.png'),
          title:'测试加速度会尽快发的看法和健康的健康十分',
          price:12,
          state:1 //0全部 1待下单 2进行中 3已完成
        },{
          img:require('../assets/product.png'),
          title:'测试加速度会尽快发的看法和健康的健康十分',
          price:12,
          state:0 //0全部 1待下单 2进行中 3已完成
        },{
          img:require('../assets/product.png'),
          title:'测试',
          price:12,
          state:2 //0全部 1待下单 2进行中 3已完成
        },{
          img:require('../assets/product.png'),
          title:'测试',
          price:12,
          state:3 //0全部 1待下单 2进行中 3已完成
        } 
      ],
    }
  },
  components:{
    topTab,
    orderList
  }
}
</script>

<style>
.order_page{
  background-color: #F8F8F2;
}
.order_page .tabs{
  background-color: #fff;
  padding-left:0px;
}
.order_page .tabs .tab_box{
  color:black;
}
.zw{
  width:100%;
  height: 80px;;
}
.order_page .tabs .tab_box .line{
  background-color: #F1F116;
}
</style>
