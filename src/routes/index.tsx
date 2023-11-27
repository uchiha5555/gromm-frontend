import { createBrowserRouter } from "react-router-dom";
import { Flex, Heading } from "@/components/basic";

import _ROUTERS from "@/constants/route.constant";

import PublicPage from "@/pages/public";
import HomePage from "@/pages/public/home";
import Signin from "@/pages/auth/signin";
import Signup from "@/pages/auth/signup";
import ProfilePage from "@/pages/public/profile";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <PublicPage />,
        children: [
            {
                path: _ROUTERS.home,
                element: <HomePage />
            },
            {
                path: _ROUTERS.profile,
                element: <ProfilePage />
            },
            {
                path: "*",
                element: <HomePage />
            },
        ],
    },
    {
        path: _ROUTERS._SIGNIN,
        element: <Signin />
    },
    {
        path: _ROUTERS._SIGNUP,
        element: <Signup />
    },
    {
        path: "*",
        element: (
            <Flex $style={{
                hAlign: "center",
                p: "300px 0 0"
            }}>
                <Heading level={1}>404 Not found page</Heading>
            </Flex>
        )
    }
])

export default routers;
