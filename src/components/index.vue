<template>
    <div>
      <mt-header title="首页">
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <!-- 限时秒杀 -->
      <productScroll classify='限时秒杀' router='/limit'></productScroll>
      <!-- 闲置护送 -->
      <productScroll classify='闲置互送' router='/free'></productScroll>
      <productList></productList>
      <bottomTab :idx="0">		
      </bottomTab>
    </div>
</template>

<script>
import bottomTab from '@/components/common/bottomTab'
import productScroll from '@/components/index/productScroll'
import productList from '@/components/index/productList'

export default {
  components:{
    bottomTab,
    productScroll,
    productList
  }
}
</script>

<style>
.title{
  padding:10px 0;
  display: flex;
  justify-content: space-between;
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
