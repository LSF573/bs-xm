<template>
  <div class="miaosha">
    <div class="title">
      <p class="modeTitle">{{classify}}</p>
      <router-link :to="router">
        <p class="more">查看更多 ></p>
      </router-link>
      
    </div>
    <div class="pro_box">
      <div class='box' v-for="(item,index) in array" :key='index' item='item'>
        <img :src="item.img" alt="" class="pro_img">
        <p class="pro_title">{{item.title}}</p>
        <p class="pro_price">￥{{item.price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["classify","router"],
  data() {
    return{
      array:[
        {
        img:require('../../assets/product.png'),
        title:'测试加速度会尽快发的看法和健康的健康十分',
        price:10
        },{
          img:require('../../assets/product.png'),
          title:'测试加速度会尽快发的看法和健康的健康十分',
          price:100
        },{
          img:require('../../assets/product.png'),
          title:'测试加速度会尽快发的看法和健康的健康十分',
          price:90
        },{
          img:require('../../assets/product.png'),
          title:'测试',
          price: 80
        },{
          img:require('../../assets/product.png'),
          title:'测试',
          price:70
        } 
      ]
    }
  }
}
</script>

<style>
.title{
  font-size: 20px;
}
.miaosha{
  padding:10px 16px;
  background-color: #fff;
  margin-bottom:20px;
}
.more,a{
  color:#ACA7A4;
  text-decoration: none;
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
  padding:10px 0;
}
.pro_img{
  width:120px;
}
.pro_title{
  width:120px;
  font-size: 20px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.pro_price{
  color:rgb(255, 0, 140);
  font-size: 18px;
}
</style>
