<template>
	<div>
		<div class="list-group">
			<a class="list-group-item" v-for="item in arr">
				<router-link :to="{ name:'cinemaInfo', params:{id:item.id} }">
					<h4 class="list-group-item-heading">{{item.cinemaName}}</h4>
					<p class="list-group-item-text">地址:{{item.address}}</p>
					<p class="list-group-item-text">电话:<b>{{item.telephone}}</b></p>
				</router-link>
			</a>
		</div>
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
				console.log(res.data.result.data)
				return res.data.result.data
			}).then((data) => {
				this.arr = data
			})
		}
	}
</script>

<style>
	.list-group-item-text {
		color: #ACACB4;
	}
	a{text-decoration: none;}
</style>