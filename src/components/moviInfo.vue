<template>
	<div class="moviInfo">
		<div id="opa"></div>
		<div id="bgpic"></div>

		<div id="bg_pic">
			<div id="zhe">
				<div class="left">
					<img :src="arr[num].result.poster" />
					<span></span>
				</div>
				<div class="right">
					<ul>
						<li>{{arr[num].result.title}}</li>
						<li>{{arr[num].result.genres}}</li>
						<li>{{arr[num].result.country}} | {{arr[num].result.rating_count}}分钟</li>
						<li>上映时间：{{arr[num].result.release_date}}</li>
					</ul>
				</div>
			</div>
		</div>
		<div id="btns">
			<mt-button type="primary" id="btn" @click="addColor($event)">喜欢</mt-button>
			<mt-button type="primary" id="btn" @click="addColor($event)">评论</mt-button>
		</div>
		<div id="centers">
			<p>{{arr[num].result.plot_simple}}</p>
		</div>
		<div id="tui">更多推荐：</div>
		<div class="mg50">
			<ul>
				<li v-for="(item,index) in arr" @click="taberNum(index)">
					<router-link :to="{ name:'MoviInfo', params:{id:'id=' +item.result.movieid}}">
						<p><img :src="item.result.poster" id="images"></p>
						<p id="word">{{item.result.title}}</p>
					</router-link>
					<div id="tui"><router-link to="/cinemaList">购票</router-link> </div>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	import Vue from "vue"
	var flag =true
	export default {
		name: 'moviInfo',
		data() {
			return {
				arr:'',
				num:'0'
			}
		},
		methods:{
			taberNum(index){
				this.num=index;
				document.body.scrollTop = 0;
			},
			addColor(event){
		  		if(flag){
		  			event.currentTarget.style.background = "red";
		  			flag = false;
		  		}else{
		  			event.currentTarget.style.background = "";
		  			flag = true;
		  		}
	 	 	}
		},
		created() {
			//	var url1 = window.location.hash;			
			//			var str11 = url1.split("/");				
			//			var res = str11[2].split("=");
			//			var id = res[1];
			//			Vue.axios.get('/movie/query?movieid='+id+'&dtype=&key=8a1d4466590e5546e5503d1e8c56bd27').then((res) => {
			Vue.axios.get('../../static/info.json').then((res) => {
				return res.data
			}).then((data) => {
				this.arr = data;
			})
		}
	}
</script>

<style scoped>
	html {
		height: 100%;
	}
	
	.moviInfo {
		margin: 0.65rem 0;
	}
	
	#bg_pic {
		overflow: hidden;
		background-size: cover;
		height: 3.5rem;
		width: 100%;
		text-align: center;
	}
	
	#zhe {
		overflow: hidden;
		height: 3.5rem;
		width: 100%;
		text-align: center;
	}
	
	.left {
		width: 50%;
		height: 3.5rem;
		float: left;
	}
	
	.left>img {
		display: inline-block;
		width: 2rem;
		height: 3.2rem;
		vertical-align: middle;
		padding-top: 0.18rem
	}
	
	.right {
		width: 50%;
		height: 3.5rem;
		float: right;
	}
	
	.right>ul {
		font-size: 0.26rem;
		color: #fff;
		text-align: left;
		margin-top: 0.8rem;
		line-height: 0.5rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.mg50 #word{
		color: #fafafa;
		font-size: 0.3rem;
	}
	#btns {
		height: 1.2rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	#btns>#btn {
		width: 2.5rem;
		height: 0.6rem;
		font-size: 0.25rem;
		background: #41465a;
		opacity: 0.8;
		color: #fff;
		text-align: center;
		line-height: 0.6rem;
	}
	
	#centers {
		height: 2.8rem;
		width: 86%;
		margin-left: 0.38rem;
	}
	
	#centers p {
		font-size: 0.26rem;
		line-height: 0.5rem;
		color: #fafafa;
	}
	
	.mg50 {
		overflow: hidden;
	}
	
	.mg50 ul li img {
		width: 90%;
	}
	
	.mg50 ul li img {
		margin: 0 0.1rem 0.2rem;
	}
	
	.mg50 ul {
		list-style: none;
		display: flex;
		flex-flow: row wrap;
	}
	
	.mg50 ul li {
		display: flex;
		flex-direction: column;
		width: 50%;
		align-items: center;
		text-align: center;
	}
	#tui {
		width: 1.8rem;
		height: 0.5rem;
		background: #ffcb16;
		font-size: 0.25rem;
		color: #000;
		font-weight: 900;
		border-radius: 15px;
		text-align: center;
		line-height: 0.5rem;
		margin-bottom: 0.15rem;
		margin-left: 0.2rem;
	}
	
	#bgpic {
		background: url(../../static/1.jpg) no-repeat;
		background-size: cover;
		position: fixed;
		z-index: -2;
		width: 100%;
		height: 100%;
	}
	
	#opa {
		background: rgba(0, 0, 0, 0.3);
		position: fixed;
		z-index: -1;
		width: 100%;
		height: 100%;
	}
</style>