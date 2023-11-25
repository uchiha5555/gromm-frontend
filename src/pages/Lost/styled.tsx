import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 55%;
  }
  @media screen and (max-width: 425px) {
    width: 70%;
  }
`;

export const Button = styled(Link)`
  width: 300px;
  height: 50px;

  margin-top: 30px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 800;
  font-size: 20px;

  background: #0176ac;
`;
