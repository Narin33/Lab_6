import { createRouter, createWebHistory } from 'vue-router'
// Import Components
import UserCreate from '../components/Users/CreateUser.vue'
import UserEdit from '../components/Users/EditUser.vue'
import UserShow from '../components/Users/ShowUser.vue'
import UserIndex from '../components/Users/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId', // เพิ่ม :userId
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',     // เพิ่ม :userId
      name: 'user',
      component: UserShow
    }
  ]
})

export default router