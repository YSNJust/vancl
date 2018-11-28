<template>
	<div id="commonhead">
		<header>
			<span class="one">{{a}}</span>
			<span class="two" @click="callback()"></span>
		</header>
		
	</div>
</template>

<script>
	export default{
		props:["a"],
		methods:{
			callback(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	#commonhead header{
		width: 100%;
		background: #b81c22;
		text-align: center;
		position: relative;
		/*定位后居中*/
		left: 50%;
	    top: 0;
	    -webkit-transform: translate(-50%,0);
	    -moz- transform: translate(-50%,0);
	    transform: translate(-50%,0); 
	    max-width: 640px;
	}
	#commonhead header span.one{
		color: #ffffff;
		font-size: 1.5rem;
		line-height: 270%;
	}
	#commonhead header span.two{
		position: absolute;
		top: 50%;
		margin-top: -0.7rem;
		left: 2rem;
		width: 1.4rem;
		height: 1.4rem;
		transform: rotate(45deg);
		border-bottom: 2px solid #fff;
	    border-left: 2px solid #fff;
	    cursor: pointer;
	}
</style>