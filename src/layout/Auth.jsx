import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex  items-center">
      {/* Left Section */}
      <div className="w-full md:w-[50%] px-6 py-10 ">
        <div className="max-w-[530px] mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img src="/logo.svg" alt="Logo" className="w-[60px]" />
          </div>
          <div className="flex flex-col items-center">{children}</div>
        </div>
      </div>

      {/* Right Section */}
      <CardContent className="hidden md:flex w-[50%] bg-gray-50 items-center justify-center min-h-screen">
        <img
          src="/auth-card-2.png"
          alt="Login Illustration"
          className="xl:max-w-lg"
        />
      </CardContent>
    </div>
  );
};

export default AuthLayout;
