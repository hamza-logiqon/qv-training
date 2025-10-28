import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthLayout from "@/layout/Auth";
import SuccessModal from "@/common/SuccessModal";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60);
  const inputRefs = useRef([]);
  const [modal, setModal] = useState(false);

  // Timer logic ⏱️
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Handle OTP input
  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next
    if (value && index < 5) inputRefs.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    console.log("Entered OTP:", code);
    setModal(true);
    // TODO: call API to verify code
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimeLeft(60);
    console.log("Resend OTP requested");
  };

  return (
    <AuthLayout>
      <div className="max-w-[378px]">
        <h2 className="text-xl font-bold mb-2">Check your email!</h2>
        <p className="text-gray-600 text-sm mb-6">
          We’ve sent a 6-digit verification code to your email{" "}
          <span className="font-semibold">al**********5@gmail.com</span>. Please
          enter it below to continue.
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-200 rounded-md focus:border-blue-500 focus:ring-0"
            />
          ))}
        </div>

        {/* Verify button */}
        <Button
          onClick={handleVerify}
          className="w-full bg-[#265ED4]  hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
        >
          Verify
        </Button>

        {/* Timer + Resend */}
        <div className="mt-6 text-sm text-gray-600">
          {timeLeft > 0 ? (
            <p>00:{timeLeft.toString().padStart(2, "0")}</p>
          ) : (
            <p>
              Didn’t receive a 6 digit code?{" "}
              <button
                onClick={handleResend}
                className="text-blue-600 hover:underline font-medium"
              >
                Resend code
              </button>
            </p>
          )}
        </div>
        <SuccessModal
          open={modal}
          onOpenChange={setModal}
          title="Your email has been verified!"
          description="Welcome to Barbells&CoffeeClub. You’re all set to start your
              fitness journey."
          onContinue={"/login"}
          buttonTitle={"Continue to Login"}
        />
      </div>
    </AuthLayout>
  );
};
export default VerifyOtp;
