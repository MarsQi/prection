import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index/index.vue'
import {
    resolve
} from 'path';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index,
        children: [{
            path: '',
            component: resolve => require(['@/page/datas/index.vue'], resolve)
        }, {
            path: 'discern',
            component: resolve => require(['@/page/discern/index.vue'], resolve)
        }, {
            path: 'relevance',
            component: resolve => require(['@/page/relevance/index.vue'], resolve)
        }, {
            path: 'gather',
            component: resolve => require(['@/page/gather/index.vue'], resolve)
        }, {
            path: 'explore',
            component: resolve => require(['@/page/explore/index.vue'], resolve)
        }]
    }, {
        path: '/detail',
        name: 'detail',
        component: resolve => require(['@/page/details/index.vue'], resolve)
    }],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
}, )