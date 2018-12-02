<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
	created(){
		var rootHtml=  document.documentElement;
		var deviceWidth = rootHtml.clientWidth;       
		if(deviceWidth > 640){          
			deviceWidth = 640;        
		}        
		rootHtml.style.fontSize = deviceWidth / 10 + "px";
	}
}

</script>

<style lang="scss">
html,body{
	height: 100%;
}
#app{
	height: 100%;
}
</style>
