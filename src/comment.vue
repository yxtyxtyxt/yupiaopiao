<template>
	<div id="app">
		<header id="heade">
			<router-link to='/cinema' class="hhe">
				<i class="btnn">北京</i>
			</router-link>
			<span>娱票票</span>
			<router-link to='/cinemaList' class="hhe">
				<i class="iconfont icon-piaowuguanlihover"></i>
			</router-link>
		</header>
		<router-view></router-view>
		<footer id="fott" class="bar bar-tab">	
			<router-link to='/' class="rout" >
				<i class="iconfont icon-dianying"></i>
				<span class="tab-label" >{{tab01}}</span>
			</router-link>
			<router-link to='/cinemaList' class="rout">
				<i class="iconfont icon-yingyuanb"></i>
				<span class="tab-label">{{tab02}}</span>
			</router-link>
			<router-link to='/found' class="rout">
				<i class="iconfont icon-quanzi2-copy-copy-copy"></i>
				<span class="tab-label">{{tab03}}</span>
			</router-link>
			<router-link to='/login' class="rout">
				<i class="iconfont icon-wode"></i>
				<span class="tab-label">{{tab04}}</span>
			</router-link>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'comment',
		data() {
			return {
				tab01: '热映',
				tab02: '影院',
				tab03: '圈子',
				tab04: '我的'
			}
		}
//		methods:{
//			addEvent(event){
//				event.currentTarget.style.color = "red";
//			}
//		}
	}
</script>
<style>
	* {
		margin: 0;
		padding: 0;
	}	
	html {
		font-size: 15.625vw;
	}
	#heade{
		position: fixed;
		top:0;
		left:0;
		width:100%;
		z-index: 100;
		background: #1D202f;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height:0.68rem;
	}
	#heade>span{
		color:#fff;
		font-size: 0.3rem;
	}	
	.hhe>.btnn{
		border:0;
		background: none;
		font-size: 0.25rem;
		color:#ccc;
		margin-left:-0.38rem;
		font-style:normal;
	}
	ul,ol,li {
		list-style: none;
	}	
	a{
		text-decoration: none;
	}	
	#fott {
		width: 100%;
		height: 0.68rem;
		background: #1D202f;
		display: flex;
		justify-content: space-around;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 10;
	}
	
	.rout {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}	
	span {
		display: block;
		font-style: normal;
		color: #fff;
		font-size: 0.22rem;
	}	
	.iconfont {
		color: #fff;
		font-size: 0.32rem!important;
		margin-top: 0.03rem;
	}
</style>