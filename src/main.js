import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入rem的js,动态设置了,不同屏幕的html根元素的font-size
import 'lib-flexible'
// 导入通用样式
import './styles/base.css'
// 引入字体图标文件
import './styles/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
