import React, { FC } from "react";
import Image from "next/image";

interface IHeader {
  url: string;
  alt: string;
  logo: string;
  text: string;
}

const Header: FC<IHeader> = ({ logo, url, alt, text }) => {
  return (
    <header className="block border-b">
      <a
        className="flex min-h-[62px] md:min-h-[72px] justify-center items-center text-txt-light hover:text-txt-dark"
        href={url}>
        <span className="text-sm md:text-base  font-normal pr-2">{text}</span>
        <Image alt={alt} height="20" src={logo} width="68" />
      </a>
    </header>
  );
};

export default Header;
