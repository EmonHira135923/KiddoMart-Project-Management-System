import Navvar from "@/src/componets/Shared/Navvar";
import React from "react";
const AuthLayout = ({ children }) => {
  return (
    <section>
      {/* Navbar shob page e common thakbe */}
      <Navvar />

      {/* children render na korle login/reg page er content dekhabe na */}
      <main>{children}</main>
    </section>
  );
};

export default AuthLayout;
