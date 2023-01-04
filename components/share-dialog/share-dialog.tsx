import React, { FC, useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import closeButton from "../../images/close.svg";
import Button from "../button";
import EmailChips from "../email-chips";
import Link from "next/link";
import fb from "../../images/fb.svg";
import tw from "../../images/tw.svg";
import git from "../../images/git.svg";

interface ShareDialogProps {
  show: boolean;
  close: () => void;
}

const ShareDialog: FC<ShareDialogProps> = ({ show, close }) => {
  const [directLink, setDirectLink] = useState<string>(
    "trady.dev/dns/aweasdkrh2903jas..."
  );
  const [emailList, setEmailList] = useState<string[]>([]);

  return (
    <Dialog className="relative z-100" open={show} onClose={() => close()}>
      <div className="fixed inset-0 flex items-center bg-bg-backdrop justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg rounded bg-white ">
          <Dialog.Title className="flex relative border-b px-5 py-4 font-semibold text-sm">
            Share DNS
            <button className="ml-auto hover:scale-150" onClick={() => close()}>
              <Image src={closeButton.src} width="9" height="9" alt="Close" />{" "}
            </button>
          </Dialog.Title>

          <div className="py-5 px-6">
            <label className="block text-txt-dark text-sm mb-2">
              Direct Link
            </label>
            <div className="relative mb-4">
              <input
                type="text"
                disabled
                onChange={(e) => setDirectLink(e.target.value)}
                value={directLink}
                className="block min-w-full px-3 py-3 pr-20 bg-bg-light border rounded-lg text-txt-light"
              />
              <div className="absolute bottom-[50%] translate-y-1/2 right-2">
                <Button
                  size="sm"
                  arrow={false}
                  label="Copy"
                  action={() => navigator.clipboard.writeText(directLink)}
                />
              </div>
            </div>
            <label className="block text-txt-dark text-sm mb-2">
              Send as an email invited
            </label>
            <EmailChips getEmails={setEmailList} />
            <div className="text-center mt-4">
              <Button
                action={() => {
                  console.log(emailList);
                }}
                label="Send Invited"
                arrow={false}
                size="md"
                color="dark"
              />
            </div>
            <div className="max-w-[140px] flex justify-between mx-auto mt-3">
              <Link href="#">
                <Image width={36} height={36} src={fb.src} alt="FB" />
              </Link>
              <Link href="#">
                <Image width={36} height={36} src={tw.src} alt="TW" />
              </Link>
              <Link href="#">
                <Image width={36} height={36} src={git.src} alt="GIT" />
              </Link>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ShareDialog;
