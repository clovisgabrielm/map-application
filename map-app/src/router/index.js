import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Layout from '../components/Layout.vue';
import MapScreen from '../components/MapScreen.vue';
 
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
        }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]
 
const router = new VueRouter({
  mode: 'history',
  routes
})
 
// global guard
router.beforeEach((to, from, next) => {
  if(to.name == 'Login') { 
    next();
  } else {
    // if (AuthAPI.isAuthenticated()) {
    //   next();
    // } else {
    //   next({ name: 'Login' });
    // }
    next();
  }
})
 
export default router
 
 

