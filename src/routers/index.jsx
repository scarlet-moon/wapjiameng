import Home from "../components/home";
import Serve from "../components/serve/index/serve";
import Cooperation from "../components/cooperation/index";
import Classic from "../components/classic/index/classic";
import Recommend from "../components/recommend/index/recommend";
import Rare from "../components/rare/index/rare";
import Details from "../components/classic/details";


export const routers = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/serve',
        component: Serve
    },
    {
        path: '/cooperation',
        component: Cooperation
    },
    {
        path: '/classic/:id',
        exact:true,
        component: Classic

    },
    {
        path: '/classic/details/:url',
        component: Details,
    },
    {
        path: '/recommend',
        component: Recommend
    },
    {
        path: '/rare',
        component: Rare,
    }
]