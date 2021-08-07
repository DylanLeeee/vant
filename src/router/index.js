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
                path: '/search',
                name: 'search',
                component: () => import('@/views/search/')
            },
            {
                path: '/my',
                name: 'my',
                component: () => import('@/views/my/')
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
