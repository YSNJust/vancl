<template>
	<div id="quick">
		<form action="">
			
			<input type="text" @focus="add()" @blur="max()" v-model="val" placeholder="请输入图片验证码" name="code1"/>
			<div class="code1" @click="change()">
				<span class="one">{{a}}</span>
				<span class="two">+</span>
				<span class="three">{{b}}</span>
			</div>
			<br />
			<input type="text" placeholder="请输入您的手机号" name="tel"/>
			<span class="code2">获取验证码</span>
			<br />
			<input type="text" placeholder="请输入手机验证码" name="code2"/>
			<br />
			<input type="submit" name="login" id="login" value="登陆" /><br />
		</form>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
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
	#quick{
		position: relative;
		width: 100%;
	}
	#quick::before{
		content: "";
	    width: 30%;
	    height: 2px;
	    background: #B81B22;
	    position: absolute;
	    top: -1.2rem;
	    right: 10%;
	}
	#quick form{
		width: 100%;
		padding: 0 2rem 0 2rem;
		box-sizing: border-box;
		margin-top: 1.2rem;
	}
	#quick form input{
		border: 0;
	    font-size: 1.2em;
	    background: #f5f5f5;
	    color: #b5b5b5;
	    padding: 1.2rem;
	    width: 60%;
	    box-sizing: border-box;
	    outline: none;
	    margin-top: 1.2rem;
	    margin-bottom: 1.2rem;
	}
	#quick .code1{
		display: inline-block;
		border: 2px solid #b2b2b2;
		border-radius: 4px;
		width: 6rem;
		height: 2.8rem;
		margin-left: 8%;
		position: relative;
		top: 1.2rem;
		background: bisque;
		cursor:pointer;
	}
	#quick .code1 .one{
		position: absolute;
		top: 0.6rem;
		left: 0.5rem;
		font-size: 1.9rem;
		font-weight: 600;
		transform: rotate(-25deg);
		color: navy;
	}
	#quick .code1 .two{
		position: absolute;
		top: -0.1rem;
		left: 2.4rem;
		font-size: 1.8rem;
		color: black;
	}
	#quick .code1 .three{
		position: absolute;
		top: 0.1rem;
		left: 3.2rem;
		font-size: 2.5rem;
		font-weight: bold;
		transform: rotate(30deg);
		color: crimson;
	}
	#quick form .code2{
		display: inline-block;
		border: 2px solid #b2b2b2;
		border-radius: 4px;
		width: 6rem;
		text-align: center;
		font-size: 1.2rem;
		color: #b71c22;
		cursor: pointer;
		margin-left: 8%;
		padding: 0.8rem 0.8rem;
	}
	#quick form input:nth-of-type(3){
		width: 100%;
	}
	#quick form input:nth-of-type(4){
		font-size: 1.6rem;
		color: #ffffff;
		background: #b81b22;
		padding: 1.2rem 0;
		width: 100%;
	}
	
</style>

