<template>
  <div class="haohuo">
    <div class="Box" v-for='(item,index) in array' :key='index' item='item'>
      <img :src="item.img" alt="" class="lsf_pro_img">
      <div class="pro_message">
        <p class="pro_title1">{{item.title}}</p>
        <p class="price">￥{{item.price}}</p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props:['array'],
  data() {
    return{
      
    }
  }
}
</script>

<style scoped>

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
.lsf_pro_img{
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
