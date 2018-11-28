import Vue from 'vue'
import vueRouter from 'vue-router'
import home from '../../components/footer/home.vue'
import classify from '../../components/footer/classify'
import channel from '../../components/footer/channel'
import shoppingCart from '../../components/footer/shoppingCart'
import my from '../../components/footer/my.vue'
import navList from '../../components/content/nav.vue'
import new_region from '../../components/content/new_region.vue'
import login from '../../components/content/login.vue'
import normal from '../../components/login/normal.vue'
import quick from '../../components/login/quick.vue'
import sign from '../../components/content/sign.vue'

export default new vueRouter({
	routes:[
		{path:'/home',component:home},
		{path:'/classify',component:classify},
		{path:'/channel',component:channel},
		{path:'/shoppingCart',component:shoppingCart},
		{path:'/my',component:my},
		{
			path:'/login',
			component:login,
			children:[
				{path:'/normal',component:normal},
				{path:'/quick',component:quick},
				{path:'/',redirect:"/normal"}
			]
		},
		{path:'/sign',component:sign},
		{path:'/navList/:title',component:navList},
		{path:'/new_region',component:new_region},
		{path:'/',redirect:'/home'},
	]
})
