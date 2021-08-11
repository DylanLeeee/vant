import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register/')
    },
    {
        path: '/',
        component: () => import('@/views/layout/'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/home/')
            },
            {
                path: '/jddetail',
                name: 'jddetail',
                component: () => import('@/views/home/components/jd-detail.vue')
            },
            {
                path: '/search',
                component: () => import('@/views/search/'),
                children: [
                    {
                        path: '',
                        name: 'search',
                        component: () => import('@/views/search/components/empty.vue')
                    }
                ]
            },
            {
                path: '/my',
                component: () => import('@/views/my/'),
                children: [
                    {
                        path: '',
                        name: 'my',
                        component: () => import('@/views/my/components/')
                    },
                    {
                        path: '/address-add',
                        name: 'address-add',
                        component: () => import('@/views/my/components/address-add.vue')
                    },
                    {
                        path: '/address-list',
                        name: 'address-list',
                        component: () => import('@/views/my/components/address-list.vue')
                    },
                    {
                        path: '/order-list',
                        name: 'order-list',
                        component: () => import('@/views/my/components/order-list.vue')
                    },
                    {
                        path: '/express-list',
                        name: 'express-list',
                        component: () => import('@/views/my/components/express-list.vue')
                    }
                ]
            },
            {
                path: '/cart',
                name: 'cart',
                component: () => import('@/views/cart/')
            }

        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
