<template>
  <div id="app">
      <mt-header title="娱票票">
			  <router-link to="/" slot="left">
			    <mt-button>北京</mt-button>
			  </router-link>
			  <mt-button icon="search" slot="right"></mt-button>
			</mt-header>
			<footer id="fott">
  			<div class="fbox">
  				<a class="iconfont icon-dianying"></a>
  				<i>热映</i>
  			</div>
  			<div class="fbox">
  				<a class="iconfont icon-yingyuanb"></a>
  				<i>影院</i>
  			</div>
  			<div class="fbox">
  				<a  class="iconfont icon-quanzi2-copy-copy-copy"></a>
  				<i>圈子</i>
  			</div>
  			<div class="fbox">
  				<a href="index" class="iconfont icon-wode"></a>
  				<i>新闻</i>
  			</div>
        </footer>

  </div>
</template>

<script>
export default {
  name: 'comment'
}
</script>
<style>
	*{
		margin:0;
		padding:0;
	}
	html{
		font-size: 15.625vw;
	}
	ul,ol,li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	#fott{
	width:100%;
	height:0.82rem;
	background: #26a2ff;
	display: flex;
	justify-content: space-around;
	position:fixed;
	left:0;
	bottom:0;
	}
	#fott .fbox{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;	
	}
	#fott .fbox>i{
		font-style: normal;
		color: #fff;
		font-size: 0.25rem;
		margin-top: 0.04rem;
	}
	.iconfont{
		color: #fff;
		font-size: 0.35rem!important;
		margin-top: 0.02rem;
	}
</style>
