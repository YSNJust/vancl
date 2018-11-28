<template>
	<div id="classify">
		<v-header :a="msg"></v-header>
		<!--左边tab栏-->
		<aside>
			<ul>
				<li v-for="(v,i) in sortLists" :class="{'current':selected==i}" @click="change(i)" v-model="selected">
					{{v.sort}}
				</li>
			</ul>
		</aside>
		<!--right-->
		<ul id="assort">
			<li v-for="(m,n) in sortList">
				<router-link to="/my">
					<img :src="m.src1"/>
					<p>{{m.name}}</p>
				</router-link>
			</li>
		</ul>
	</div>	
</template>


<script>
	import vheader from '../common/header.vue'
	import classifyData from '../../../data/classify.json'
	export default{
		components:{
			'v-header':vheader,
		},
		data(){
			return {
				msg:"分类",
				selected:0,
				sortLists:[],
				sortList:[]
			}
		},
		methods:{
			change(b){
				this.selected=b
				this.sortList=this.sortLists[this.selected].sortList
			}
		},
		mounted(){
			this.sortLists=classifyData.sortLists;
			this.sortList=this.sortLists[this.selected].sortList
		}
	}
</script>

<style>
	#classify{
		background: #fffff;
		/*overflow: hidden;*/
	}
	#classify aside{
		width: 25%;
		float: left;
		background: #e5e5e5;
	}
	#classify aside ul{
		text-align: center;
		line-height: 3rem;
		padding-bottom: 4.3rem;
	}
	#classify aside li{
		border-bottom: 1px solid #fff;
		cursor: pointer;
		color: #000000;
	}
	#classify aside .current{
		background: #FFFFFF;
	}
	
	/*right*/
	#assort{
		float: right;
		width: 75%;
		margin-bottom: 4.25rem;
	}
	#assort li{
		width: 33%;
		text-align: center;
		float: left;
	}
	#assort li a{
		text-decoration: none;
		color: #999;
	}
	#assort li img{
		width: 75%;
		margin-top: 5%;
	}
	#assort li p{
		line-height: 2rem;
	}
</style>