import { createRouter, createWebHistory } from 'vue-router'
import PokemonDetail from '@/views/PokemonDetail.vue'
import PokemonHome from '@/views/PokemonHome.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: PokemonHome
        },
        {
            path: '/pokemon',
            name: 'pokemon',
            component: PokemonHome
        },
        {
            path: '/pokemon/:pokemon',
            name: 'detail',
            component: PokemonDetail,
            props: true
        }
    ]
})

export default router
