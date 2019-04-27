<template>
  <div>
    <mt-header title="商品详情">
      <router-link to="" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="page_detail">
      <mt-swipe :auto="4000">
        <template v-for='(item,index) in detailData.img' item='item'>
          <mt-swipe-item :key='index'>
            <img :src="item" alt="" class="swiperImg">
          </mt-swipe-item>
        </template>
      </mt-swipe>
      <img src="../assets/product.png" alt="" class="swiperImg">
      <div class="pro_desc">
        <div class="pc">
          <div class="price">￥{{detailData.price}}</div>
          <p class="count">剩余{{detailData.count}}份</p>
        </div>
        <p class="pro_name">{{detailData.pro_title}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      detailData: {
        img: [require('../assets/product.png'),require('../assets/product.png'),require('../assets/product.png')],
        pro_title: '2019夏季韩运动服2019夏季韩运动服2019夏季韩运动服',
        price: '29.9',
        count: 5
      },
      
    }
  },
  components:{
    
  }
  
}

</script>

<style>
.swiperImg{
  display: inline-block;
  width:90%;
  height: 300px;
  margin: 0 auto;
}
.page_detail{
  background-color: #fff;
}
.pro_desc {
  padding: 28px;
}
.pc {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.price {
  font-size:20px;
  color: #FF475F;
}
.pro_name {
  width:100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
