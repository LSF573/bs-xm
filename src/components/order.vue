<template>
  <div class="order_page">
    <mt-header title="我的订单">
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <topTab :titleTab="titleTab" @tabClick='tabClick'></topTab>
    <div class="zw"></div>
    <productList :array='orderList' :visible='true'></productList>
  </div>
</template>

<script>
import topTab from '@/components/index/topTab'
import productList from '@/components/index/productList'
export default {
  data(){
    return{
      titleTab:['全部','未发货','已发货','已完成'],
      orderList:[
        {
          img:require('../assets/T1.jpg'),
          title:'唐狮短袖t恤女2019夏季新款网红韩版纯棉半袖百搭ins风T恤潮学生',
          price:12,
          state:1 // 0全部 1已送出 2未送出
        },{
          img:require('../assets/T2.jpg'),
          title:'唐狮短袖t恤女2019夏季新款网红韩版纯棉半袖百搭ins风T恤潮学生',
          price:12,
          state:1 
        },{
          img:require('../assets/T3.jpg'),
          title:'唐狮短袖t恤女2019夏季新款网红韩版纯棉半袖百搭ins风T恤潮学生',
          price:12,
          state:3
        },{
          img:require('../assets/product.png'),
          title:'唐狮短袖t恤女2019夏季新款网红韩版纯棉半袖百搭ins风T恤潮学生',
          price:12,
          state:2 
        },{
          img:require('../assets/product.png'),
          title:'唐狮短袖t恤女2019夏季新款网红韩版纯棉半袖百搭ins风T恤潮学生',
          price:12,
          state:1 
        } 
      ],
    }
  },
  components:{
    topTab,
    productList
  },
  methods:{
    // tab切换
    tabClick(index){
      alert(index);
    }
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
