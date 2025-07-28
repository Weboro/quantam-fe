import React from "react";
import TopNav from "./TopNav";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="sticky top-0 bg-background text-text shadow z-[10000]">
      <TopNav />

      <NavBar />
    </header>
  );
};

export default Header;
