import { createRouter, createWebHistory } from 'vue-router'
import StoreApp from '@/components/AppStore.vue'
import SignIn from '@/authentication/SignIn.vue'
import SignUp from '@/authentication/SignUp.vue'
import test from '@/components/HelloWorld.vue'

const routes = [
 
  {
    path: '/',
    name: 'StoreApp',
    component: StoreApp,
    // beforeEnter: (to, from, next) => {
    //   const accessToken = localStorage.getItem('accessToken');
    //   if (!accessToken) {
    //     next('/sign-in');
    //   } else {
    //     next();
    //   }
    // }
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },  
  {
    path: '/test',
    name: 'test',
    component: test
  },  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router