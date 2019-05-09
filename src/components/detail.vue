<template>
  <div>
    <mt-header title="商品详情">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="back()"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="page_detail">
      <div class="block">
        <el-carousel height="300px">
          <el-carousel-item v-for="item in detailData.img" :key="item">
            <!-- <h3>{{ item }}</h3> -->
            <img :src="item" alt="" style="width:100%">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="pro_desc">
        <div class="pc">
          <div class="price">￥{{detailData.price}}</div>
          <p class="count">剩余{{detailData.count}}份</p>
        </div>
        <p class="pro_name">{{detailData.pro_title}}</p>
        <el-tag type="danger" style='font-size:16px'>包邮</el-tag>
      </div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size:18px">商品购买流程</span>
        </div>
        <div class="text item">
          <div class="flow">
            <template v-for="(item,index) in process" index="index" item="item">
              <div class="flows" key="index">
                <img class="flow_image" :src='item.url'></img>
                <div class="flow_list">{{item.title}}</div>
              </div>
              <div class="flow_img" v-if='index<2'>
                <img class="flow_image1" src="https://cdn.youlianyc.com/image/static/42f889963924b827ce11617e138872575adf3ccd.jpg"></img>
              </div>
            </template>
          </div>
        </div>
      </el-card>
      <div class="bottom_btn">
        <el-button style="width:48%;font-size:18px">返回</el-button>
        <el-button type="danger" plain style="width:50%;margin-left:0;float:right;font-size:18px">去下单</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      detailData: {
        img: [require('../assets/T1.jpg'),require('../assets/T2.jpg'),require('../assets/T3.jpg')],
        pro_title: '唐狮短袖t恤女2019夏季新款网红韩版纯棉半袖百搭ins风T恤潮学生',
        price: '29.9',
        count: 5
      },
      process:[{
         url:"https://cdn.youlianyc.com/image/static/816f28d1c943bef1076981bd7a7e5f26eb417f51.jpg",
         title: '选择商品'
        },
        {
         url:"https://cdn.youlianyc.com/image/static/443de971384ed7929d6bf878793808dca5b1155f.jpg",
         title: '支付下单'
        },
        {
         url:"https://cdn.youlianyc.com/image/static/f7bbf5981985a69dd2970baef1132ab0c22fdd9e.jpg",
         title: '确认收货'
        },
        // {
        //  url:"https://cdn.youlianyc.com/image/static/761016500ecf3987bbadd16002e8606bb0c657d6.jpg",
        //  title: '红包提现'
        // }
      ]
    }
  },
 methods:{
   back(){
     this.$router.go(-1);
   }
 }
  
}

</script>

<style>
.bottom_btn {
  width:100%;
  position: fixed;
  bottom:0;
  left:0;
}
.swiperImg{
  display: inline-block;
  width:90%;
  height: 300px;
  margin: 0 auto;
}
.page_detail{
  background-color: #fff;
  padding-bottom: 100px;
}
.pro_desc {
  padding: 24px ;
}
.pc {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.price {
  font-size:20px;
  color: #FF475F;
}
.pro_name {
  width:100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
}

.flow{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20rpx 0 32rpx;
  text-align: stretch;
}
.flows{
  text-align: center;
}
.flow_img{
  padding-bottom: 30px;
}
.flow_image{
  width:40px;
  height: 40px;
}
.flow_image1{
  width:30px;
  height:10px;
}
.flow_list{
  font-size:16px;
  font-weight:400;
  color:rgba(136,136,136,1);
}
      
</style>
