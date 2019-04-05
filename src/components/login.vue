<template>
  <div class="pad">
    <mt-header title="登录">
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="input_box">
      <p><input type="text" placeholder="用户名（手机号或邮箱）" class="input"></p>
      <p><input type="text" placeholder="密码" class="input"></p>
    </div>
    <button class="btnlogin">登录</button>
    <p class="hint">提示：新用户系统将自动注册</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.input_box{
  padding:0 16px;
  background-color: #fff;
  margin-top:60px;
}
.input_box p{
  border-bottom: 1px solid #A9A9A9; 
}
.input{
  width:100%;
  height: 60px;
  outline: none;
  border:none;
  font-size: 20px;
}
.btnlogin{
  display: block;
  width:350px;
  height: 45px;
  margin:20px auto 40px;
  outline: none;
  border:none;
  border-radius: 5px;
  font-size: 20px;
  color:#fff;
  background-color: #00BC00;
}
.hint{
  text-align: center;
  margin-bottom: 20px;
  font-size: 16px;
  color:#C6CC0F;
}

</style>
