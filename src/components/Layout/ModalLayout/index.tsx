import React from "react";
import { Outlet } from "react-router-dom";

// Layout
import { Layout, ModalContainer, CloseButton, Container } from "./styled";

// image
import { AiOutlineCloseCircle } from "react-icons/ai";

// type
import { ModalLayoutProps } from "util/Type/type";

//-------------------------------------------------------------------------

const ModalLayout: React.FC<ModalLayoutProps> = (props) => {
  return (
    <Layout show={props.show}>
      <ModalContainer modalWidth={props.width} modalHeight={props.height}>
        <CloseButton>
          <AiOutlineCloseCircle size={24} onClick={() => props.closeModal()} />
        </CloseButton>
        <Container>
          <Outlet />
        </Container>
      </ModalContainer>
    </Layout>
  );
};

export default ModalLayout;
