import React, { FC } from "react";
import Image from "next/image";
import dark_arrow_right from "@images/dark_arrow_right.svg";
import white_arrow_right from "@images/white_arrow_right.svg";

interface ButtonProps {
  label: string;
  description?: string;
  arrow: boolean;
  size: "sm" | "md" | "lg";
  color?: "light" | "dark";
  action: () => void;
}

const Button: FC<ButtonProps> = ({
  label,
  description,
  arrow,
  size,
  color,
  action,
}) => {
  const currectBgColor =
    color === "light"
      ? "bg-white text-txt-dark border"
      : "bg-bg-dark text-white";
  const currectTxtColor =
    color === "light" ? "text-txt-light" : "text-txt-light-gray";
  const currentPaddingRight = arrow ? "pr-11" : "pr-4";

  switch (size) {
    case "lg": {
      return (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            action();
          }}
          className={`block relative ${currectBgColor} rounded-lg p-4 ${currentPaddingRight} hover:opacity-70`}>
          <span className="block text-base font-semibold mb-1">{label}</span>
          <span className={`block text-xs  ${currectTxtColor}`}>
            {description}
          </span>
          {arrow && (
            <Image
              src={
                color === "light" ? dark_arrow_right.src : white_arrow_right.src
              }
              alt={label}
              width="20"
              height="20"
              className="absolute bottom-[50%] translate-y-1/2 right-4"
            />
          )}
        </a>
      );
    }
    case "md": {
      return (
        <a
          href="#"
          onClick={action}
          className={`inline-block max-h-[60px] min-w-[287px] relative ${currectBgColor} rounded-lg p-5  hover:opacity-70`}>
          <span className="block text-base font-semibold ">{label}</span>
        </a>
      );
    }
    default: {
      return (
        <a
          href="#"
          onClick={action}
          className={`inline-block max-h-[37px] relative ${currectBgColor} rounded-lg p-2 pl-4 ${currentPaddingRight} hover:opacity-70`}>
          <span className="block text-base font-semibold ">{label}</span>
          {arrow && (
            <Image
              src={
                color === "light" ? dark_arrow_right.src : white_arrow_right.src
              }
              alt={label}
              width="20"
              height="20"
              className="absolute bottom-[50%] translate-y-1/2 right-4"
            />
          )}
        </a>
      );
    }
  }
};

export default Button;
