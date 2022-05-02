import Home from "../pages/Home/Home"
import { routerType } from "../types/routertypes"

export const routes: routerType[] = [
    {
        path: '/',
        component: Home,
        id: Math.random() + new Date().getTime()
    }
]