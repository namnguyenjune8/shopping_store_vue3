import { createRouter, createWebHistory } from 'vue-router'
import StoreApp from '@/components/AppStore.vue'
import SignIn from '@/authentication/SignIn.vue'
import SignUp from '@/authentication/SignUp.vue'
import test from '@/components/HelloWorld.vue'
import Admin from '@/admin/Admin.vue'
import LoginAdmin from '@/admin/LoginAdmin.vue'
import SignupAdmin from '@/admin/SignupAdmin.vue'
import AddProduct from '@/admin/AddProduct.vue'

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
  {
    path: '/loginadmin',
    name: 'loginadmin',
    component: LoginAdmin
  },  
  {
    path: '/signupadmin',
    name: 'signupadmin',
    component: SignupAdmin
  }, 
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        next('/loginadmin');
      } else {
        next();
      }
    }
  },  
  {
    path: '/admin/addproduct',
    name: 'addproduct',
    component: AddProduct
  },  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router