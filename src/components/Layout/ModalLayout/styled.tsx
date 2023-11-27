import styled from "styled-components";

//-------------------------------------------------

export const Layout = styled.div<{ show: boolean }>`
  position: fixed;

  top: 0px;
  left: 0px;

  width: 100vw;
  height: 100vh;

  z-index: 1;

  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(18px);

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    background: #0c0c0c;
  }
`;

export const ModalContainer = styled.div<{
  modalWidth?: string;
  modalHeight?: string;
}>`
  position: relative;

  width: ${(props) => (props.modalWidth ? props.modalWidth : "600px")};
  height: ${(props) => (props.modalHeight ? props.modalHeight : "700px")};

  max-height: calc(100vh - 140px);

  background: linear-gradient(161.7deg, #050505 -45.59%, #181818 31.9%);
  border: 1px solid rgba(255, 255, 255, 0.13);

  border-radius: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 50px 0px 50px 0px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    width: 90%;
    height: calc(100vh - 170px);
  }
`;

export const CloseButton = styled.div`
  position: absolute;

  top: 20px;
  right: 20px;

  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: transparent;
  }
`;
