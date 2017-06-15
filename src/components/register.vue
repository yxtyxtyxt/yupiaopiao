<template>
  <div class="register">
  		<div class="bgZhe"></div>
			<div class="bgpic"></div>			
			<form action="" method="post">
				<div class="box">
					<i class="iconfont icon-suo1" id="count1"></i>
				  <input type="password" value="" class="inp1"/>
				</div>
				<div class="box">
					<i class="iconfont icon-wode" id="count"></i>
				  <input type="text"  class="inp2"/>
				</div>
				<div class="box">				
				  <input type="submit" value="确认登录" class="inp3"/>				  
				</div>
			</form>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      
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
	width:5.35rem;
	font-weight: 800;
	color:#000;
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
</style>
