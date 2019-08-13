import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import register from './views/register.vue'
import dashboard from './views/dashboard.vue'
import profile from './views/profile.vue'
import projects from './views/projects.vue'
import reviews from './views/reviews.vue'
import messages from './views/messages.vue'
import settings from './views/settings.vue'
import tasks from './views/tasks.vue'
import { auth } from './db'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/tasks',
      name: 'tasks',
      component: tasks,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/messages',
      name: 'messages',
      component: messages,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: reviews,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'dashboard',
      component: dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      component: login,
       meta: {
      requiresAuth: false
    }
    },
    {
      path: '/register',
      component: register,
    meta: {
      requiresAuth: false
    }
    }
  ]
});
 router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (!requiresAuth && currentUser) 
    next('/')
     else if(requiresAuth && !currentUser) next('/login')
   else next()
})
export default router;