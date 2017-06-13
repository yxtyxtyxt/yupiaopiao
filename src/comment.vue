<template>
	<div id="app">
		<mt-header title="娱票票">
			<router-link to="/" slot="left">
				<mt-button>北京</mt-button>
			</router-link>
			<mt-button icon="search" slot="right"></mt-button>
		</mt-header>
		<router-view></router-view>
		<footer id="fott" class="bar bar-tab">
			<router-link to='/user/foo' class="rout">
				<i class="iconfont icon-dianying"></i>
				<span class="tab-label">{{tab01}}</span>
			</router-link>
			<router-link to='/user/foo/tab02' class="rout">
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
	ul,ol,li {
		list-style: none;
	}
	
	a{
		text-decoration: none;
	}	
	#fott {
		width: 100%;
		height: 0.8rem;
		background: #26a2ff;
		display: flex;
		justify-content: space-around;
		position: fixed;
		left: 0;
		bottom: 0;
	}	
	#fott .rout {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}	
	#fott .rout>span {
		font-style: normal;
		color: #fff;
		font-size: 0.25rem;
		margin-top: 0.04rem;
	}	
	.iconfont {
		color: #fff;
		font-size: 0.35rem!important;
		margin-top: 0.02rem;
	}
</style>