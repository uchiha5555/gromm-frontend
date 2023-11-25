import { createBrowserRouter, Navigate } from "react-router-dom";

// Components
import AppLayout from "components/Layout/AppLayout";
import MainLayout from "components/Layout/MainLayout";

// Pages
import { Lost, Home, Profile } from "pages";

//-------------------------------------------------------------------------

const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <MainLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/profile", element: <Profile /> },
        ],
      },
      { path: "/404", element: <Lost /> },
      {
        path: "*",
        element: <Navigate to="/404" />,
      },
    ],
  },
]);

export { router };
