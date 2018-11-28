<template>
  <div id="app">
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
	import footer from './components/common/footer.vue'
	export default {
	  components:{
	  	"v-footer":footer
	  }
	}
</script>

<style lang="scss">
/*#app {
  max-width: 650px;
  margin: auto;
}*/
</style>
