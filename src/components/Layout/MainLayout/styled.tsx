import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
`;

export const Main = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
export const AuthMenu = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  padding-top: 25px;
  padding-right: 30px;
  padding-bottom: 10px;
`;
export const Button = styled.div`
  position: relative;

  padding: 10px 20px;

  font-family: "Inter";
  font-size: 18px;

  border: 2px solid #536bf2;
  border-radius: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  z-index: 0;

  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #536bf2;
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

  &:active {
    top: 2px;
  }
`;
