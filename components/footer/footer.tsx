import React, { FC } from "react";
import Image from "next/image";

interface HeaderProps {
  url: string;
  alt: string;
  logo: string;
}

const Header: FC<HeaderProps> = ({ logo, url, alt }) => {
  return (
    <header className="block ">
      <a
        className="flex  justify-center items-center text-txt-light hover:opacity-80 opacity-40"
        href={url}>
        <Image alt={alt} height="20" src={logo} width="68" />
      </a>
    </header>
  );
};

export default Header;
