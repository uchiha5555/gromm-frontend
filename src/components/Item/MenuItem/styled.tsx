import styled from "styled-components";
import { Link } from "react-router-dom";

interface LayoutProps {
  active: boolean;
}

export const Layout = styled(Link)<LayoutProps>`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding-left: 20px;

  font-family: "Inter";
  font-size: 20px;

  cursor: pointer;
  transition: all 0.2s ease;

  position: relative;

  background: transparent;
  background: ${(props) => (props.active ? "#536bf2" : "#14161C")};

  box-shadow: inset 1px 1px 1px 0px rgba(255, 255, 255, 0.5),
    5px 5px 12px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  border: none;
  border-radius: 10px;

  z-index: 0;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:active {
    top: 2px;
  }

  ${(props) =>
    !props.active &&
    `&::after {
        position: absolute;
        content: "";
        width: 0;
        height: 100%;
        top: 0;
        right: 0;
        z-index: -1;
        background-color: rgba(255,255,255,0.1);
        border-radius: 10px;
        box-shadow: inset 1px 1px 1px 0px rgba(255, 255, 255, 0.5),
          5px 5px 12px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
        transition: all 0.2s ease;
      }

      &:hover {
        &::after {
          left: 0 !important;
          width: 100% !important;
        }
      }
  `};
`;

export const IconContainer = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
