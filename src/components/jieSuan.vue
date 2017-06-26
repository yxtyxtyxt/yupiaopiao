<template>
	<div>
		<mt-header title="">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>

		<div class="list-group bar">
			<h4 class="list-group-item-heading">{{objs.movieName}}</h4>
			<p>今天06-25 {{obj.time}} {{obj.language}}</p>
			<p北京那个呢阿达></p>
			<p>3排5座</p>
		</div>
		<div class="list-group">
			<li class="list-group-item">
				<p>参加活动</p>
				<mt-switch v-model="value"></mt-switch>
			</li>
			<li class="list-group-item">
				<p>票价总计</p>
				<div>
					<a>含服务费5元/张</a><span>{{obj.price}}元/张 共计2张 </span><span class="cols">{{obj.price*2}}元</span></div>
			</li>
			<li class="list-group-item">
				<p>电影代金券</p><b>0张</b>
			</li>
			<li class="list-group-item">
				<mt-button type="primary" size="large">立即付款</mt-button>
			</li>

		</div>
	</div>
</template>
<script>
	import Vue from "vue";
	export default {
		name: 'jieSuan',
		data() {
			return {
				name: '',
				obj:''
			}
		},
		methods: {
					
		},
		created(){
			this.obj=JSON.parse(localStorage.goupiao)
			this.objs=JSON.parse(localStorage.goupiaoarr)
			console.log(localStorage.goupiao)
		}

	}
</script>
<style scoped>
	.mint-header{
		z-index: 102;
		background: #1D202f;
	}
	.list-group-item .cols{
		color:red;
		font-size: 0.3rem;
	}
	.list-group.bar{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin:0.1rem 0;
	}
	.list-group.bar h4,p{
		margin: 0 0.3rem;
	}
	.list-group li {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.list-group-item div span {
		color: #000000;
	}
	
	.list-group li p {
		margin: 0;
		font-size: 0.3rem;
	}
	
	.list-group li .mint-switch {}
	
	.mint-switch {
		margin: 0;
	}
</style>