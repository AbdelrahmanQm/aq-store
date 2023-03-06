import React from "react";
import NewArrivalGadget from "../NewArrivalGadget/NewArrivalGadget";
import TopSellersGadget from "../TopSellersGadget/TopSellersGadget";

const InspireRight = () => {
  return (
    <div className="flex smd:gap-4 sm:gap-10 lg:px-4 sm:px-0 flex-[2] w-full lg:mt-0 sm:mt-16 smd:flex-row sm:flex-col">
      <TopSellersGadget />
      <NewArrivalGadget />
    </div>
  );
};

export default InspireRight;
