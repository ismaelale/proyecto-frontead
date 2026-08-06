import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/view/Login.vue'
import Home from '@/view/HelloWorld.vue'

const routes = [
    {
        path: '/',
        name : 'Login',
        component : LoginView, 
    },
    {
        path : '/home',
        name : 'Home',
        component : Home,
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;