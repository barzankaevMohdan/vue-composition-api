import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './views/HomePAge'
import Reusable from './views/Reusable'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/reusable', component: Reusable}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})