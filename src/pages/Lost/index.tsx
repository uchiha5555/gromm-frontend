import React from "react";

// styled
import { Layout, Image, Button } from "./styled";

// Assets
import ImageLost from "assets/images/404.png";

//-------------------------------------------------------

const Lost: React.FC = () => {
  return (
    <Layout>
      <Image src={ImageLost} alt="No Pages" />
      <Button to={"/"}>Go To Home</Button>
    </Layout>
  );
};

export default Lost;
