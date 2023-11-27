import React from "react";
import { Outlet } from "react-router-dom";

// AOS
import "aos/dist/aos.css";

// Styled
import { Layout, Main, AuthMenu, Button } from "./styled";

// Component
import SideBar from "components/SideBar";

//---------------------------------------------------------------

const MainLayout: React.FC = () => {
  return (
    <Layout>
      <SideBar />
      <Main>
        <AuthMenu>
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
        </AuthMenu>
        <Outlet />
      </Main>
    </Layout>
  );
};

export default MainLayout;
