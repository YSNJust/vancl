<template>
	<div id="normal">
		<form action="">
			<input type="text" name="tel" id="tel" value="" placeholder="点击输入手机号/Email"/>
			<br />
			<input type="password" name="password" id="pass" placeholder="请输入密码"/>
			<br />
			<input type="submit" name="login" id="login" value="登陆" /><br />
		</form>
	</div>
</template>

<script>
	export default{
		methods:{
			
		}
	}
</script>

<style>
	#normal{
		position: relative;
		width: 100%;
	}
	#normal::before{
		content: "";
	    width: 30%;
	    height: 2px;
	    background: #B81B22;
	    position: absolute;
	    top: 0rem;
	    left: 10%;
	}
	#normal form{
		width: 100%;
		text-align: center;
		padding: 0 2rem 0 2rem;
		box-sizing: border-box;
	}
	#normal form input{
		border: 0;
	    font-size: 1.2em;
	    background: #f5f5f5;
	    color: #b5b5b5;
	    padding: 1.2rem;
	    width: 100%;
	    box-sizing: border-box;
	    outline: none;
	    margin-top: 2.4rem;
	}
	#normal form input:nth-of-type(3){
		font-size: 1.6rem;
		color: #ffffff;
		background: #b81b22;
		padding: 1.2rem 0;
	}
</style>

