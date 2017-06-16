<template>
	<div id="boss">
		<div id="found">			
		</div>
		<!--<mt-search id="Sear"></mt-search>-->
		<div id="Top">
			<router-link to='/' class="rout">
				<i class="iconfont icon-huo" id="huo"></i>
				<span class="tab-label">今日TOP</span>
			</router-link>
			<router-link to='/cinemaList' class="rout">
				<i class="iconfont icon-zixun-copy" id="copy"></i>
				<span class="tab-label">影视资讯</span>
			</router-link>
			<router-link to='/' class="rout">
				<i class="iconfont icon-shangcheng" id="shangcheng"></i>
				<span class="tab-label">搜索周边</span>
			</router-link>
			<router-link to='/cinemaList' class="rout">
				<i class="iconfont icon-piaowuguanlihover" id="piaowuguanlihover"></i>
				<span class="tab-label">实时票房</span>
			</router-link>
		</div>
		<div>
			<ul>
				<li v-for="item in arr">
					<router-link :to="{ name:'MoviInfo', params:{id:item.movieId}}">
					    <p><img :src="item.pic_url" id="images"></p>
						<p class="left4">
							{{item.actors}}
							<i class="iconfont icon-liulan" id="see">150</i>
						</p>
						
				   </router-link>
				</li>
			</ul>
		</div>
	</div>

</template>
<script>
import Vue from 'vue'
export default {
  name: 'found',
  data(){
  	return{
  		arr:""
  	}
  },
  created(){
  	Vue.axios.get("../../static/jinreshangying.json").then((res)=>{
  		//console.log(res);
  		return res.data.result;
  	}).then((data)=>{
  		this.arr=data.slice(0,20);
  	})
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	a{
		text-decoration: none;
	}
	#boss{
		height:100%;
		overflow: hidden;
	}
	#found{
		width:100%;
		height:100%;
		background: url("../../static/bg.png") no-repeat;
		background-size:cover;
		position: fixed;
		z-index: -1;
	}
	.rout{
		width:25%;
		height:5vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.tab-label{
		color:#fff;
		margin-bottom: 0.3rem;
	}
	#Top{
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 2px solid #000;
		padding-bottom: 0.2rem;
		margin-top:1.1rem;
	}
	#huo{
		color:orange;
		font-size: 0.5rem!important;
	}
	#copy{
		color:skyblue;
		font-size: 0.5rem!important;
	}
	#shangcheng{
		color:yellow;
		font-size: 0.5rem!important;
	}
	#piaowuguanlihover{
		color:darkred;
		font-size: 0.5rem!important;
	}
	#images{
		width:2rem;
		height:2.5rem;
		display: inline-block;
	}
	li{
		border-bottom: 1px solid #999;
		padding:0.2rem;
		
	}
	li a{
		display: flex;
		flex-direction: row;
		align-content: center;
	}
	li a p{
		font-size: 0.24rem;
		line-height: 0.45rem;
		color:#f0f0f0;
		margin-left:0.1rem;
	}
	#see{
		display: block;
		color:orange;
		font-size: 0.26rem!important;
	}
	.left4{
		padding-left:0.3rem;
	}
</style>
