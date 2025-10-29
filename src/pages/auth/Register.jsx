import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { FcGoogle } from "react-icons/fc";
import FormInput from "@/common/Input";
import AuthLayout from "@/layout/Auth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify-otp?mode=modal");
  };
  return (
    <AuthLayout>
      <div className="max-w-[378px]">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-2">Create your free account</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Already using Barbell&CoffeeClub?&nbsp;
          <a href="/" className="text-blue-600 hover:underline">
            Login here
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
          <FormInput
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
          />
          <FormInput
            id="passwordConfirm"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            required
          />

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

          <Button className="w-full bg-[#265ED4]  hover:bg-blue-700 text-white font-semibold mt-4 rounded-md cursor-pointer">
             Continue
          </Button>

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="px-2 text-sm text-gray-500">Or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer"
          >
            <FcGoogle size={22} /> Get Started with Google
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};
export default Register;
