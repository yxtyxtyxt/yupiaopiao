<template>
  <div id="login">
  	<div id="liu"></div>
  	<div id="ying"></div>
			<div class="headPic">
				<div class="setPic"></div>
				 <router-link class="router" to="/register">
					 <span>{{login}}</span>
				 </router-link>
					 <i class="iconfont icon-jinru bttn"></i>
			</div>
			<div id="Top">
				<router-link to='/' class="rout">
					<i class="iconfont icon-xin" id="huo"></i>
					<span class="fott">{{want1}}</span>
				</router-link>
				<router-link to='/cinemaList' class="rout">
					<i class="iconfont icon-kanguo" id="copy"></i>
					<span class="fott">{{want2}}</span>
				</router-link>
				<router-link to='/found' class="rout">
					<i class="iconfont icon-huati" id="shangcheng"></i>
					<span class="fott">{{want3}}</span>
				</router-link>
				<router-link to='found' class="rout">
					<i class="iconfont icon-bianji" id="piaowuguanlihover"></i>
					<span class="fott">{{want4}}</span>
				</router-link>
		</div>
		<div class="dingdan">
			<p class="dan">我的订单</p>
		</div>
					<div class="oop">
						<router-link to='/' class="rout">
							<i class="iconfont icon-qianbao" id="biao"></i>
							<span class="fott ftt">{{count1}}</span>
						</router-link>
						<router-link to='/cinemaList' class="rout">
							<i class="iconfont icon-zhifu" id="biao"></i>
							<span class="fott ftt">{{count2}}</span>
						</router-link>
						<router-link to='/found' class="rout">
							<i class="iconfont icon-pingjia" id="biao"></i>
							<span class="fott ftt">{{count3}}</span>
						</router-link>
						<router-link to='found' class="rout">
							<i class="iconfont icon-tuikuan" id="biao"></i>
							<span class="fott ftt">{{count4}}</span>
						</router-link>
				</div>
				<div id="selected">
					<p class="taa">{{ta1}}<i class="iconfont icon-jinru bttFan"></i></p>
					<p class="taa">{{ta2}}<i class="iconfont icon-jinru bttFan"></i></p>
					<p class="taa">{{ta3}}<i class="iconfont icon-jinru bttFan"></i></p>
					<p class="taa">{{ta4}}<i class="iconfont icon-jinru bttFan"></i></p>
				</div>
				<div class="box"><i>设置</i></div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    	login:"立即登录",
    	want1:"想看",
    	want2:"看过",
    	want3:"话题",
    	want4:"影评",
    	count1:"未消费",
    	count2:"待支付",
    	count3:"待评价",
    	count4:"待退款",
      ta1:"我的消息",
      ta2:"我的收藏",
      ta3:"会员中心",
      ta4:"我的成就",
      pack:"钱包",
      money:"余额"
    }
  },
  created(){
			var url1 = window.location.hash;			
			var str11 = url1.split("/");				
			var res = str11[2];
			this.login = decodeURIComponent(res);
	}
}
</script>

<style scoped>
a{
	text-decoration: none;
}
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
.router>span{
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
		height:1.2rem;
		display: flex;
		background: rgba(255,255,255,0.1);
		justify-content: space-around;
		align-items: center;
		border: 0.01rem solid;
		border-color:rgba(255,255,255,0.5) ;
		/*padding-bottom: 0.15rem;*/
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
#selected{
	margin-top: 0.5rem;
	height: 2.9rem;
	background: rgba(255,255,255,0.1);
	overflow: hidden;
	border: 0.01rem solid;
	border-color:rgba(255,255,255,0.5) ;
}
.taa{
	display: block;
	font-size: 0.3rem;
	border-bottom: 0.01rem solid #ccc;
	margin: 0.25rem 0.3rem;
	border-color:#bbbdc7;
	color:#fafafa;
}
.taa:last-child{
	border:0;
}
.bttFan{
	padding-left: 4.2rem;
	color:#bbbdc7;
}
.box{
	margin-top: 0.48rem;
	background: rgba(255,255,255,0.1);
	height:0.8rem;
	border: 0.01rem solid;
	border-color:rgba(255,255,255,0.5) ;
	color:#fafafa;
	font-size: 0.3rem;
	overflow: hidden;	
}
.box>i{
	display: block;
	font-style:normal;
	margin-left: 0.3rem;
	padding-top:0.22rem;
}
</style>
