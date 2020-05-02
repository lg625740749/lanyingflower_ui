import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

//引入Axios
import axios from './router/axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


//引入Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, {size: 'small'})

//自定义组件
import basicContainer from '@/components/basic-container/main'
Vue.component('basicContainer', basicContainer);

import './style/common.scss'

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
