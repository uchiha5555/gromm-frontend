import styled from "styled-components";

//------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: black;

  overflow: hidden;
`;

export const Image = styled.img`
  width: 500px;

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const Text = styled.div`
  margin-top: 10px;

  font-size: 40px;
  color: white;

  @media screen and (max-width: 425px) {
    font-size: 30px;
  }
`;
