import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Layout from '../components/Layout.vue';
import SignUp from '../components/SignUp.vue';
import Profile from '../components/Profile.vue';
import MapScreen from '../components/MapScreen.vue';
import AuthAPI from '../api/auth';
 
Vue.use(VueRouter)
 
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
        {
            path: '',
            name: 'MapScreen',
            component: MapScreen,
            auth: false
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile
        }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  }
]
 
const router = new VueRouter({
  mode: 'history',
  routes
})
 
// Global guard
router.beforeEach((to, from, next) => {
  if(to.name == 'Login' || to.name == 'SignUp') { 
    next();
  } else {
    if (AuthAPI.isAuthenticated()) {
      next();
    } else {
      next({ name: 'Login' });
    }
    next();
  }
})
 
export default router
 
 

