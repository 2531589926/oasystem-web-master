import index from "../src/index";
import center from "../src/center";
import sort from "../src/sort";
import detail from "../src/detail";
export default [
  {
    path: '/index', component: index, alias: "/",
    children: [
      {path:'center',component:center},
      {path:'sort',component:sort},
      {path:'detail',component:detail},
    ]
  },
]
