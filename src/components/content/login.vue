<template>
	<div id="login">
		<v-header :a="msg"></v-header>
		<ul class="way">
			<li><router-link to="/normal">普通登录</router-link></li>
			<li><router-link to="/quick">快速登录</router-link></li>
		</ul>
		<router-view></router-view>
		<p>
			<span class="left"><router-link to="/sign">免费注册 ></router-link></span>
			<span class="right"><router-link to="">手机账号取回密码 ></router-link></span>
		</p>
		<p>使用其他账号登陆</p>
		<ul class="others">
			<li>
				<router-link to="">
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-zhifubao"></use>
					</svg>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-weibo"></use>
					</svg>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-xiaomi"></use>
					</svg>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-ziyuanqq"></use>
					</svg>
				</router-link>
			</li>
		</ul>
	</div>
</template>


<script>
	import vheader from '../common/header.vue'
	
	export default{
		components:{
			"v-header":vheader,
		},
		data(){
			return{
				msg:'登陆',
			}
		},
		methods:{
			
		}
	}
</script>

<style>
	#login+div{
		display: none;
	}
	#login ul.way{
		font-size: 1.5rem;
		line-height: 4rem;
		text-align: center;
		overflow: hidden;
	}
	#login ul.way li{
		float: left;
		width: 50%;
	}
	#login ul.way li a{
		text-decoration: none;
		color: #666;
	}
	#login>p{
		padding: 0.5rem 2rem;
		font-size: 1.1rem;
		line-height: 1.5rem;
		color: #4c4c4c;
	}
	#login>p:nth-of-type(1){
		overflow: hidden;
		margin-bottom: 3rem;
	}
	#login>p .left{
		float: left;
	}
	#login>p .right{
		float: right;
	}
	#login>p a{
		color: #4c4c4c;
		text-decoration: none;	
	}
	#login ul.others{
		overflow: hidden;
		padding: 0.5rem 2rem;
		padding-bottom: 4.25rem;
	}
	#login ul.others li{
		float: left;
		width: 4rem;
		height: 4rem;
	}
	#login ul.others li svg{
		width: 2rem;
		height: 2rem;
	}
</style>