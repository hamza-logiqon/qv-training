import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { FcGoogle } from "react-icons/fc";
import FormInput from "@/common/Input";
import AuthLayout from "@/layout/Auth";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };
  return (
    <AuthLayout>
      <div className="max-w-[378px]">
        {/* Header */}

        <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Don’t have an account?&nbsp;
          <a href="#" className="text-blue-600 hover:underline">
            Create an Account
          </a>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <div>
            <FormInput
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              required
            />

            <a
              href="#"
              className="text-xs text-gray-500 hover:underline  mt-3 flex justify-end"
            >
              Forgot Password?
            </a>
          </div>

          <div className="flex items-start space-x-2  w-full  ">
            <Checkbox
              id="terms"
              checked={checked}
              onCheckedChange={setChecked}
              required
            />
            <Label
              htmlFor="terms"
              className="text-sm text-gray-600 leading-snug"
            >
              I agree to{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>
            </Label>
          </div>

          <Button className="w-full bg-[#265ED4]  hover:bg-blue-700 text-white font-semibold mt-4 rounded-md">
            Login
          </Button>

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="px-2 text-sm text-gray-500">Or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <FcGoogle size={22} /> Get Started with Google
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};
export default Login;
