import { Button } from "@/components/ui/button";

import { FcGoogle } from "react-icons/fc";
import FormInput from "@/common/Input";
import AuthLayout from "@/layout/Auth";
import { useState } from "react";
import SuccessModal from "@/common/SuccessModal";

const ResetPassword = () => {
  const [modal, setModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(true);
    // Handle login logic here
  };
  return (
    <AuthLayout>
      <div className="max-w-[378px]">
        {/* Header */}

        <h2 className="text-2xl font-bold mb-2">Create New Password</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Please set a strong password to secure your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            id="newPassword"
            label="New Password"
            type="password"
            placeholder="Enter your password"
            required
          />
          <FormInput
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            required
          />

          <Button className="w-full bg-[#265ED4]  hover:bg-blue-700 text-white font-semibold mt-4 rounded-md cursor-pointer">
            Reset Password
          </Button>
        </form>
        <SuccessModal
          open={modal}
          onOpenChange={setModal}
          title="Password Changed"
          description="Your password has been changed successfully."
          onContinue={"/"}
          buttonTitle={"Login Now"}
        />
      </div>
    </AuthLayout>
  );
};
export default ResetPassword;
