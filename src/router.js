
import Vue from 'vue';
import Router from 'vue-router';
import login from './components/Login'
import register from './components/registerForm.vue'
import home from './components/Home'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: home
        },
        {
            path: '/login',
            name: 'Login',
            component: login
        },
        {
            path: '/register',
            name: 'Register',
            component: register
        }
    ]
});

export default router;