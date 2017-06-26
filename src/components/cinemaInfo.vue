<template>
	<div id="top">
		<div id="zhePic"></div>
		<div id="bgPic"></div>
		<div class="rows">
			<h4 class="list-group-item-heading">{{name}}</h4>
			<p class="list-group-item-text">地址:{{address}}</p>
			<p class="list-group-item-text">电话:<b>{{telephone}}</b></p>
		</div>
		<mt-swipe :auto="0" :show-indicators="false" class="swipes">
			<mt-swipe-item v-for="(item,index) in arr">
				<li class="imglist" @touchmove="next(index)">
					<img :src="item.pic_url">
					<p>
						{{item.movieName}}
					</p>
				</li>
			</mt-swipe-item>
		</mt-swipe>
		<!--
		<div class="swiper-container">
			<div class="swiper-wrapper">
				 <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
			</div>
			<div class="swiper-pagination swiper-pagination-white"></div>
		</div>-->

		<div class="content">
			<div class="playTimeAll" v-show="ok">
				<div class="playTimes" v-for="item in arr[ok].broadcast">
					<dl>
						<dd class="play">次日播放</dd>
						<dd>
							<b class="time">{{item.time}}</b>
							<span>{{item.language}}
						<i>{{item.type}}</i>
					</span>
							<em :style="{color:color2}">￥{{item.price}}</em>
						</dd>
						<dd>
							<b :style="{color:color1}">时长：120分</b>
							<span :style="{color:color1}">{{item.hall}}</span>
							<em :style="{color:color1}" >优惠</em>
						</dd>
					</dl>
					<router-link to="/jiesuan" ><span @click='goupiao(item,arr[ok])'>购票</span></router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from "vue";
	export default {
		props: ['listImg'],
		name: 'cinemaInfo',
		data() {
			return {
				name: '',
				address: '',
				telephone: '',
				arr: '',
				ok: '0',
				color1: '#abc',
				color2: '#F0AD4E',
				flag: 'true'
			}
		},
		methods: {
			next(index) {
				this.ok = index+1
				console.log(index)
			},
			goupiao(item,items){
				localStorage.goupiao=JSON.stringify(item)
				localStorage.goupiaoarr=JSON.stringify(items)
			}
		},
		created() {
			Vue.axios.get('../../../static/yingpian.json').then((res) => {
				return res.data.result
			}).then((data) => {
				this.arr = data.lists
				this.name = data.cinema_info.name;
				this.address = data.cinema_info.address;
				this.telephone = data.cinema_info.telephone;
			})
		}
	}
</script>

<style scoped>
	#app {
		overflow: hidden;
	}
	
	#top {
		margin-top: 0.68rem;
	}
	span{
		font-size: 0.3rem;
	}
	#zhePic {
		position: fixed;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: -1;
	}
	#bgPic {
		position: fixed;
		height: 100%;
		width: 100%;
		background: url(../../static/22.jpg) no-repeat;
		background-size: cover;
		z-index: -2;
	}
	
	.divAuto {
		overflow: auto;
	}
	
	a {
		text-decoration: none;
	}
	
	.rows h4,
	p {
		margin: 0.1rem 0.4rem;
	}
	
	h4.list-group-item-heading {
		padding-top: 0.3rem
	}
	
	.rows h4 {
		color: #EEEEEE;
	}
	
	.swipes {
		height: 4.5rem;
		margin: 0.2rem 0;
	}
	
	.imglist {
		text-align: center;
	}
	
	.content {
		position: relative;
		overflow: hidden;
		min-height: 80vh;
		z-index: 10;
	}
	
	.playTimeAll {
		position: absolute;
		overflow: hidden;
		width: 100%;
		left: 0;
		top: 0;
		z-index: -1;
	}
	
	.playTimes {
		display: flex;
		justify-content: space-around;
		align-items: center;
		overflow: hidden;
		border-bottom: #555555 solid 1px;
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
	
	.playTimes dl dd b.time {
		color: #F0AD4E;
	}
	
	.playTimes dl dd.play {
		color: #F3F3F3;
		font-size: 0.2rem;
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
	
	body {
		color: #aba!important;
	}
</style>