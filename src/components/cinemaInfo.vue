<template>
	<div id="top">
		<div id="zhePic"></div>
		<div id="bgPic"></div>
		<div class="rows">
			<h4 class="list-group-item-heading" id="drop">{{name}}</h4>
			<p class="list-group-item-text">地址:{{address}}</p>
			<p class="list-group-item-text">电话:<b>{{telephone}}</b></p>
		</div>
		<mt-swipe :auto="0" :show-indicators="false" class="swipes">
			<mt-swipe-item v-for="item in arr">
				<li class="imglist">
					<img :src="item.pic_url">
					<p>
						{{item.movieName}}
					</p>
				</li>
			</mt-swipe-item>
		</mt-swipe>
		<div class="playTimes" v-for="(item,i) in arr">
			<dl>
				<dd>次日播放</dd>
				<dd>
					<b>{{item.broadcast[1].time}}</b>
					<span>{{item.language}}
						<i>{{item.type}}</i>
					</span>
					<em>￥{{item.price}}</em>
				</dd>
				<dd>
					<b>时长：120分</b>
					<span>{{item.hall}}</span>
					<em>优惠</em>
				</dd>
			</dl>
			<a href="">购票</a>
		</div>
	</div>
</template>
<script>
	import Vue from "vue";
	export default {
		name: 'cinemaInfo',
		data() {
			return {
				name: '',
				address: '',
				telephone: '',
				arr: '',
			}
		},
		created() {
			Vue.axios.get('../../../static/yingpian.json').then((res) => {
				return res.data.result
			}).then((data) => {
				this.arr = data.lists;

				this.name = data.cinema_info.name;
				this.address = data.cinema_info.address;
				this.telephone = data.cinema_info.telephone;
			})
		}

	}
</script>

<style scoped>
	#app{
		overflow: hidden;
	}
	a {
		text-decoration: none;
	}
	#top{
		margin-top: 0.69rem;
	}

	#drop{
		padding-top: 0.3rem;
	}
	#zhePic{
		position: fixed;
		height:100%;
		width: 100%;
		background: rgba(0,0,0,0.5);
		z-index: -1;
	}
	#bgPic{
		position: fixed;
		height:100%;
		width: 100%;
		background: url(../../static/22.jpg) no-repeat;
		background-size: cover;
		z-index: -2;
	}
	.rows h4,p{
		margin: 0.1rem 0.4rem;
	}
	.rows h4{
		color: #EEEEEE;
	}
	.swipes {
		height: 4.5rem;
		margin: 0.2rem 0;
	}
	
	.imglist {
		text-align: center;
	}
	
	.playTimes {
		display: flex;
		justify-content: space-around;
		align-items: center;
		overflow: hidden;
		border-bottom: #666 solid 1px;
	}	
	.playTimes a {
		margin: 0;
		width: 1rem;
		height: 0.6rem;
		text-align: center;
		line-height: 0.6rem;
		background: #FFCB16;
		color: #1D202F;
	}
	
	.playTimes dl {
		margin: 0.2rem 0;
	}
	
	.playTimes dl dd {
		width: 4.5rem;
		display: flex;
		justify-content: space-between;
	}
	
	.col-md-4 img {
		width: 5rem;
		height: 5rem;
	}
	
	h4,
	p {
		color: #F0AD4E;
	}
	
	.col-md-8 {
		display: inline-block;
	}
	
	.col-md-4 {
		display: inline-block;
	}
	dd{
		color:#fafafa;
	}
</style>