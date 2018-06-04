// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios.js'
import 'lib-flexible'
import '@/assets/icon/iconfont.css'
import '@/assets/css/relation.css'
import dbObject from './dbObject';
//Vue.prototype.dbObject = dbObject;
import img2base64 from './img2base64';//引入转图片为base64
Vue.prototype.img2base64 = img2base64;
// 引入mockjs
// require('mockjs')
    // 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.prototype.axios = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})