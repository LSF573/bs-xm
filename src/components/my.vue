<template>
  <div>
    <mt-header title="我的">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="my_top">
      <div class="user">
        <img src=".././assets/cart.png" alt="" class="user_img">
        <div class="">
          <span class="nickname">思凡（ID:12345）</span>
          <p class="title">换一种心情，换一种生活</p>
        </div>
        <router-link to="/login">
          <button class="gologin">去登录</button>
        </router-link>
        
      </div>
    </div>
    <div class="my_message">
      <div class="order">
        <div class="order_top">
          <span>我的订单</span>
          <span>查看全部订单 ></span>
        </div>
        <div class="state">
          <div>
            <img src=".././assets/待下单.png" alt="">
            <p class="wite">待下单</p>
          </div>
          <div>
            <img src=".././assets/进行中.png" alt="">
            <p class="wite">进行中</p>
          </div>
          <div>
            <img src=".././assets/已完成.png" alt="">
            <p class="wite">已完成</p>
          </div>
        </div>
      </div>
      <div class="order">
        <div class="order_top">
          <span>我的发布</span>
          <span>查看详情 ></span>
        </div>
        <div class="state">
          <div>
            <img src=".././assets/待下单.png" alt="">
            <p class="wite">待发货</p>
          </div>
          <div>
            <img src=".././assets/进行中.png" alt="">
            <p class="wite">待收货</p>
          </div>
          <div>
            <img src=".././assets/已完成.png" alt="">
            <p class="wite">已完成</p>
          </div>
        </div>
      </div>
    </div>
    <bottomTab :idx="2">		
    </bottomTab>
  </div>
</template>

<script>
import bottomTab from '@/components/common/bottomTab'
export default {
  components:{
    bottomTab
  }
}
</script>

<style>
.wite{
  font-size: 16px;
}
.my_top{
  padding:20px 16px 100px;
  background-color: #26A2FF;
}
.title{
  font-size:18px;
}
.user{
  display: flex;
  align-items: center;
  color:#fff;
}
.gologin{
  background-color: #67EE42;
  border:none;
  outline:none;
  color:#fff;
  font-size:16px;
  padding:3px 10px;
  margin-left:30px;
}
.user_img{
  width:50px;
  height: 50px;
  margin-right:10px;
}
.nickname{
  font-size: 22px;
}
.my_message{
  padding:0 16px;
  margin-top:-70px;
}
.order{
  background-color: #fff;
  border-radius: 5px;
  padding:0 16px;
  margin-bottom: 20px;
}
.order_top{
  display: flex;
  justify-content: space-between;
  font-size:18px;
  padding: 16px 0;
  border-bottom: 1px solid #E6E6E6;
}
.state{
  display: flex;
  justify-content: space-around;
  padding:16px 0;
}
</style>
