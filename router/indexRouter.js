import index from "../src/index";
import center from "../components2/center";
export default [
  {
    path: '/index', component: index, alias: "/",
    children: [
      {path:'center',component:center},
    ]
  },
]
