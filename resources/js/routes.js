import { isAuthenticated } from './auth';

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

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // Check if the user is authenticated
      if (!isAuthenticated()) {
        next('/login'); // Redirect to login page if not authenticated
      } else {
        next(); // Continue to the route
      }
    } else {
      next(); // If no authentication is required, proceed as usual
    }
  });
  