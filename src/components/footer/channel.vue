<template>
	<div id="channel">
		<v-header :a="msg"></v-header>
		<ul>
			<li v-for="v in img">
				<router-link to="/my">
					<img :src="v" alt="" />
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import vheader from '../common/header.vue'
	import channel from '../../../data/channel.json'
	export default{
		components:{
			"v-header":vheader
		},
		data(){
			return {
				msg:"频道",
				img:[],
			}
		},
		mounted(){
			this.img=channel.src
		}
	}
</script>

<style>
	#channel ul{
		margin-bottom: 4.25rem;
	}
	#channel img{
		width: 100%;
		margin-bottom: 1%;
	}
	#channel img:nth-of-type(1){
		margin-top: 2px;
	}
</style>