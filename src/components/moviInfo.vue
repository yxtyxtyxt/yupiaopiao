<template>
  <div class="moviInfo">
   	  <div id="bg_pic">
   	  	<div class="left">
   	  		<img :src=arr.poster />
   	  		<span></span>
   	  	</div>
   	  	<div class="right">
   	  		<ul v-for="item in arr">
   	  			<li>{{arr.title}}</li>
   	  			<li>{{arr.genres}}</li>
   	  			<li>{{arr.country}} | {{arr.rating_count}}分钟</li>
   	  			<li>上映时间：{{arr.release_date}}</li>
   	  		</ul>
   	  	</div>
   	  </div>
   	  <div id="btns">
   	  	<mt-button type="primary" id ="btn">喜欢</mt-button>
   	  	<mt-button type="primary" id ="btn">评分</mt-button>  	 	
   	  </div>
   	  <div id="centers">
   	  	<p>{{arr.plot_simple}}</p>
   	  </div>
   	  
  </div>
</template>

<script>
import Vue from "vue"
export default {
  name: 'moviInfo',
  data () {
    return {
      arr:""
    }
  },
  created(){
  	Vue.axios.get("../../static/info.json").then((res)=>{
  		return res.data.result
  	}).then((data) =>{     	
      	this.arr = data;     	
    })
  }
}
</script>
		
<style scoped>
#bg_pic{
	background: url(../../static/bg.jpg) no-repeat;
	overflow: hidden;
	background-size: cover;
	height:3.5rem;
	width: 100%;
	text-align: center;	
}
.left{
	width:50%;
	height:3.5rem;
	float: left;
}
.left>img{
	display: inline-block;
	width:2rem;
	height:3.2rem;
	vertical-align: middle;
	padding-top:0.18rem
}
.right{
	width: 50%;
	height:3.5rem;
	float: right;
}
.right>ul{
	font-size: 0.26rem;
	color: #fff;
	text-align: left;
	margin-top:0.8rem;
	line-height: 0.5rem;
	overflow:hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
#btns{
	height:1.2rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
#btns>#btn{
	width:2.5rem;
	height:0.6rem;
	font-size: 0.25rem;
	background: #DCDCDC;
	color: #666;
}
#centers{
	height:2.8rem;
	width: 86%;
/*	background: orange;*/
	margin-left:0.38rem;
}
#centers p{
	font-size:0.26rem;
	line-height: 0.5rem;
	color:#666;
}
</style>
