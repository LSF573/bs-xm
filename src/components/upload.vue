 <template>
  <div class="hello">
    <mt-header title="发布商品">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header> 
    <div class="top_Message">发布虚假信息会被封号，请大家发布真实有效的商品信息。</div>
    <div class="bgc_padding">
        <div class="upload">+</div>
        <p>添加照片</p>
    </div>
    <div class="bgc_padding">
      <input type="text" placeholder="添加宝贝名称、型号、几成新" class="product_title">
      <textarea name="" class="product_title product_dis" cols="30" rows="10" placeholder="描述下你的宝贝，有故事的宝贝更容易送出哦"></textarea>
    </div>
    <div class="setting bgc_padding">
      <div class="message">
        价格：<input type="number" class="inputMassage" placeholder="请输入数字">
      </div> 
      <div class="message">
        上架数量 :<input type="number" class="inputMassage" placeholder="请输入数字">
      </div>
      <div class="message">
        分类：<input type="text" class="inputMassage">
      </div>
      <div class="message">
        取件地址：<input type="text" class="inputMassage">
      </div>
    </div>
    <div class="bottomMessage">发布虚假信息会被封号，请大家发布真实有效的商品信息。</div>
    <button class="submit">确认发布</button>
    <bottomTab :idx="1">		
    </bottomTab>
  </div>
</template>

<script>
import bottomTab from '@/components/common/bottomTab'
export default {
  name: 'upload',
  data () {
    return {
      
    }
  },
  components:{
    bottomTab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  padding-bottom: 100px;
  text-align: center;
}
.bgc_padding{
  background-color: #fff;
  padding:15px 16px;
  margin-bottom:10px;
}
.top_Message{
  padding:5px 0;
  background-color: #F7F6D7;
  color:#ED4B4C;
  font-size:14px;
}
.upload{
  width:50px;
  height:50px;
  margin:30px auto 20px;
  padding-top:3px;
  box-sizing: border-box;
  background-color: #30A6ED;
  color:#fff;
  border-radius: 50%;
  font-weight: 700;
  font-size:40px;
}
.product_title{
  width:100%;
  height: 40px;
  border:none;
  border-bottom: 1px solid #EFEFE7;
  font-size: 16px;
  outline: none;
  margin-bottom: 10px;
}
.product_dis{
  font-size:13px;
  height: 100px;
}
.setting{
  background-color: #fff;
}
.message{
  text-align: left;
  border-bottom:1px solid #F4F4ED;
}
.inputMassage{
  width:250px;
  height:40px;
  border:none;
  outline:none;
  margin-left:10px;
}
.bottomMessage{
  font-size:14px;
  color:#B7B7AA;
  padding:16px 0;
}
.submit{
  width:90%;
  padding:10px 0;
  background-color: yellow;
  border-radius: 4px;
  /* position: fixed;
  left:0;
  bottom:0; */
  font-size:16px;
  text-align:center;
  border:none;
  outline:none;
}
</style>
