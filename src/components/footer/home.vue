<template>
	<section id="index" v-cloak>
		<div class="head">
			<form action="">
				<input type="text" placeholder="熊本熊" v-model="search"/>
				<router-link to="/home">
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-search_icon"></use>
					</svg>
				</router-link>
			</form>
			<router-link to="/login">
				<span>···</span>
				<sup></sup>
			</router-link>
		</div>
		
		<!--轮播图-->
		<mt-swipe :auto="4000" >
			<mt-swipe-item><router-link to="/my"><img src="../../assets/img/home_swipe1.jpg" alt="" /></router-link></mt-swipe-item>
			<mt-swipe-item><router-link to="/my"><img src="../../assets/img/home_swipe2.jpg" alt="" /></router-link></mt-swipe-item>
			<mt-swipe-item><router-link to="/my"><img src="../../assets/img/home_swipe3.jpg" alt="" /></router-link></mt-swipe-item>
			<mt-swipe-item><router-link to="/my"><img src="../../assets/img/home_swipe4.jpg" alt="" /></router-link></mt-swipe-item>
			<mt-swipe-item><router-link to="/my"><img src="../../assets/img/home_swipe5.jpg" alt="" /></router-link></mt-swipe-item>
		</mt-swipe>
		
		<nav class="nav">
			<router-link to="/login"><img src="../../assets/img/home_nav0.jpg" alt="" /></router-link>
			<ul>
				<li v-for="(v,i) in navList">
					<router-link to="/new_region">
						<img :src="v.image" alt="" />
						<span>{{v.title}}</span>
					</router-link>
				</li>
			</ul>
		</nav>
		
		<!--专区介绍-->
		<h3>日式免烫 全新上线</h3>
		<main v-for="(v,i) in regionList">
			<div>
				<router-link to="/my"><img :src="v.image1" alt="" /></router-link>
				<span></span>
			</div>
			<ul>
				<li v-for="(m,n) in v.detailsList" >
					<router-link to="/my">
						<img :src="m.src" alt="" />
						<p>{{m.name1}}</p>
						<p>售价：&yen;{{m.original}}</p>
						<p>充值相当于：<span>&yen;{{m.ruling}}</span></p>
					</router-link>
				</li>
				<li class="more">
					<router-link to="/classify">
						<span>查看更多</span>
						<span>View More</span>
						<p>&gt;</p>
					</router-link>
				</li>
			</ul>
		</main>
		
		<!--底部-->
		<footer>
			<div class="more">
				<router-link to="/classify"><img class="more1" src="../../assets/img/home_footer1.jpg" alt="" /></router-link>
				<a @click="top()"><img class="top" src="../../assets/img/home_footer2.jpg" alt="" /></a>
			</div>
			<div class="register">
				<router-link to="/login"><span class="login">登陆</span></router-link>
				&nbsp;&nbsp;
				<router-link to="/sign"><span class="sign">注册</span></router-link>
			</div>	
		<div class="help">
			<ul>
				<li><router-link to="/home"><img src="../../assets/img/home_footer3.jpg"/></router-link></li>
				<li><router-link to="/home"><img src="../../assets/img/home_footer4.jpg"/></router-link></li>
				<li><router-link to="/home"><img src="../../assets/img/home_footer5.jpg"/></router-link></li>
				<li><router-link to="/home"><img src="../../assets/img/home_footer6.jpg"/></router-link></li>
			</ul>
			<h3>京ICP证100557号</h3>
		</div>
		</footer>	
	</section>
</template>

<script>
	import homeData from '../../../data/home.json'
	export default{
		data(){
			return {
				search:'',
				navList:[
					{image:require("../../assets/img/home_nav1.jpg"),title:"新品"},
					{image:require("../../assets/img/home_nav2.jpg"),title:"频道"},
					{image:require("../../assets/img/home_nav3.jpg"),title:"衬衫"},
					{image:require("../../assets/img/home_nav4.jpg"),title:"帆布鞋"},
					{image:require("../../assets/img/home_nav5.jpg"),title:"V团"}
				],
				regionList:[],
			}		
		},
		 
		mounted(){
			this.image1=homeData.image1;
			this.regionList=homeData.regionList;
			this.detailsList=homeData.detailsList
		},
		methods:{
			top(){
				window.scrollTo(0,0)
			}
		}
	}
</script>

