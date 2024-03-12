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
      className={`flex items-center justify-center px-3 py-2 rounded mt-3 ${className}`}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div>{svg}</div>
      <span className="ml-3 text-md font-bold">{text}</span>
    </button>
  );
};

export default ButtonFunction;
