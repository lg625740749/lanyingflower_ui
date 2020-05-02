import website from "@/config/website";

let RouterPlugin = function () {
    this.$router = null   //给你彻底干掉其他干扰的
}


//起个有点稳的方法名，给它赋值上去
RouterPlugin.install = function (router) {
    this.$router = router

    this.$router.$avueRouter = {
        //正则处理路由
        validPath: function (list, path) {
            let result = false;
            list.forEach(ele => {
                if (new RegExp("^" + ele + ".*", "g").test(path)) {
                    result = true
                }
            });
            return result;
        },
    }

    this.$router.beforeEach((to, from, next) => {
        if (router.$avueRouter.validPath(website.whiteList, to.path)) {
            next()
        } else {
            next('/base/hi')
        }
    })
}


export default RouterPlugin;