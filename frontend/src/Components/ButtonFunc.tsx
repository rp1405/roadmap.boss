import React from "react";

interface ButtonProps {
  backgroundColor: string;
  text: string;
  svg: React.ReactNode;
  textColor: string;
  className?: string;
}

const ButtonFunction: React.FC<ButtonProps> = ({
  backgroundColor,
  text,
  svg,
  textColor,
  className,
}) => {
  return (
    <button
      className={`flex items-center justify-center px-3 py-2 rounded mt-3 whitespace-nowrap hover:brightness-50 ${className}`}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div className="ml-1 mr-1">{svg}</div>
      <span className="text-md font-bold hidden md:block">{text}</span>
    </button>
  );
};

export default ButtonFunction;
