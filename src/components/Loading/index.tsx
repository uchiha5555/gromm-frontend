import React from "react";

// styled
import { Layout, Image, Text } from "./styled";

// image
import LogoImage from "assets/images/loading.gif";

//---------------------------------------------------------
const Loading: React.ReactNode = (
  <Layout>
    <Image src={LogoImage} alt="No loading.gif" />
    <Text>Loading...</Text>
  </Layout>
);

export default Loading;
