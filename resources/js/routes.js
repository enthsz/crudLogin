export default[
    {
        path: '/',
        component: () => import('./components/crudLayout.vue')
    },
    {
        path: '/login',
        component: () => import('./components/login.vue')
    },
    
    {
        path: '/register',
        component: () => import('./components/register.vue')
    }
]