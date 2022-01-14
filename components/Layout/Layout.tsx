import React, { FC } from "react";
const Layout: FC = ({ children }) => {
  return (
    <div>
      <nav>네비 게이터바</nav>
      <main>{children}</main>
      <footer>푸터</footer>
    </div>
  );
};

export default Layout;
