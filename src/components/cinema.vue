<template>
	<div id="cin">
		<div id="haha"></div>
		<div id="pp"></div>
		<div></div>
		<div class="col-lg-6">
			<div class="input-group">
				<input type="text" class="form-control" placeholder="Search for...">
				<span class="input-group-btn">
		        <button class="btn btn-default" type="button">Go!</button>
		      	</span>
			</div>
		</div>
		<div>
			<span class="list-group-item active change">当前选择：<b class="bsto">{{city_name}}</b></span>
			<span class="list-group-item active">热门城市</span>
			<ul class="cityList">
				<li v-for="item in arr1" class="list">
					<a @click="cityName($event)">{{item.city_name}}</a>
				</li>
			</ul>
			<div class="list-group">
				<li class="list-group-item active">
					城市选择
				</li>
				<router-link :to="{ name:'cinemaList', params:{id:item.id} }"  class="list-group-item" v-for="(item,index) in arr2" @click="cityName($event)">{{item.city_name}}</router-link>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import Vue from "vue"
	export default {
		name: 'cinema',
		data() {
			return {
				arr1: "",
				arr2: "",
				shows: "",
				city_name:'北京'
			}
		},
		methods: {
			cityName(event){
				this.city_name=event.currentTarget.innerText;
			},
		},
		created() {
			Vue.axios.get('../../../static/city.json').then((res) => {
				return res.data.result
			}).then((data) => {
				this.arr1 = data;
				this.arr1 = this.arr1.slice(0, 20);
				this.arr2 = data;
				this.arr2 = this.arr2.slice(0, 60);
			})
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}	
	a{
		text-decoration: none !important;
	}	
	ul,li,dl,dt,dd {
		list-style: none;
	}
	.list-group-item.active.change{
		margin-bottom: 0.4rem;
	}
	.list-group-item.active.change b{
		background: none;
	}
	#cin{
		margin-top:0.69rem;
	}
	#haha{
		position: fixed;
		height:100%;
		width: 100%;
		background: rgba(0,0,0,0.3);
		z-index: -1;
	}
	#pp{
		background: url(../../static/8.jpg) no-repeat;
		position: fixed;
		height:100%;
		width: 100%;
		background-size: cover;
	}
	.bsto{
		color:#000;
	}
	.dList dd a {
		display: block;
		padding: 0.2rem 0.3rem;
	}
	.list-group-item{
		background: none;
	}
	.dList dd a:hover {
		background: rgba(121, 142, 31, .3);
	}	
	.col-lg-6 {
		margin: 0.3rem 0 0.3rem 0;
	}	
	.list-group-item.active {
		background: #ffcb16;
		border-color: #242424;
	}
	a.list-group-item:hover{
		background: #2C3E50;
		background: rgba(11, 112, 121, .3);
	}
	.cityList {
		width: 100vw;
		display: flex;
		flex-flow: wrap;
		justify-content: flex-start;
		z-index: 5;
	}	
	.cityList li a {
		text-decoration: none;
		width: 2rem;
		padding: 0.1rem 0;
		text-align: center;
		display: block;
		position:relative;
		z-index: 6;
		color:#fff;
		font-size: 0.26rem;
	}	
	.cityList li a:hover {
		background: rgba(11, 112, 121, .3);
	}
	a.list-group-item, button.list-group-item{
		color:deepskyblue;
	}
</style>