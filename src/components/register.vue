<template>
  <div class="register">
  		<div class="bgZhe"></div>
			<div class="bgpic"></div>			
			<form>
				<div class="box">
					<i class="iconfont icon-suo1" id="count1"></i>
				  <input type="password" value="" class="inp1"/>
				</div>
				<div class="box">
					<i class="iconfont icon-wode" id="count"></i>
				  <input type="text"  class="inp2"/>
				</div>
				<div class="box" @click="addData">				
				  	<i class="inp3">立即注册</i>				 
				</div>
			</form>
			<router-link :to="{name:'Success', params:{name:name}}" class="rout" >
				<p class="myself">返回个人中心</p>
			</router-link>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      name:""
      
    }
  },
  methods:{
  	addData(){
  		var inp = document.getElementsByTagName("input");
  		var name = inp[1].value;
			var pwd = inp[0].value;
  		this.name = localStorage.name = name;
  		localStorage.pwd = pwd;  
  		alert("注册成功！");
  		inp[1].value = "";
  		inp[0].value = "";
  	}
  	
  }
}
</script>

<style scoped>
.register{
		margin-top:0.68rem;
	}
.bgZhe{
	position:fixed;
	height: 100%;
	width: 100%;
	background: rgba(0,0,0,0.07);
	z-index: -1;
}
.bgpic{
	position:fixed;
	height: 100%;
	width: 100%;
	background: url(../../static/78.jpg) no-repeat;
	background-size: cover;
	z-index: -2;
}
.box{
	position:fixed;
	bottom:3rem;
	left:0.5rem;
	background: rgba(255,255,255,0.2);
	height:0.8rem;
	width:5.3rem;
	border: 0.01rem solid;
	border-color:rgba(255,255,255,0.4) ;
	color:#fafafa;
	font-size: 0.3rem;
	overflow: hidden;	
	border-radius: 0.5rem;
	display: flex;
}
.box:nth-child(2){
	bottom:4rem;
	left:0.5rem;	
}
.box:nth-child(3){
	bottom:2rem;
	left:0.5rem;
	background: #ffcb16;
	cursor: pointer;	
}
.box>.inp2,.box>.inp1{
	margin-left:0.24rem
}
.box>input{
	border:0;
	background:none;
	outline: none;
}
.box>.inp3{
	display: block;
	height:0.8rem;
	width:5.3rem;
	font-weight: 800;
	color:#000;
	font-style: normal;
	text-align: center;
	margin-top:0.2rem
}
.box>i{
	display: block;
	margin-left: 0.4rem;
	margin-top:0.13rem;
}
#count{
	font-size: 0.4rem!important;
}
#count1{
	font-size: 0.46rem!important;
}
.myself{
	display: block;
	position: fixed;
	right:0.2rem;
	bottom:1rem;
	color:#fcc;
	font-size: 0.3rem;
	font-weight: 600;
}
</style>
