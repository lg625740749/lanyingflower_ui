import axios from 'axios'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

//设置默认超时时间，若为-1 则无超时时间，可以在局部调用的时候设置
axios.defaults.timeout = 15000
//跨域请求，允许保存cookie，默认是不开的哦
axios.defaults.withCredentials = true


NProgress.configure(
    {
        showSpinner: false
    })// NProgress Configuration

//HTTP request拦截
axios.interceptors.request.use(config => {
    NProgress.start()  // start progress bar
    return config
}, error => {
    console.log('err' + error);// for debug
    return Promise.reject(error)
})

//HTTP response拦截
axios.interceptors.response.use(data => {
    NProgress.done()
    return data
}, error => {
    console.log('err' + error);// for debug
    NProgress.done()
    return Promise.reject();
});

export default axios