import { Home } from "../pages/Pages";

const routingDatas = [
  {
    id: 1,
    name: "Login",
    component: "",
    exact: true,
    sidebar: false,
    index: true,
    path: "/home",
    auth: true,
  },
  {
    id: 2,
    name: "Home",
    component: <Home />,
    exact: true,
    sidebar: false,
    index: true,
    path: "/home",
    auth: false,
  },
];

export default routingDatas;
