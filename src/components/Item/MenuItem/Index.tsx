import React from "react";

// Styled
import { Layout } from "./styled";

// Type
import { MenuItemType } from "util/type";

interface MenuItemProps extends MenuItemType {
  active: boolean;
}

//----------------------------------------------

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <Layout to={props.router} active={props.active}>
      <props.icon />
      {props.text}
    </Layout>
  );
};

export default MenuItem;
