import React, { FC } from "react";
import GoogleDomains from "../../images/google_domains.png";
import DomainHost from "../domain-host";
import Loader from "../loader";

interface SkeletonLoadingProps {
  domain: string;
}

const SkeletonLoading: FC<SkeletonLoadingProps> = ({ domain }) => {
  return (
    <>
      <Loader size="md" text="Your DNS host is " />

      <h3 className="text-base text-txt-light mt-6">
        Looking up dns host for domain
      </h3>
      <p className="italic text-txt-dark mb-6">{domain}</p>

      <Loader size="sm" className="mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Loader size="lg" />
        <Loader size="lg" />
        <Loader size="lg" />
        <Loader size="lg" />
      </div>
    </>
  );
};

export default SkeletonLoading;
