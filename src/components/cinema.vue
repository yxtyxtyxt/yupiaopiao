<template>
	<!-- Single button -->
	<div class="btn-group">
		<button type="button" @click="cityList" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    城市
  </button>
		<div class="dropdown-menu" :style="{display:shows}">
			<ul>
				<li v-for="item in arr" class="list">
					<a href="#">{{item.city_name}}</a>
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
	import Vue from "vue"
	export default {
		name: 'cinema',
		data() {
			return {
				arr: "",
				shows: "",
				flag: "true"
			}
		},
		methods: {
			cityList() {
				if(this.flag) {
					this.shows = "block";
					this.flag = false
				} else {
					this.shows = "none";
					this.flag = true
				}
			}
		},
		created() {
			Vue.axios.get('../../../static/city.json').then((res) => {
				return res.data.result
			}).then((data) => {
				this.arr = data;
				this.arr.length = 20;
				//				this.arr.forEach((item) => {
				//					return item.city_name
				//				})
			})
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	ul,
	li,
	dl,
	dt,
	dd {
		list-style: none;
	}
	
	.btn-group {
		position: absolute;
		left: 0;
		top: 0;
	}
	.dropdown-menu{
		width: 100vw;
	}
	.dropdown-menu ul{
		margin: 0;
		display: flex;
		flex-direction:row;
	}
	
	.dropdown-menu li.list{
		width: 10vw;
		text-align: center;
		float: left;
	}
</style>