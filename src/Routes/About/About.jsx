import React from "react";
import LangCard from "../../components/LangCard/LangCard";
import { langs } from "../../assets";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <section className="bg-faded">
      <header className="topPart flex lg:flex-row sm:flex-col max-w-[1250px] pt-20 mx-auto px-6 items-center justify-between mb-32">
        <div className="topLeft flex-4 flex flex-col sm:items-center lg:items-start justify-center">
          <h1 className="md:text-6xl sm:text-5xl leading-[1.1] font-semibold pb-10 border-b border-dark mb-10 lg:pr-10 sm:pr-0 lh-2 lg:text-left sm:text-center uppercase">
            This
            <br /> Website
            <br /> is a
            <br /> Portfolio <br /> Project
          </h1>
          <div>
            <h2 className="text-xl font-semibold lg:text-left sm:text-center sm:mb-10 lg:mb-0">
              By: Abdelrahman Qassem
            </h2>
          </div>
        </div>
        <div className="TopRight   flex justify-end  relative">
          <img
            className=" lg:w-[55%]  sm:w-[65%] z-[2] absolute lg:left-[-30px] lg:top-[50%] transform lg:translate-y-[-30%]
            drop-shadow-[0_100px_50px_rgba(0,0,0,0.1)]
            sm:bottom-[50%] sm:translate-y-[50%] sm:left-[50%] sm:translate-x-[-50%] lg:translate-x-0 
            "
            src="../../assets/portfolio-lap.png"
            alt="Abdelrahman Qassem"
          />
          <img
            src="../../assets/react-logo.jpg"
            alt="react logo"
            className=" w-[35%] rounded-full z-[2] absolute lg:right-10 lg:top-0
            shadow-[0_70px_90px_-20px_rgba(0,0,0,0.2)]
            sm:top-0 sm:right-[50%] sm:translate-x-[50%] lg:translate-x-0 sm:hidden lg:block
            "
          />
          <img
            src="../../assets/blank-square.jpg"
            alt="react logo"
            className="lg:w-[80%]   rounded-full  transform blur-[0.75rem] relative shadow-[0_20px_200px_0px_rgba(0,0,0,0.1)] lg:right-10 z-[1]"
          />

          <div>
            <h2></h2>
            <p></p>
          </div>
        </div>
      </header>
      <div className="usedLanguages max-w-[1250px] mx-auto px-6">
        <h2 className="text-4xl mb-10 text-center">Frameworks & libraries</h2>
        <div className="cards grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-6 items-center justify-center">
          {langs && langs.map((lang, i) => <LangCard key={i} lang={lang} />)}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default About;
