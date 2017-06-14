<template>
  <div id="login">
  	<div id="liu"></div>
  	<div id="ying"></div>
			<div class="headPic">
				<div class="setPic"></div>
					<span>立即登录</span>
					 <i class="iconfont icon-jinru bttn"></i>
			</div>
			<div id="Top">
				<router-link to='/' class="rout">
					<i class="iconfont icon-xin" id="huo"></i>
					<span class="fott">想看</span>
				</router-link>
				<router-link to='/cinemaList' class="rout">
					<i class="iconfont icon-kanguo" id="copy"></i>
					<span class="fott">看过</span>
				</router-link>
				<router-link to='/found' class="rout">
					<i class="iconfont icon-huati" id="shangcheng"></i>
					<span class="fott">话题</span>
				</router-link>
				<router-link to='found' class="rout">
					<i class="iconfont icon-bianji" id="piaowuguanlihover"></i>
					<span class="fott">影评</span>
				</router-link>
		</div>
		<div class="dingdan">
			<p class="dan">我的订单</p>
		</div>
					<div class="oop">
				<router-link to='/' class="rout">
					<i class="iconfont icon-qianbao" id="biao"></i>
					<span class="fott ftt">未消费</span>
				</router-link>
				<router-link to='/cinemaList' class="rout">
					<i class="iconfont icon-zhifu" id="biao"></i>
					<span class="fott ftt">待支付</span>
				</router-link>
				<router-link to='/found' class="rout">
					<i class="iconfont icon-pingjia" id="biao"></i>
					<span class="fott ftt">待评价</span>
				</router-link>
				<router-link to='found' class="rout">
					<i class="iconfont icon-tuikuan" id="biao"></i>
					<span class="fott ftt">待退款</span>
				</router-link>
		</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

#login{
	margin-top: 0.68rem;
	position: relative;
	z-index: 6;
}
#liu{
	position: fixed;
	height:100%;
	width:100%;
	background: rgba(0,0,0,0.6);
	z-index: -1;
}
#ying{
	position: fixed;
	height:100%;
	width:100%;
	background: url(../../static/9.png);
	background-size: cover;
	z-index: -2;
}
.headPic{
	height:1.8rem;
	width:100%;
	overflow: hidden;
}
.setPic{
	width:1.14rem;
	height:1.14rem;
	float:left;
	margin-top: 0.34rem;
	margin-left: 0.3rem;
	border-radius: 100%;
	background: url(../../static/77.png) no-repeat;
	background-size: cover;
}
span{
	display: block;
	color:#fafafa;
	float: left;
	margin-left:0.3rem;
	margin-top: 0.65rem;
	font-size: 0.3rem;
}
.bttn{
	float: right;
	margin-right: 0.1rem;
	margin-top: 0.67rem;
	border:0;
	width: 1rem;
}
.mint-search{
		height:7vh;
		margin-bottom: 0.6rem;
	}
	.rout{
		width:25%;
		height:5vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.tab-label{
		margin-top:0.4rem;
		color:#fff;
	}
	#Top,.oop{
		height:1.3rem;
		display: flex;
		flex-flow: row;
		background: rgba(255,255,255,0.1);
		align-content: space-around;
		border: 0.01rem solid;
		border-color:rgba(255,255,255,0.5) ;
		padding-bottom: 0.15rem;
	}
	.fott{
		margin: 0;
		font-size: 0.22rem;		
	}
	#huo{
		color:red;
		font-size: 0.5rem!important;
	}
	#copy{
		color:skyblue;
		font-size: 0.5rem!important;
	}
	#shangcheng{
		margin-top:0.13rem;
		color:yellow;
		font-size: 0.42rem!important;
	}
	#piaowuguanlihover{
		margin:0.11rem 0 0.06rem;
		color:orange;
		font-size: 0.4rem!important;
	}
.dingdan{
	height:0.8rem;
	overflow: hidden;
}
.dingdan>.dan{
	color: #fafafa;
	vertical-align: middle;
	font-size: 0.3rem;
	margin:0.22rem 0 0 0.25rem;
}
.oop{
	height:0.92rem;
	background: rgba(35,38,53,0.2);
}
#biao{
	font-size: 0.36rem!important;
	color: #ccc!important;
}
.ftt{
	color: #ccc;
	font-size: 0.23rem;
}
</style>
