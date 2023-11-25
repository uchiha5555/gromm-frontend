import React from "react";
import { Outlet } from "react-router-dom";

// AOS
import "aos/dist/aos.css";

// Styled
import { Layout } from "./styled";

// Component
import SideBar from "components/SideBar";

//---------------------------------------------------------------

const MainLayout: React.FC = () => {
  return (
    <Layout>
      <SideBar />
      <Outlet />
    </Layout>
  );
};

export default MainLayout;
