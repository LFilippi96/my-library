import React from "react";
import "./InputHogar.css"; // Asegúrate de que este archivo exista y esté en la misma carpeta que InputHogar.tsx
import Image from "next/image";
import ImageX from "./Shape.svg";
interface InputProps {
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: () => void;
}

export const InputHogar = ({
  type = "text", // Default value for type
  value = "",
  placeholder,
  ...props
}: InputProps) => {
  return (
    <div className="input-container">
      <input type="text" placeholder={placeholder} className="input-field" />
      <div className="input-icon">
        <Image src={ImageX} alt="Search icon" width={20} height={20} />
      </div>
    </div>
  );
};
