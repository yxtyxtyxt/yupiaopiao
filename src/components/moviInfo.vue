<template>
  <div class="moviInfo">
   	  <div id="bg_pic">
   	  	<div class="left">
   	  		<img src="../../static/4.jpg" alt="" />
   	  		<span></span>
   	  	</div>
   	  	<div class="right">
   	  		<ul>
   	  			<li>神奇女侠</li>
   	  			<li>动作 冒险 奇幻</li>
   	  			<li>美国 | 183分钟</li>
   	  			<li>盖尔·加朵 Gal</li>
   	  		</ul>
   	  	</div>
   	  </div>
   	  <div id="btns">
   	  	<mt-button type="primary" id ="btn">喜欢</mt-button>
   	  	<mt-button type="primary" id ="btn">评分</mt-button>  	 	
   	  </div>
   	  <div id="">
   	  	<span></span>
   	  </div>
   	  
  </div>
</template>

<script>
export default {
  name: 'moviInfo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
