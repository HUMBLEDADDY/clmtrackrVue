import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Index from '@/views/Index'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/home',
        name: 'Home',
        component: HelloWorld
    }]
})