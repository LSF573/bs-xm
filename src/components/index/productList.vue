<template>
  <div class="haohuo">
    <div class="Box" v-for='(item,index) in array' :key='index' item='item'>
      <img :src="item.img" alt="" class="lsf_pro_img">
      <div class="pro_message">
        <p v-if='item.issue_time'>{{item.issue_time}}</p>
        <p class="pro_title1">{{item.title}}</p>
        <p class="price">￥{{item.price}}<span class="span">{{item.state==1?'未发货':(item.state==2?'已发货':(item.state==3?'已完成':''))}}</span></p>
        <!-- 我的订单页面按钮 -->
        <el-button center=true type="primary" round @click="open2(item)" style='float:right;font-size:16px' v-if='visible==true&&item.state!=3'>{{item.state==1?'取消订单':item.state==2?'确认收货':''}}</el-button>
        <!-- 我的发布页面按钮 -->
        <el-button center=true type="primary" round @click="open(item)" style='float:right;font-size:16px' v-if='visible==2&&(item.state==0||item.state==1)'>{{item.state==1?'去发货':''}}</el-button>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props:['array','visible'],
  data() {
    return{
      
    }
  },
  methods:{
    open2(item) {
      if(item.state==1||item.state==2){
        this.$confirm('确定要取消该订单?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '订单取消成功!'
          });
        })
      }else {
        this.$confirm('请确定您已收到货后再确认收货?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '确认收货成功!'
          });
        })
      }
    },
    // 去发货
    open(item) {
        this.$confirm('确定发货该商品么?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // this.$Axios.get('').then((data)=>{

          // })
          this.$message({
            type: 'success',
            message: '发货成功!'
          });
        })
    }
  }
}
</script>

<style scoped>
.el-message-box__wrapper {
  position: fixed !important;
  top: 30% !important;
  left: 0 !important;
  right: 0 !important;
}
.el-message-box {
  width:300px !important;
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
.lsf_pro_img{
  width:100px;
  height:100px;
  flex:none;
  margin-right:10px;
}
.pro_title1{
  font-size: 20px;
  /* width:240px; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  height:52px;
}
.price{
  font-size: 20px;
  color:#F37620;
  margin: 10px 0;
}
.span{
  float: right;
}
</style>
