import {createRouter,createWebHistory} from 'vue-router'
import home from '../views/home.vue'
import markets from '../views/markets.vue'
const router = createRouter({
history:createWebHistory(),
routes:[
    {
        path:'/home',
        name:'home',
        component:home,
    },
    {
        path:'/markets',
        name:'markets',
        component:markets,
    },
]

})

export default router