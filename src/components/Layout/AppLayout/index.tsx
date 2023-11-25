import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";

// Page
import Loading from "components/Loading";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

//---------------------------------------------------------------
const AppLayout: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Suspense fallback={Loading}>
      <Outlet />
    </Suspense>
  );
};

export default AppLayout;
