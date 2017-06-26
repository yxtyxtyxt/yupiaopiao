<template>
	<div id="clist">
		<div id="shitu"></div>
		<div id="picc"></div>		
		<ul class="list-group">
			<li class="list-group-item" v-for="item in arr">
				<router-link :to="{ name:'cinemaInfo', params:{id:'id='+item.id} }">
						<h4 class="list-group-item-heading">{{item.cinemaName}}<span>19.9元起</span></h4>
					<p class="list-group-item-text">地址:{{item.address}}</p>
					<p class="list-group-item-text">电话:<b>{{item.telephone}}</b></p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from "vue";
	export default {
		name: 'cinemaList',
		data() {
			return {
				arr: ""
			}
		},
		methods: {
			cinemaList() {

			}
		},
		created() {
			Vue.axios.get('../../../static/yingyuan.json').then((res) => {
				return res.data.result.data
			}).then((data) => {
				this.arr = data
			})
			var urlId=window.location.href
			//console.log(urlId)
		}
	}
</script>

<style scoped>
	#clist{
		margin-top:0.67rem;
	}
	#shitu{
		position:fixed;
		height:100%;
		width: 100%;
		background: rgba(0,0,0,0.7);
		z-index: 2;
	}
	#picc{
		position:fixed;
		height:100%;
		width: 100%;
		background: url(../../static/7.jpg) no-repeat;
		background-size: cover;
		z-index: 1;
	}
	.list-group h4 {
		color: #F3F3F3;
	}
	.list-group p,h4,span,b{
		background: none;
	}
	.list-group .list-group-item{
		border: none;
		border-bottom: 1px solid #666666;
	}
	h4 span{
		font-size: 0.25rem;
		margin-left: 0.1rem;
		color: #FFFF00;
	}
	.list-group-item-text {
		color: #bbb;
	}
	a{
		text-decoration: none !important;
	}
	.list-group-item{
		background: none;
		z-index: 5;
	}
</style>