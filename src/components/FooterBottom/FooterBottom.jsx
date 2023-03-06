import React from "react";
import { ReactComponent as Rocket } from "../../svgs/rocket.svg";
import { ReactComponent as Money } from "../../svgs/money.svg";
import { ReactComponent as Credit } from "../../svgs/creditCard.svg";
import { ReactComponent as Support } from "../../svgs/headSet.svg";

const FooterBottom = () => {
  return (
    <div className="bg-darker">
      <div className="bg-darker pt-4 mt-10 pb-20 px-6 max-w-[1250px] mx-auto">
        <div className=" mx-auto grid lg:grid-cols-4 smd:grid-cols-2 items-center justify-between border-b border-dark pb-4">
          <div className="flex h-20 gap-2 py-2 items-center">
            <Rocket className="stroke-primaryfaded" />
            <div className="flex flex-col justify-center">
              <p className="font-semibold text-lighter hover:text-press cursor-pointer transition-all duration-300">
                Fast and free delivery
              </p>
              <p className="text-light text-sm">
                Free delivey for all orders over $200
              </p>
            </div>
          </div>
          <div className="flex h-20 gap-2 py-2 items-center">
            <Money className="stroke-primaryfaded" />
            <div className="flex flex-col justify-center">
              <p className="font-semibold text-lighter hover:text-press cursor-pointer transition-all duration-300">
                Money back guarantee
              </p>
              <p className="text-light text-sm">
                We return money within 30 days
              </p>
            </div>
          </div>
          <div className="flex h-20 gap-2 py-2 items-center">
            <Support className="stroke-primaryfaded" />
            <div className="flex flex-col justify-center">
              <p className="font-semibold text-lighter hover:text-press cursor-pointer transition-all duration-300">
                24/7 customer support
              </p>
              <p className="text-light text-sm">
                Friendly 24/7 customer support
              </p>
            </div>
          </div>
          <div className="flex h-20 gap-2 py-2 items-center">
            <Credit className="stroke-primaryfaded" />
            <div className="flex flex-col justify-center">
              <p className="font-semibold text-lighter hover:text-press cursor-pointer transition-all duration-300">
                Secure online payment
              </p>
              <p className="text-light text-sm">
                We possess SSL / Secure сertificate
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm max-w-[1250px] mx-auto mt-2">
          © All rights reserved. Abdelrahman Qassem
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
