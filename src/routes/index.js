import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import PrivatePages from "../routes/PrivatePages";
import PublicRoutes from "../routes/PublicRoutes";

function Routes() {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [width, height] = useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isUserLoggedIn = true;
  return isUserLoggedIn ? <PrivatePages /> : <PublicRoutes />;
}

export default Routes;
