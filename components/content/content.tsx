import React, { FC, useEffect, useState } from "react";

import LoadedContent from "@components/loaded-content";
import SkeletonLoading from "@components/skeleton-loading";
const Content: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getData = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(getData);
  });
  return (
    <>
      <section className="block py-10 md:py-20 px-6">
        <div className="max-w-[834px] mx-auto border-2 rounded-xl p-5 md:p-8">
          <h2 className="italic text-3xl text-center mb-5">example.com</h2>
          {loading ? (
            <SkeletonLoading domain="example.com" />
          ) : (
            <LoadedContent />
          )}
        </div>
      </section>
    </>
  );
};

export default Content;
