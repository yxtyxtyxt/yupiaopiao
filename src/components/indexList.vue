<template>
  <div class="list">
    <mt-swipe :auto="4000">
			<mt-swipe-item><router-link :to="{ name:'MoviInfo', params:{id:'id='+1}}"><img src="http://pic2.orsoon.com/2017/0609/20170609113930108.jpg"></router-link></mt-swipe-item>
			<mt-swipe-item><router-link :to="{ name:'MoviInfo', params:{id:'id='+2}}"><img src="http://img.tulaoshi.com/image/20150520/1bf93c8afc4e81ffc49bd2b4313381b4.jpg"></router-link></mt-swipe-item>
			<mt-swipe-item><router-link :to="{ name:'MoviInfo', params:{id:'id='+3}}"><img src="http://www.hanhande.com/upload/170529/4182606_160233_1.jpg"></router-link></mt-swipe-item>

		</mt-swipe>

	<div>
		<mt-tab-container>
			<mt-tab-container-item id="tab-container1">
				<ul>
					<li v-for="item in spliceStr">
							<router-link :to="{ name:'MoviInfo', params:{id:'id=' +item.movieId}}">
				    		<p><img :src="item.pic_url" id="images"></p>
						  	<p id="word">{{item.movieName}}</p>
			    	</router-link>
				  	<div id="tui"><router-link to="/cinemaList">购票</router-link></div>
					</li>
				</ul>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
  </div>
</template>
<script>
//import jsonp from 'jsonp';
import Vue from 'vue'
export default {
  name: 'indexList',
  data () {
    return {
      arr:""
    }
  },
created(){
	Vue.axios.get("../../static/jinreshangying.json").then((res) => {
		  return res.data.result
		}).then((data)=>{
			 return this.arr = data.slice(0,12);
			 //console.log(this.arr)
		})
	},
	computed:{//缩略图
		spliceStr:function(){
				//console.log(this);
				this.arr=Array.prototype.slice.call(this.arr);
				//console.log(this.arr)
				return this.arr.map(item=>{
					if(item.movieName.length<5){
						return item
					}else{
						item.movieName=item.movieName.substring(0,5)+"...";
				return item;
					}
				
			})
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	margin:0;
	padding:0;
}
#tab-container1{
	display: flex;
	flex-flow: column;
}
ul {
  list-style: none;
  display: flex;
  flex-flow: row wrap;
}
li {
	display: flex;
	flex-direction: column;
  height:33vh;
  width:33%;
  align-items: center;
  text-align: center;
}
a {
  color: #242a27;
  text-decoration: none;
}
.list{
	margin-bottom: 0.4rem;
}
#tui{
	width: 1rem;
	height:0.35rem;
	background: #ffcb16;
	font-size: 0.25rem;
	color:#000;
	font-weight: 900;
	border-radius: 15px;
	text-align: center;
	line-height: 0.35rem;
	margin-bottom:0.15rem;
	margin-left:0.2rem;
}
#word{
	font-size: 0.25rem;
  color: #666;
  font-family:"新宋体";
  font-weight: bold;
  margin-bottom: 0.2rem;
  margin-top:0.2rem;
}
#images{
	width:29vw;
	padding-left:0.13rem;
}
.mint-swipe{
	margin-top: 0.65rem;
	margin-bottom:0.2rem;
}
.mint-tab-container-item{
	display: block!important;
}
.mint-cell-wrapper{
	flex-flow: column wrap!important;
}
.mint-swipe{
	height:30vh;
}
.mint-swipe-item img{
	height:30vh;
	width:100%;
}
</style>
