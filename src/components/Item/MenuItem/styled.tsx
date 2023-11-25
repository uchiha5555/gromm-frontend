import styled from "styled-components";
import { Link } from "react-router-dom";

interface LayoutProps {
  active: boolean;
}

export const Layout = styled(Link)<LayoutProps>`
  width: 90%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => (props.active ? "#536bf2" : "#14161C")};
  border-radius: 10px;

  &:hover {
    background: #536bf2;
  }
`;
