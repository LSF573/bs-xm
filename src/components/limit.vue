<template>
  <div>
    <mt-header title="限时秒杀">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <topTab :titleTab="titleTab"></topTab>
    <div class="zw"></div>
    <productList :array='array'></productList>
  </div>
</template>

<script>
import productList from '@/components/index/productList'
import topTab from '@/components/index/topTab'
export default {
  data(){
    return{
      titleTab:["精选","水果","食品","百货","母婴","女装","食品","美妆","其它"],
      array:[
        {
        img:require('../assets/product.png'),
        title:'测试加速度会尽快发的看法和健康的健康十分hsdgjfs',
        price:12
        },{
          img:require('../assets/product.png'),
          title:'测试加速度会尽快发的看法和健康的健康十分',
          price:12
        },{
          img:require('../assets/product.png'),
          title:'测试加速度会尽快发的看法和健康的健康十分',
          price:12
        },{
          img:require('../assets/product.png'),
          title:'测试',
          price:12
        },{
          img:require('../assets/product.png'),
          title:'测试',
          price:12
        } 
      ]
   }
  },
  components:{
    productList,
    topTab
  }
}
</script>

<style>
.zw{
  width:100%;
  height: 80px;;
}
</style>
