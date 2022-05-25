import Home from "../pages/Home/Home"
import Player from "../pages/Player/Player"
import { routerType } from "../types/routertypes"
import { getId } from "../helpers"
import Clans from "../pages/Clans/Clans"

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
    },
    {
        path: '/clans',
        component: Clans,
        id: getId()
    }
]