<template>
	<div id="assort">
		<ul>
			<li v-for="(m,n) in sortLists[(this.$route.params.id)-1].sortList">
				<router-link to="/my">
					<img :src="m.src1"/>
					<p>{{m.name}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import classifyData1 from '../../../data/classify.json'
	export default{
		data(){
			return {
				sortLists:[],
					
			}
		},
		mounted(){
			this.sortLists=classifyData1.sortLists;
			
		}
	}
</script>

<style>
	#assort{
		float: right;
		width: 75%;
		margin-bottom: 4.25rem;
	}
	#assort ul{
		width: 100%;
	}
	#assort ul li{
		width: 33%;
		text-align: center;
		float: left;
	}
	#assort ul li a{
		text-decoration: none;
		color: #999;
	}
	#assort ul li img{
		width: 75%;
		margin-top: 5%;
	}
	#assort ul li p{
		line-height: 2rem;
	}
</style>