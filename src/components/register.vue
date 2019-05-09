<template>
  <div class="pad">
    <mt-header title="注册">
      <!-- <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link> -->
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="input_box">
      <p><el-input v-model="userName" clearable placeholder="用户名（手机号或邮箱）" style='font-size:18px;'></el-input></p> 
      <p><el-input v-model="password" type='password' clearable placeholder="密码" style='font-size:18px;'></el-input></p>
    </div>
    <button class="btnlogin" @click="goLogin()">注册</button>
    <!-- <p class="hint">提示：新用户系统将自动注册</p> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      userName:'',
      password:''
    }
  },
  methods:{
    goLogin() {
      console.log(this.userName);
      this.$router.push({
        path:'/login'
      })
    }
  }
}
</script>

<style>

.input_box{
  padding:20px 16px;
  background-color: #fff;
  margin-top:60px;
}
.input_box p{
  margin-bottom: 10px; 
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
