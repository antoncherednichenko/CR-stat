import Home from "../pages/Home/Home"
import Player from "../pages/Player/Player"
import { routerType } from "../types/routertypes"
import { getId } from "../helpers"

export const routes: routerType[] = [
    {
        path: '/',
        component: Home,
        id: getId()
    },
    {
        path: '/player',
        component: Player,
        id: getId()
    }
]