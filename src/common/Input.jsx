import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function FormInput({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="relative mt-1">
        <Input
          id={id}
          type={inputType}
          placeholder={placeholder}
          required={required}
        />
        {isPassword && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer text-sm select-none"
          >
            {showPassword ? "hide" : "view"}
          </span>
        )}
      </div>
    </div>
  );
}
