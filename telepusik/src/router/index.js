import { createRouter, createWebHashHistory } from 'vue-router'
import ShopPage from "../views/ShopPage"
import EditPage from "../views/EditPage"

const routes = [
{
    path: '/',
    name: 'shop',
    component: ShopPage
},
{
    path: '/edit',
    name: 'edit',
    component: EditPage
}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router