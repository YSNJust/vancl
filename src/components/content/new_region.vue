<template>
	<div id="new_region">
		<v-header :a="msg"></v-header>
		<ul>
			<li v-for="v in img">
				<router-link to="">
					<img :src="v" alt="" />
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import vheader from '../common/header.vue'
	import new_region from '../../../data/new_region.json'
	export default{
		components:{
			"v-header":vheader
		},
		data(){
			return{
				msg:'新品专区',
				img:[]
			}
		},
		mounted(){
			this.img=new_region.src
		}
	}
</script>

<style>
	#new_region ul{
		margin-bottom: 4.25rem;
	}
	#new_region img{
		width: 100%;
		margin-bottom: 1%;
	}
	#new_region img:nth-of-type(1){
		margin-top: 2px;
	}
</style>