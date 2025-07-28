import React from "react";
import TopNav from "./TopNav";
import NavBar from "./NavBar";

const index = () => {
  return (
    <header className="bg-background text-text shadow relative z-[10000]">
      <TopNav />
      <NavBar />
    </header>
  );
};

export default index;
