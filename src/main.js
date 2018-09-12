// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 大致的样式文件 01初始化
import './assets/style/reset.css'
// 引入 解决 边框1PX像素问题 样式文件 01 初始化
import './assets/style/border.css'
// 引入解决 移动端点击事件延迟问题 01 初始化
import FastClick from 'fastclick'
// 调用 attach() 方法解决 01 初始化
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
