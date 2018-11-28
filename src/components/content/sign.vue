<template>
	<div id="sign">
		<v-header :a="msg"></v-header>
		<form action="">
			<input type="text" @focus="add()" @blur="max()" v-model="val" placeholder="请输入图片验证码" class="one"/>
			<div class="code1" @click="change()">
				<span class="one">{{a}}</span>
				<span class="two">+</span>
				<span class="three">{{b}}</span>
			</div>
			<br />
			<input type="text" placeholder="请输入您的手机号" class="two"/>
			<span class="code2">获取验证码</span><br />
			<input type="text" placeholder="请输入手机验证码" class="three"/><br />
			<input type="password" placeholder="密码：6-16位字母，数字，特殊字符" class="four"/><br />
			<p>注册账号即表示同意遵守<router-link to="/">《VANCL凡客服务条款》</router-link></p>
			<button type="button">点击注册</button>
		</form>
	</div>
</template>

<script>
	import vheader from '../common/header.vue'
	
	export default{
		components:{
			"v-header":vheader
		},
		data(){
			return{
				msg:'注册',
				a:parseInt(Math.random()*10),
				b:parseInt(Math.random()*10),
				c:0,
				val:""
			}
		},
		methods:{
			add(){
				this.c=this.a+this.b
			},
			change(){
				this.a=parseInt(Math.random()*20)
				this.b=parseInt(Math.random()*20)
			},
			max(){
					
				if (this.val!= this.c) {
					alert("验证码错误，请重新输入");
					this.a=parseInt(Math.random()*20);
					this.b=parseInt(Math.random()*20);
					this.val=""
				}
			}
		}
	}
</script>

<style>
	/*将#sign后的第一个同级标签隐藏，隐藏了此网站的固定底部*/
	#sign+div{
		display:none;
	}
	#sign{
		width: 100%;
		background: #FFFFFF;
	}
	#sign form{
		padding: 2.5rem 2rem;
	}
	#sign input{
		border: none;
		outline: none;
		background: #f5f5f5;
		color: #b5b5b5;
		padding: 0.8rem;
		font-size: 1.2rem;
		margin-bottom: 1.2rem;
		width: 47%;
	}
	#sign input.three,#sign input.four{
		width: 94%;
	}
	#sign .code1{
		display: inline-block;
		border: 2px solid #b2b2b2;
		border-radius: 4px;
		width: 6rem;
		height: 2.8rem;
		margin-left: 15%;
		position: relative;
		top: 1.2rem;
		background: bisque;
		cursor: pointer;
	}
	#sign .code1 .one{
		position: absolute;
		top: 0.6rem;
		left: 0.5rem;
		font-size: 1.9rem;
		font-weight: 600;
		transform: rotate(-25deg);
		color: greenyellow;
	}
	#sign .code1 .two{
		position: absolute;
		top: -0.1rem;
		left: 2.4rem;
		font-size: 1.8rem;
		color: black;
	}
	#sign .code1 .three{
		position: absolute;
		top: 0.1rem;
		left: 3.2rem;
		font-size: 2.5rem;
		font-weight: bold;
		transform: rotate(30deg);
		color: palevioletred;
	}
	#sign form .code2{
		display: inline-block;
		border: 2px solid #b2b2b2;
		border-radius: 4px;
		width: 6rem;
		text-align: center;
		font-size: 1.2rem;
		color: #b71c22;
		cursor: pointer;
		margin-left: 15%;
		padding: 0.8rem 0.8rem;
	}
	#sign form p{
		width: 100%;
		text-align: center;
		font-size: 0.9rem;
		color: #b3b3b3;
		margin-top: 3rem;
		margin-bottom: 1.5rem;
	}
	#sign form p a{
		text-decoration: none;
		color: #4c4c4c;
	}
	#sign form button{
		width: 98%;
		color: #fff;
    	font-size: 1.45em;
    	background: #b81b22;
   		padding:0.5em 0;
    	text-align: center;
   		border-radius: 3px;
   		margin-bottom: 2.25rem;
	}
</style>