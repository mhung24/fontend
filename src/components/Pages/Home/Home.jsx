import React from "react";
import { Header } from "../Headers/Header";
import { Menu } from "../Headers/Menu";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="header">
        <div className="bg-[#397ac3] h-[70px] md:h-[100px] lg:h-[120px] flex items-center px-2 md:px-8">
          <Header />
        </div>

        <div>
          <Menu />
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};
