import React from "react";

const LangCard = ({ lang }) => {
  return (
    <div className="featureCard bg-white flex flex-col items-center justify-center p-10 rounded-xl hover:shadow-xl transition-all duration-500 transform hover:scale-105">
      <img alt="ReactJs" src={lang.image} className="w-16 mb-4" />
      <h3 className=" font-semibold">{lang.title}</h3>
    </div>
  );
};

export default LangCard;
