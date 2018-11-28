<template>
	<div>
		<ul>
			<li><router-link to="/home">
					<p class="iconfont icon-tubiaozhizuomoban"></p>
					<p>凡客</p>
				</router-link>
			</li>
			<li><router-link to="/classify">
					<p class="iconfont icon-fenlei"></p>
					<p>分类</p>
				</router-link>
			</li>
			<li><router-link to="/channel">
					<p class="iconfont icon-pindao"></p>
					<p>频道</p>
				</router-link>
			</li>
			<li><router-link to="/login">
					<p class="iconfont icon-gouwuche"></p>
					<p>购物车</p>
				</router-link>
			</li>
			<li><router-link to="/my">
					<p class="iconfont icon-wode"></p>
					<p>我的</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped>
	ul{
		/*固定定位居中*/
		position: fixed;
		left:50%;
		bottom:0;
		-webkit-transform:translate(-50%,0);
		-moz- transform:translate(-50%,0);
		transform:translate(-50%,0);
		max-width: 640px;
		display: flex;
		text-align: center;
		width: 100%;
		height: 4.25rem;
		border-top:1px solid #999 ;
		background: #ffffff;
	}
	li{
		flex: 1;
		height: 60px;
		cursor: pointer;
		margin: 4px auto;
	}
	/*.icon {
	   font-size: 2.5rem;
	}*/
	p:nth-of-type(1){
		font-size: 2.5rem;
		color: #666666;
	}
	p:nth-of-type(2){
		font-size: 0.84rem;
		color: #666666;	
	}
	a{
		text-decoration: none;
	}
	.router-link-active  p{
		color: red;
	}
</style>