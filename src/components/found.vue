<template>
	<div>
		<div id="found"></div>
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
			<router-link to='/search' class="rout">
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
						<p>
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
  		this.arr=data;
  	})
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#found{
		width:100%;
		height:100%;
		background: url("../../static/bg.png") no-repeat;
		background-size: cover;
		position: fixed;
		top:0;
		left:0;
		z-index: -1;
	}
	/*.mint-search{
		margin-top: 0.8rem;
   		height: 1.3rem;
		margin-bottom: 0.5rem;
	}*/
	.rout{
		width:25%;
		height:5vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.tab-label{
		margin-top:0.4rem;
		color:#fff;
	}
	#Top{
		display: flex;
		flex-flow: row;
		align-content: space-around;
		border-bottom: 2px solid #000;
		padding-bottom: 0.2rem;
		margin-top:1.4rem;
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
		width:1.8rem;
		height:1.3rem;
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
		font-size:0.05rem;
		line-height: 0.3rem;
		color:#f0f0f0;
		margin-left:0.1rem;
	}
	#see{
		display: block;
		color:orange;
		font-size: 0.05rem!important;
	}
</style>
