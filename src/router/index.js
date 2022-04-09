import { createRouter, createWebHistory } from 'vue-router'
import PokemonDetail from '@/components/PokemonDetail.vue'
import PokemonView from '@/views/PokemonView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: PokemonView
        },
        {
            path: '/pokemon',
            name: 'pokemon',
            component: PokemonView
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
