<template>
	<div id="app">
		<mt-header title="娱票票">
			<router-link to="/cinema" slot="left">
				<mt-button>北京</mt-button>
			</router-link>
			<mt-button icon="search" slot="right"></mt-button>
		</mt-header>
		<router-view></router-view>
		<footer id="fott" class="bar bar-tab">
			<router-link to='/' class="rout">
				<i class="iconfont icon-dianying"></i>
				<span class="tab-label">{{tab01}}</span>
			</router-link>
			<router-link to='/cinemaList' class="rout">
				<i class="iconfont icon-yingyuanb"></i>
				<span class="tab-label">{{tab02}}</span>
			</router-link>
			<router-link to='/user/foo/tab03' class="rout">
				<i class="iconfont icon-quanzi2-copy-copy-copy"></i>
				<span class="tab-label">{{tab03}}</span>
			</router-link>
			<router-link to='/user/foo/tab04' class="rout">
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
				tab04: '新闻'
			}
		}
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
	/*body{
	background-color:#1D202F!important;
	line-height: 0!important;
	}*/
	.mint-header{
		position: fixed;
		top:0;
		left:0;
		width:100%;
		z-index: 1000;
		background: #1D202f;
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
	#fott .rout {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}	
	#fott .rout>span {
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