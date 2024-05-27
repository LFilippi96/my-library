import React, { useRef } from "react";
import "./Select.css";
import Image from "next/image";
import icon from "./Shape.svg";

interface SelectProps {
  options: { value: string; label: string }[];
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ options, placeholder, onChange }: SelectProps) => {
  //   const selectRef = useRef(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleIconClick = () => {
    if (selectRef.current) {
      selectRef.current.click();
    }
  };
  
  return (
    <div className="select-container">
      <select ref={selectRef} className="select-field" onChange={onChange}>
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="select-icon" onClick={handleIconClick}>
        <Image src={icon} alt="SelectorIcon" />
      </div>
    </div>
  );
};
