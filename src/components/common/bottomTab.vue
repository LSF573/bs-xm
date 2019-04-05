
<template>
	<div class="footer">
		<div class='bottom' v-for='(item,index) of items' :class='[item.cls,{on:index === idx}]' :key='index' @click="$router.push(item.push)">
			<img :src="index == idx ? item.iconSelect : item.icon" alt="" class="image">
      <!-- <img src=".././assets/index.png" alt=""> -->
			<p :class="['colorChange',{on:index===idx}]" >{{item.name}}</p>
		</div>
	</div>
</template>
 
<script>
	export default{
		props:['idx'],
		data(){
			return {
				items:[{
					cls: 'home',
					name: '首页',
					push: '/',
					icon: require('../../assets/index.png'),
					iconSelect: require('../../assets/index_selected.png')
        },{
					cls:"home",
					name:"发布",
					push:"/upload",
					icon: require('../../assets/uploadImage.png'),
					iconSelect: require('../../assets/uploadImage.png')
        },
        {
					cls: "my",
					name: "我的",
					push: "/my",
					icon: require('../../assets/my.png'),
					iconSelect: require('../../assets/my_selected.png')
        }],
        colorChange:'red'
        
      }
    }
  }
</script>
<style>
  .image{
    width:35px;
    height:35px;
  }
  .footer{
    display: flex;
    justify-content: space-around;
    position: fixed;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    padding:6px 0;
    /* height: 80px; */
    background: #fff;
    width: 100%;
    border-top:1px solid #909090;
  }
  .bottom{
    font-size: 16px;
  }
  .on{
    color: #30A6ED;
  }
</style>
