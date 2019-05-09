<template>
    <div>
      <mt-header title="首页">
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <!-- 限时秒杀 -->
      <productScroll classify='限时秒杀' router='/limit'></productScroll>
      <!-- 闲置护送 -->
      <productScroll classify='闲置互送' router='/free'></productScroll>
      <div class="classify">
        ---- 好货必抢 ----
        <p class="desc">精选宝贝，等你来抢</p>
      </div>
      <orderList :orderList='array'></orderList>
      <bottomTab :idx="0"></bottomTab>
    </div>
</template>

<script>
import bottomTab from '@/components/common/bottomTab'
import productScroll from '@/components/index/productScroll'
import orderList from '@/components/common/orderList'

export default {
  components:{
    bottomTab,
    productScroll,
    orderList
  },
  data(){
    return{
      array:[
        {
        img:require('../assets/T1.jpg'),
        title:'测试加速度会尽快发的看法和健康的健康十分hsdgjfs',
        price:12
        },{
          img:require('../assets/T2.jpg'),
          title:'测试加速度会尽快发的看法和健康的健康十分',
          price:12
        },{
          img:require('../assets/T1.jpg'),
          title:'测试加速度会尽快发的看法和健康的健康十分',
          price:12
        },{
          img:require('../assets/product.png'),
          title:'测试加速度会尽快发的看法和健康的健康十分s',
          price:12
        },{
          img:require('../assets/product.png'),
          title:'测试加速度会尽快发的看法和健康的健康十分',
          price:12
        } 
      ],
      datas:[]
    }
  },
  created(){
    this.$Axios.get("https://elm.cangdu.org/v1/cities?type=group").then(datas => {
      // console.log(datas.data)
      this.datas = datas.data;
    })
  }
}
</script>

<style>
.title{
  padding:10px 0;
  display: flex;
  justify-content: space-between;
}
.classify{
  padding:25px 0;
  text-align: center;
  background-color: #fff;
  margin-bottom:20px;
  font-size: 22px;
}
.desc{
  color:#ACA7A4;
  font-size: 18px;
  text-align: center;
  margin-top:10px;
}
/* .miaosha{
  padding:10px 16px;
  background-color: #fff;
}
.pro_box{
  width:100%;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
}
.box{
  background-color: #fff;
  margin-right: 10px;
  padding:10px;
}
.pro_img{
  width:120px;
} */
/* .mint-header{
  padding:25px 15px;
  font-size:20px;
} */
</style>
