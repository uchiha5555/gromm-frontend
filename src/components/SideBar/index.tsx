import React from "react";
import { Link, useLocation } from "react-router-dom";

// Styled
import { Layout, Image } from "./styled";

// Image
import ImageLogo from "assets/images/Logo.png";

// Data
import { MenuData } from "util/MenuData";

// Components
import MenuItem from "components/Item/MenuItem/Index";

//-----------------------------------------------------------

const SideBar = () => {
  const location = useLocation();

  return (
    <Layout>
      <Link to="/">
        <Image src={ImageLogo} alt="No Logo" />
      </Link>
      {MenuData.map((data, key) => {
        return (
          <MenuItem
            icon={data.icon}
            text={data.text}
            router={data.router}
            active={location.pathname === data.router}
          />
        );
      })}
    </Layout>
  );
};

export default SideBar;