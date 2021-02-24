import Vue from 'vue'
import Router from 'vue-router'
import enterprise from './components/enterprise'
import Login from './components/login'
import Contact from './components/contact'
import Home from './components/Home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/enterprise',
            name: 'enterprise',
            component: enterprise
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        }
    ]
})