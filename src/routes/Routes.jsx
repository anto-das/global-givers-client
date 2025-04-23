import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<div className="text-6xl items-center flex min-h-screen justify-center">hello error</div>,
      children: [
        {
          path:"/",
          element:<div>hello home page</div>
        },
        {
          path: "login",
          element: <div>hello login</div>,
        },
      ],
    },
  ]);

export default router;