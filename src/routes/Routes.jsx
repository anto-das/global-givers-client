import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Home from "../layouts/Home";
import AllVolunteerCards from "../pages/AllVolunteerCards";
import PrivateRoutes from "./PrivateRoutes";
import VolunteerDetailPage from "../pages/VolunteerDetailPage";
import PostVolunteer from "../pages/postVolunteer";
import MyVolunteerNeedPage from "../pages/MyVolunteerNeedPage";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/volunteers/:id",
          element:<PrivateRoutes><VolunteerDetailPage></VolunteerDetailPage></PrivateRoutes>,
          loader:({params})=>fetch(`${import.meta.env.VITE_api_url}/volunteers/${params.id}`),
        },
        {
          path: "/all-volunteers",
          element:<PrivateRoutes> <AllVolunteerCards></AllVolunteerCards></PrivateRoutes>,
        },
        {
          path: "/volunteer-posts",
          element:<PrivateRoutes> <PostVolunteer></PostVolunteer></PrivateRoutes>,
        },
        {
          path:"/my-add-posts",
          element:<PrivateRoutes><MyVolunteerNeedPage></MyVolunteerNeedPage></PrivateRoutes>
        },
        {
          path:"/volunteer-update",
          element:<PrivateRoutes><div>hello update volunteer</div></PrivateRoutes>
        },
        {
          path:"/my-requests-volunteer",
          element:<PrivateRoutes><div>hello requests volunteer</div></PrivateRoutes>
        },
        {
          path:"/login",
          element:<LoginPage></LoginPage>
        },
        {
          path:"/register",
          element:<RegisterPage></RegisterPage>
        }
      ],
    },
  ]);

export default router;