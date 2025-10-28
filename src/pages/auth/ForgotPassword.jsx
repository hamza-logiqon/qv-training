import FormInput from "@/common/Input";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/layout/Auth";
import React from "react";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <div className="max-w-[378px]">
        {/* Header */}

        <h2 className="text-2xl font-bold mb-2">Forgot Password</h2>

        <p className="text-gray-500 mb-6 text-sm">
          Please enter your email address. We’ll send you a code to reset your
          password.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <Button className="w-full bg-[#265ED4]  hover:bg-blue-700 text-white font-semibold mt-4 rounded-md">
            Send Code
          </Button>
        </form>
        <p className="text-gray-500 mt-3 text-sm text-center">
          Already have your password?&nbsp;
          <a href="#" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
