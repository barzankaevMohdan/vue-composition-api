import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './views/HomePAge'
import Reusable from './views/Reusable'
import VuexPage from './views/VuexPage'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/reusable', component: Reusable },
        { path: '/vuex', component: VuexPage }
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})