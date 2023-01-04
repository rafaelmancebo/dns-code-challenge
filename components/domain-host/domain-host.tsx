import React, { FC } from "react";
import Image from "next/image";

interface DomainHostProps {
  url: string;
  host: string;
  logo: string;
  text: string;
}

const DomainHost: FC<DomainHostProps> = ({ logo, url, host, text }) => {
  return (
    <div className="block py-1 px-1 bg-bg-light rounded-lg">
      <a
        className="flex min-h-[40px] md:min-h-[56px] justify-center items-center text-txt-dark  hover:text-txt-light"
        href={url}>
        <span className="md:text-base text-xs  font-normal pr-2">{text}</span>
        <Image alt={host} height="20" src={logo} width="123" />
      </a>
    </div>
  );
};

export default DomainHost;
