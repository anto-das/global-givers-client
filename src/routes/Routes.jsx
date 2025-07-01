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
import UpdatePage from "../pages/UpdatePage";
import MyRequestPage from "../pages/MyRequestPage";
  
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
          loader:({params})=>fetch(`${import.meta.env.VITE_api_url}/volunteers/${params.id}`,{credentials:"include"}),
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
          path:"/volunteer-update/:id",
          element:<PrivateRoutes><UpdatePage></UpdatePage></PrivateRoutes>,
          loader:(({params}) => fetch(`${import.meta.env.VITE_api_url}/volunteer-update/${params.id}`))
        },
        {
          path:"/my-requests-volunteer",
          element:<PrivateRoutes> <MyRequestPage></MyRequestPage> </PrivateRoutes>
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