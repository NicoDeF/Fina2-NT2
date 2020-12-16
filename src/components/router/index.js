import { createWebHistory, createRouter } from 'vue-router'
import Text from '../components/Text.vue'

import Multiple from '../components/Multiple.vue'


const routes = [
    { path: '/text', name: 'Text', component: Text},
    { path: '/multiple', name: 'Multiple', component: Multiple},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;