import React, { FC, useState } from "react";
import GoogleDomains from "@images/google_domains.png";
import Button from "@components/button";
import DomainHost from "@components/domain-host";
import ShareDialog from "@components/share-dialog";
const LoadedContent: FC = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  return (
    <>
      <DomainHost
        logo={GoogleDomains.src}
        text="Your DNS host is"
        host="Google Domains"
        url="https://domains.google/"
      />
      <h3 className="text-txt-light text-sm mt-6 mb-3">
        How do you want to update your DNS?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div>
          <Button
            action={() => {}}
            label="Update for me"
            arrow={true}
            size="lg"
            description="You just need to log in, we will update your DNS automatically"
          />
        </div>
        <div>
          <Button
            label="Add DNS Manually"
            arrow={true}
            size="lg"
            description="Follow our tutorial to update your DNS manually"
            color="light"
            action={() => {}}
          />
        </div>
      </div>
      <hr className="my-6" />
      <div className="flex justify-between items-center mt-6 mb-3">
        <h3 className="text-txt-dark text-sm md:text-base  mr-3">
          Want to send these to a friend/colleague to do for you?
        </h3>
        <Button
          action={() => {
            setShowDialog(true);
          }}
          label="Share"
          arrow={true}
          size="sm"
          color="dark"
        />
      </div>
      <hr className="my-6" />
      <h3 className="text-txt-light text-sm mt-6 mb-3">
        Are you a PRO at DNS? Update these records:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="border bg-bg-light p-3 rounded-lg">
          <div className="grid grid-cols-2 gap-5 ">
            <div className="">
              <span className="block text-xs text-txt-light">Type</span>
              <span className="block text-xs text-txt-dark font-semibold">
                A
              </span>
            </div>
            <div className="">
              <span className="block text-xs text-txt-light">Value</span>
              <span className="block text-xs text-txt-dark font-semibold">
                104.248.56.174
              </span>
            </div>
            <div className="">
              <span className="block text-xs text-txt-light">Name</span>
              <span className="block text-xs text-txt-dark font-semibold">
                @
              </span>
            </div>
            <div className="">
              <span className="block text-xs text-txt-light">Priority</span>
              <span className="block text-xs text-txt-light font-semibold">
                -
              </span>
            </div>
          </div>
        </div>
        <div className="border bg-bg-light p-3 rounded-lg">
          <div className="grid grid-cols-2 gap-5 ">
            <div className="">
              <span className="block text-xs text-txt-light">Type</span>
              <span className="block text-xs text-txt-dark font-semibold">
                CNAME
              </span>
            </div>
            <div className="">
              <span className="block text-xs text-txt-light">Value</span>
              <span className="block text-xs text-txt-dark font-semibold">
                ssl.trady.com
              </span>
            </div>
            <div className="">
              <span className="block text-xs text-txt-light">Name</span>
              <span className="block text-xs text-txt-dark font-semibold">
                WWW
              </span>
            </div>
            <div className="">
              <span className="block text-xs text-txt-light">Priority</span>
              <span className="block text-xs text-txt-light font-semibold">
                -
              </span>
            </div>
          </div>
        </div>
      </div>
      <ShareDialog show={showDialog} close={() => setShowDialog(false)} />
    </>
  );
};

export default LoadedContent;
