import Vue from 'vue'
import Router from 'vue-router'
import People from '../components/page/People.vue'
import Planets from '../components/page/Planets.vue'
import StarShips from '../components/page/StarShips.vue'
import StarShip from '../components/page/StarShip.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/planets',
            name: 'planets',
            component: Planets
        },
        {
            path: '/people',
            name: 'people',
            component: People
        },
        {
            path: '/starships',
            name: 'starships',
            component: StarShips
        },
        {
            path: '/starships/:id',
            name: 'starship',
            component: StarShip
        }
    ]
})
