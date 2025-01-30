import React from "react";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div>
      <div>
        <h1>Welcome to E-Commerce Shoping</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
