import VueRouter from 'vue-router'
import RouterPlugin from './router-plugin'
import views from '@/router/views'


let Router = new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return {
                x: 0,
                y: to.meta.savedPosition || 0
            }
        }
    },
});
Router.addRoutes(views)
RouterPlugin.install(Router)
export default Router;
