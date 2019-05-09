 <template>
  <div class="hello">
    <mt-header title="发布商品">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="top_Message">发布虚假信息会被封号，请大家发布真实有效的商品信息。</div>
    <div class="uploadImg">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <div class="bgc_padding">
      <el-input v-model="proName" clearable v-on:change='valueChange()' style='font-size:18px;' placeholder="添加宝贝名称、型号、几成新"></el-input>
      <!-- <input type="text" placeholder="添加宝贝名称、型号、几成新" class="product_title"> -->
      <p style="height:10px;"></p>
      <el-input
        type="textarea"
        :rows="5"
        placeholder="描述下你的宝贝，有故事的宝贝更容易送出哦"
        v-model="textarea" style='font-size:18px;'>
      </el-input>
      <!-- <textarea name="" class="product_title product_dis" cols="30" rows="10" placeholder="描述下你的宝贝，有故事的宝贝更容易送出哦"></textarea> -->
    </div>
    <div class="setting bgc_padding">
      <div class="message">
        <p style='width:80px'>价格：</p>
        <el-input v-model="proPrice" clearable placeholder="请输入数字" style='font-size:18px;'></el-input>
        <!-- <input type="number" class="inputMassage" placeholder="请输入数字"> -->
      </div>
      <div class="message">
        <p style='width:120px'>上架数量:</p>
        <el-input v-model="proCount" clearable placeholder="请输入数字" style='font-size:18px;'></el-input>
      <!-- <input type="number" class="inputMassage" placeholder="请输入数字"> -->
      </div>
      <div class="message">
        商品类型：<el-cascader style='font-size:18px;'
          expand-trigger="hover"
          :options="options"
          v-model="selectedOptions2"
          @change="handleChange">
        </el-cascader>
        <!-- 分类：<input type="text" class="inputMassage"> -->
      </div>
      <div class="message">
        <p style='width:120px'>取件地址：</p>
        <el-input v-model="proAdress" clearable placeholder="请输入详细地址" style='font-size:18px;'></el-input>
        <!-- 取件地址：<input type="text" class="inputMassage"> -->
      </div>
    </div>
    <div class="bottomMessage">发布虚假信息会被封号，请大家发布真实有效的商品信息。</div>
    <button class="submit" @click='commit()'>确认发布</button>
    <bottomTab :idx="1">		
    </bottomTab>
  </div>
</template>

<script>
import bottomTab from '@/components/common/bottomTab'
import updatefile from '@/components/updatefile'

export default {
  name: 'upload',
  data () {
    return {
      proName:'',
      proPrice:'',
      proCount:'',
      proAdress:'',
      textarea: '',
      imgList:[
        require('../assets/cart.png'),require('../assets/cart.png'),require('../assets/cart.png')
      ],
      options: [{
        value: '0',
        label: '限时秒杀',
        children: [{
          value: '1',
          label: '服装',
        }, {
          value: '2',
          label: '食品',
        },{
          value: '3',
          label: '美妆',
        },{
          value: '4',
          label: '百货',  
        },{
          value: '5',
          label: '其它',
        }
        ]
      }, {
        value: '1',
        label: '闲置互送',
        children: [{
          value: 'a',
          label: '服装',
        }, {
          value: 'b',
          label: '食品',
        },{
          value: 'c',
          label: '美妆',
        },{
          value: 'd',
          label: '百货',
        },{
          value: 'e',
          label: '其它',
        }
        ]
        }, {
        value: '2',
        label: '好货必抢',
        children: [{
          value: 'a',
          label: '服装',
        }, {
          value: 'b',
          label: '食品',
        },{
          value: 'c',
          label: '美妆',
        },{
          value: 'd',
          label: '百货',
        },{
          value: 'e',
          label: '其它',
        }
        ]
      }],
      selectedOptions2: [],
      dialogImageUrl: '',
      dialogVisible: false
    };  
  },
  components:{
    bottomTab,
    updatefile
  },
  methods: {
    // 商品分类
    handleChange(value) {
      console.log(value);
    },
    // 上传图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    valueChange(){
      console.log('value==>',this.proName);
    },
    commit() {
      console.log('selectedOptions2==>',this.selectedOptions2)
      if(this.proName&&this.proPrice&&this.proAdress){
        this.$router.push('/issue');
      }else {
        this.$message({
          message: '填写完整的商品信息，更受大家喜爱哦！',
          type: 'warning'
        });
      }
    }

  }

}
</script>

<style scoped>
.message .el-message {
  position: absolute;
  top: 50%;
  left:225px !important;
}

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
  font-size: 18px;
  outline: none;
  
}
.product_dis{
  font-size:18px;
  height: 100px;
  margin-top: 10px;
}
.setting{
  background-color: #fff;
}
.message{
  text-align: left;
  font-size: 18px;
  border-bottom:1px solid #F4F4ED;
  display: flex;
  align-items: center;
  margin-bottom:10px;
}
.inputMassage{
  width:250px;
  height:40px;
  border:none;
  outline:none;
  margin-left:10px;
  font-size: 16px;
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
/* 上传图片组件样式 */
.uploadImg {
  padding-top:20px;
  background-color: #fff;
}
</style>
