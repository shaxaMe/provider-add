// router/routes.tsx
import { RouteObject } from "react-router-dom";
import Layout from "@/layouts/default";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";
import LoginLayout from "@/layouts/login-layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />, // Layout asosiy qoplovchi
    children: [
      {
        index: true, // "" ga teng (ya'ni "/")
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path:"/login",
    element:<LoginLayout/>,
    children:[
      {
        index:true,
        element:<Login/>
      }
    ]
  }
];

export default routes;
