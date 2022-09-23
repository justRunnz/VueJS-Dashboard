import { createRouter, createWebHistory } from 'vue-router'
import StoreView from "@/views/StoreView";
import CommandsView from "@/views/CommandsView";
import DashboardUsers from "@/components/DashboardUsers";

const routes = [
  {
    path: '/Dashboard/commands',
   name: 'commands',
    component: CommandsView
  },
  {
    path: '/Dashboard/store',
    name: 'store',
    component: StoreView
  },
  {
    path: '/Dashboard/users',
    name: 'users',
    component: DashboardUsers
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
