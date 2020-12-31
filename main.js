import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//将顶部通知栏的高度挂载全局
Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight;

// 图标
import myIcon from "./components/icon/icon";
Vue.component("myIcon",myIcon);

// 网络请求


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
