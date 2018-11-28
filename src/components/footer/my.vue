<template>
	<div id="my">
		<v-header :a="msg"></v-header>
		<div class="person">
				<router-link to="/my">
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-shezhi"></use>
				</svg>
			</router-link>
			<img src="../../assets/img/my1.jpg"/>
			<p>183****6666</p>
			<router-link to="/my">
				<img src="../../assets/img/my2.png"/>
			</router-link>
			<ul>
				<li>积分：0</li>
				<li>余额：0.00</li>
				<li>成长值：0</li>
			</ul>
		</div>
		
		<!--全部订单-->
		<div class="orders">
			<p>
				<router-link to="my">全部订单</router-link>
			</p>
			<ul>
				<li>
					<router-link to="/my">
						<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-xiayibu"></use>
						</svg>
						<p>进行中</p>
					</router-link>
				</li>
				<li>
					<router-link to="/my">
						<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-wancheng"></use>
						</svg>
						<p>已完成</p>
					</router-link>
				</li>
				<li>
					<router-link to="/my">
						<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-daipingjia"></use>
						</svg>
						<p>待评价</p>
					</router-link>
				</li>
				<li>
					<router-link to="/my">
						<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-wuxiao"></use>
						</svg>
						<p>无效</p>
					</router-link>
				</li>
			</ul>
		</div>
		
		<ul class="others">
			<li>
				<router-link to="/my">
					<span></span>
					<p>充值返现</p>
				</router-link>
				<span>充100返100</span>
			</li>
			<li>
				<router-link to="/my">
					<span></span>
					<p>我的私人订制</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<span></span>
					<p>物流查询</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<span></span>
					<p>退货记录</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<span></span>
					<p>地址管理</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<span></span>
					<p>我的礼品卡</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<span></span>
					<p>我的优惠券</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<span></span>
					<p>我的积分</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<span></span>
					<p>我的评论</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<span></span>
					<p>我的提问</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<span></span>
					<p>投诉建议</p>
				</router-link>
			</li>
		</ul>
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
				msg:'个人中心'
			}
		}
	}
</script>

<style>
	#my a{
		text-decoration: none;
	}
	#my{
		background: #f0eff5;
	}
	#my .person{
		width: 100%;
		padding-bottom: 2rem;
		background: url(../../assets/img/my5.png) no-repeat;
		text-align: center;
		color: #FFFFFF;
		
	}
	#my .person a:nth-of-type(1){
		width: 100%;
		height: 2.6rem;
		display: inline-block;
	}
	#my .person a:nth-of-type(1)::after{
		content: ''; 
		display: block;
		clear: both; 
	}
	#my .person svg{
		width: 1.8rem;
		height: 1.8rem;
		float: right;
		margin: 0.8rem 0.8rem 0 0;
	}
	#my .person>img{
		width: 6.5rem;
		height: 6.5rem;
		border-radius: 50%;
	}
	#my .person p{
		line-height: 2.5rem;
	}
	#my .person a:nth-of-type(2){
		border-radius: 8px;
		width: 17%;
	}
	#my .person ul{
		display: flex;
	}
	#my .person li{
		flex: 1;
		font-size: 1.1rem;
		line-height: 2.5rem;
	}
	#my .orders{
		background: #FFFFFF;
		margin: 1rem auto;
	}
	#my .orders>p{
		height: 3.4rem;
		margin-top: 1rem;
		border-bottom: 1px solid #f0eff5;
		padding: 0 0.9rem;
		position: relative;
	}
	#my .orders>p a{
		color: #000000;
		font-size: 1.1rem;
		line-height: 3.4rem;
	}
	#my .orders>p a::after{
		content: "";
	    position: absolute;
	    top: 50%;
	    right: 0.9rem;
	    width: 0.8rem;
	    height: 0.8rem;
	    border-top: 1px solid #a5a5a5;
	    border-right: 1px solid #a5a5a5;
	    transform: translateY(-50%) rotate(45deg);
	    -webkit-transform: translateY(-50%) rotate(45deg);
	}
	#my .orders ul{
		display: flex;
		background: #ffffff;
	}
	#my .orders ul li{
		flex: 1;
		font-size: 2rem;
		text-align: center;
		margin: 1rem auto;
	}
	#my .orders ul li p{
		font-size: 1.1rem;
		color: #000000;
		margin-top: 4px;
	}
	
	#my .others{
		width: 100%;
		margin-bottom: 4.3rem;
		overflow: hidden;
		background: #FFFFFF;
	}
	#my .others li{
		width: 25%;
		float: left;
		text-align: center;
		padding: 1rem 0;
		height: 5.8rem;
	}
	#my .others li a{
		color: #000000;
		font-size: 1rem;
	}
	#my .others li a span{
		display: inline-block;
		width: 3rem;
		height: 3rem;
		position: relative;
		background: url(../../assets/img/my4.png) no-repeat;
		background-size: 3rem 42rem;
	}
	#my .others li>span{
		font-size: 0.8rem;
		color: #b81c22;
	}
	#my .others li:nth-of-type(2) a span{
		background-position: 0rem -3rem;	
	}
	#my .others li:nth-of-type(3) a span{
		background-position: 0rem -36em;	
	}
	#my .others li:nth-of-type(4) a span{
		background-position: 0rem -39rem;	
	}
	#my .others li:nth-of-type(5) a span{
		background-position: 0rem -12rem;	
	}
	#my .others li:nth-of-type(6) a span{
		background-position: 0rem -6rem;	
	}
	#my .others li:nth-of-type(7) a span{
		background-position: 0rem -9rem;	
	}
	#my .others li:nth-of-type(8) a span{
		background-position: 0rem -21rem;	
	}
	#my .others li:nth-of-type(9) a span{
		background-position: 0rem -15rem;	
	}
	#my .others li:nth-of-type(10) a span{
		background-position: 0rem -18rem;	
	}
	#my .others li:nth-of-type(11) a span{
		background-position: 0rem -24rem;	
	}
</style>