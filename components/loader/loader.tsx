import React, { FC } from "react";
import Image from "next/image";
import lg_loader from "../../images/lg_loader.svg";
import sm_loader from "../../images/sm_loader.svg";
import box_loader_1 from "../../images/box_loader_1.svg";
import box_loader_2 from "../../images/box_loader_2.svg";

interface LoaderProps {
  size: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

const Loader: FC<LoaderProps> = ({ size, text, className }) => {
  switch (size) {
    case "sm": {
      return (
        <div className={`block py-1 px-1 ${className}`}>
          <Image
            className="animate-pulse"
            alt="Loading"
            height="6"
            src={lg_loader.src}
            width="327"
          />
        </div>
      );
    }
    case "md": {
      return (
        <div className={`block py-1 px-1 bg-bg-light rounded-lg ${className}`}>
          <div className="flex min-h-[40px] md:min-h-[56px] justify-center items-center text-txt-dark  hover:text-txt-light">
            <span className="md:text-base text-xs  font-normal pr-2">
              {text}
            </span>
            <Image
              className="animate-pulse"
              alt="Loading"
              height="7"
              src={sm_loader.src}
              width="124"
            />
          </div>
        </div>
      );
    }
    default: {
      return (
        <div className={`block  border-2 rounded-lg p-3  ${className}`}>
          <div className="flex justify-between ">
            <Image
              className="animate-pulse"
              alt="Loading"
              height="64"
              src={box_loader_1}
              width="120"
            />
            <Image
              className="animate-pulse"
              alt="Loading"
              height="64"
              src={box_loader_2}
              width="120"
            />
          </div>
        </div>
      );
    }
  }
};

export default Loader;
