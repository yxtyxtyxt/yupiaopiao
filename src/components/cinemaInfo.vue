<template>
	<div>
		<div class="row">
			<h4 class="list-group-item-heading">{{name}}</h4>
			<p class="list-group-item-text">地址:{{address}}</p>
			<p class="list-group-item-text">电话:<b>{{telephone}}</b></p>
		</div>
		<mt-swipe :show-indicators="false">
			<mt-swipe-item>1</mt-swipe-item>
			<mt-swipe-item>2</mt-swipe-item>
			<mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
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
				telephone: ''
			}
		},
		created() {
			Vue.axios.get('../../../static/yingpian.json').then((res) => {
				return res.data.result.cinema_info
			}).then((data) => {
				this.arr = data;
				this.name = data.name;
				this.address = data.address;
				this.telephone = data.telephone;

			})
		}

	}
</script>

<style scoped>
	.col-md-4 img {
		width: 5rem;
		height: 5rem;
	}
	
	.col-md-8 {
		display: inline-block;
	}
	
	.col-md-4 {
		display: inline-block;
	}
</style>