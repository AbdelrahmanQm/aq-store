import React from "react";
import InspireLeft from "../InspireLeft/InspireLeft";
import InspireRight from "../InspireRight/InspireRight";

const InspireSection = () => {
  return (
    <div className="flex items-center max-w-[1250px] mx-auto px-6 lg:mt-20 sm:mt-2 lg:flex-row sm:flex-col-reverse sm:gap-6 lg:gap-0">
      <InspireLeft />
      <InspireRight />
    </div>
  );
};

export default InspireSection;