<style>
	[v-cloak]{
		display: none;
	}
	#index{
		width: 100%;
		background: #fafafa;
	}
	#index .head{
		width: 100%;
		height: 4rem;
		background: rgba(209, 207, 207,0.4);
		position: fixed;/*固定定位后居中问题*/
		left: 50%;
	    top: 0;
	    -webkit-transform: translate(-50%,0);
	    -moz- transform: translate(-50%,0);
	    transform: translate(-50%,0); 
	    max-width: 640px;
		line-height: 60px;
		z-index: 999;
	}
	#index form{
		width: 80%;
		height: 60%;
		background-color: #fff;
	    border: 1px solid #aaaaaa;
	    border-radius: 3rem;
	    overflow: hidden;
	    position: absolute;
	    left: 2.5%;
    	top: 0.8rem;
	}
	#index input{
	    position: absolute;
	    left: 3.3rem;
	    top: 10%;
	    width: 85%;
	    height: 85%;
	    display: inline-block;
	    border: 0 none;
	    outline: none;
	    vertical-align: middle;
	}
	#index .icon{
		width: 1.54rem;
	    height: 1.54rem;
	    position: absolute;
	    left: 13px;
	    top: 7px;
	}
	#index>.head span{
		width: 25px;
		height: 20px;
		border: 1px solid #999;
		border-radius: 8px;
		text-align: center;
		font-weight: bold;
		color: #999;
		position: absolute;
		right: 2.5%;
		top: 20px;
		font-size: 0.84rem;
		line-height: 20px;
	}
	#index sup{
		width: 5px;
		height: 5px;
		background:#999;
		border-radius: 50%;
		position: absolute;
		right: 2%;
		top: 20px;
	}
	
	/*轮播图*/
	#index .mint-swipe-items-wrap{
		padding-bottom: 62.8%;
		height: 0px;
	}
	#index img{
		width: 100%;
	}
	#index .mint-swipe-indicators>.is-active{
		opacity: 1;
		background: #FF0000;
	}
	
	
	#index .nav{
		width: 100%;
		text-align: center;
		padding-top: 15px;
		padding-bottom: 15px;
		background: #FFFFFF;
	}
	#index .nav>img{
		width: 95%;
	}
	#index .nav ul{
		display: flex;
		text-align: center;
		width: 100%;
		margin-top: 15px;
	}
	#index .nav li{
		flex: 1;
	}
	#index .nav ul img{
		width: 3.5rem;
		height: 3.5rem;
	}
	#index .nav ul a{
		color: #999;
		text-decoration: none;
		font-size: 1.17rem;
	}
	#index .nav ul span{
		margin-top: 5px;
		display: block;
	}
	#index>h3{
		background: url(../../assets/img/home_hot.jpg) no-repeat 2.5% center;
	    font-size: 1.3rem;
	    padding:15px 11%;
	}
	
	/*专区介绍*/
	#index main{
		width: 100%;
		overflow-x: hidden;
	}
	#index main>div{
		margin-bottom: -3px;
		position: relative;
	}
	#index main>div span{
		position: absolute;
		bottom: 3px;
		left: 2.5%;
		width: 0px;
		height: 0px;
		border-left: 18px solid transparent;
		border-right: 18px solid transparent;
		border-bottom: 22px solid #ffffff;
	}
	#index main ul{
		white-space: nowrap;
		margin: 2.5%;
		/*height: 100%;*/
		overflow-x: scroll;/*超出部分滚动条，或者overflow:auto;*/
		-webkit-overflow-scrolling: touch;/*解决ios上滑动不流畅*/
	}
	/*隐藏滚动条*/
	#index main ul::-webkit-scrollbar {
        display: none;
    }
	#index main li{
		display: inline-block;
		width: 33.4%;
		margin-right: 8px;
		height: 100%;
		vertical-align: middle;
		height: 90%;
	}
	#index main li a{
		text-decoration: none;
	}
	#index main li p{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 8px 0;
	}
	#index main .mt-swipe-item{
		width: 33.4%;
	}
	#index main li p:nth-of-type(1){
		color: #565656;
		font-size: 1.2rem;
	}
	#index main li p:nth-of-type(2){
		color: #ccc;
		font-size: 1.1rem;
	}
	#index main li p:nth-of-type(3){
		color: #000000;
		font-size: 1.1rem;
	}
	#index main li p>span{
		color: #b81c22;
		font-size: 1.2rem;
	}
	#index main li.more{
		border: 1px solid #cdba8d;
		border-radius: 4px;
		text-align: center;
	}
	#index main li.more span{
		display: block;
		font-size: 1.2rem;
		font-weight: bold;
		color: #cdba8d;
		line-height: 1.8rem;
	}
	#index main li.more span:nth-of-type(1){
		/*margin-top: 8.3rem;*/
	}
	#index main li.more p{
		width: 1.4rem;
		height: 1.4rem;
	    background-color: #cdba8d;
	    color: #fff;
	    border-radius: 50%;
	    vertical-align: middle;
	    line-height: 1.4rem;
	    margin: 0 auto;
	}
	
	
	/*底部*/
	#index footer a{
		text-decoration: none;
		color: #4c4c4c;
		font-size: 1.1rem;
	}#index footer .more{
		width: 100%;
		display: flex;
		margin-top: 2px;
		margin-bottom: 20%;
	}
	#index footer .more a{
		flex: 1;
		cursor: pointer;
	}
	#index footer .more .more1{
		padding-right: 5px;
	}
	#index footer .more .top{
		padding-left: 5px;
	}
	#index footer .register{
		text-align: center;
	}
	#index footer .login,#index footer .sign{
		display: inline-block;
		width: 30%;
		height: 45px;
		background: #ffffff;
		text-align: center;
		line-height: 45px;
	}
	#index footer .help{
		width: 100%;
		text-align: center;
	}
	#index footer .help ul{
		width: 67%;
		display: flex;
		border-top: 1px solid #000000;
		border-bottom: 1px solid #000000;
		margin: 10% auto 3%;
	}
	#index footer .help li{
		flex: 1;
		margin: 5% auto;
	}
	#index footer .help img{
		width: 70%;
	}
	#index footer .help h3{
		font-size: 1.33;
		padding-bottom:35%;
	}	
	
</style>
