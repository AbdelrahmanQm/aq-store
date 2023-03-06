import React from "react";
import PutYourAd from "../PutYourAd/PutYourAd";
import SaleBanner from "../SaleBanner/SaleBanner";

const AdSection = () => {
  return (
    <div className="flex max-w-[1250px] items-center justify-center  mx-auto gap-4 mt-14 px-6 md:flex-row sm:flex-col w-full">
      <SaleBanner />
      <PutYourAd />
    </div>
  );
};

export default AdSection;
