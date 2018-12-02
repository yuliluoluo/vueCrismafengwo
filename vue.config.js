module.exports = {
  lintOnSave: true,
  configureWebpack: {
  		// vue入口文件
  		resolve: {
  			alias: {
  				vue$: 'vue/dist/vue.js'
  			}
  		}
  	}
}