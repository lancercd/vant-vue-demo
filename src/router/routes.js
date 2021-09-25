import RouterPath from "./RouterPath";

const Index = () => import("@/views/index/Index");
const Login = () => import("@/views/login/Login");
const Qa = () => import("@/views/qa/Qa");
const Profile = () => import("@/views/profile/Profile"),
      Space = () => import("@/views/profile/Space");
const Video = () => import("@/views/video/Video");


const routes = [
    {
        path: RouterPath.INDEX,
        name: "index",
        component: Index
    },
    {
        path: RouterPath.LOGIN,
        name: "login",
        component: Login
    },
    {
        path: RouterPath.QA,
        name: "qa",
        component: Qa
    },
    {
        path: RouterPath.PROFILE,
        name: "profile",
        component: Profile,
    },
    {
        path: RouterPath.SPACE,
        name: "space",
        component: Space
    },
    {
        path: RouterPath.VIDEO,
        name: "video",
        component: Video
    }
]


export default routes;
