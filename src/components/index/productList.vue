<template>
  <div>
    <div class="classify">
      ---- 好货必抢 ----
      <p class="desc">技术点还看电视</p>
    </div>
    <div class="haohuo">
      <div class="Box" v-for='(item,index) in array' :key='index' item='item'>
        <img :src="item.img" alt="" class="pro_img">
        <div class="pro_message">
          <p class="pro_title1">{{item.title}}</p>
          <p class="price">￥{{item.price}}</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return{
      array:[
        {
        img:require('../../assets/product.png'),
        title:'测试加速度会尽快发的看法和健康的健康十分hsdgjfs',
        price:12
        },{
          img:require('../../assets/product.png'),
          title:'测试加速度会尽快发的看法和健康的健康十分',
          price:12
        },{
          img:require('../../assets/product.png'),
          title:'测试加速度会尽快发的看法和健康的健康十分',
          price:12
        },{
          img:require('../../assets/product.png'),
          title:'测试',
          price:12
        },{
          img:require('../../assets/product.png'),
          title:'测试',
          price:12
        } 
      ]
    }
  }
}
</script>

<style>
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
.haohuo{
  padding:0 16px 100px;
}
.Box{
  display: flex;
  background-color: #fff;
  padding:15px;
  margin-bottom: 20px;
  border-radius: 5px;
}
.pro_img{
  width:100px;
  height:100px;
  flex:none;
  margin-right:10px;
}

.pro_message{
  /* display: inline-block; */
}
.pro_title1{
  font-size: 20px;
  width:200px;
  margin-bottom:10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  height:52px;
}
.price{
  font-size: 22px;
  color:#F37620;
}
</style>
