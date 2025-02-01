import React from "react";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className=" hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Welcome to E-Commerce Shoping
        </h1>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
