import React from "react";

// Styled
import { IconContainer, Layout } from "./styled";

// Type
import { MenuItemType } from "util/Type/type";

interface MenuItemProps extends MenuItemType {
  active: boolean;
}

//----------------------------------------------

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <Layout to={props.router} active={props.active}>
      <IconContainer>
        <props.icon size={20} />
      </IconContainer>
      {props.text}
    </Layout>
  );
};

export default MenuItem;
