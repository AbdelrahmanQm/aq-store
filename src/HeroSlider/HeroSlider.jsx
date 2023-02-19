import React from "react";
import HeroSlide from "../HeroSlide/HeroSlide";
import { sliderSlides } from "../assets";
import { useState } from "react";
const defaultTouchEvents = {
  isClicked: false,
  startPoint: 0,
  endPoint: 0,
  distanceMoved: 0,
  currentWidth: undefined,
};
const HeroSlider = () => {
  const [touchEvents, setTouchEvents] = useState(defaultTouchEvents);
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === sliderSlides.length - 1 ? currentSlide : currentSlide + 1
    );
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? currentSlide : currentSlide - 1);
  };
  /* Slider Control with pointer */
  const handlePointerDown = (e) => {
    const slider = e.target.closest(".slider");
    slider.classList.remove("transition");
    slider.classList.remove("duration-500");
    slider.classList.remove("ease-in-out");
    slider.classList.add("cursor-grab");

    e.preventDefault();
    const targetWidth = Math.round(
      e.target.closest(".slidesContainer").getBoundingClientRect().width
    );

    setTouchEvents({
      ...touchEvents,
      startPoint: e.clientX,
      isClicked: true,
      currentWidth: targetWidth,
    });
  };
  const handlePointerMove = (e) => {
    if (!touchEvents.isClicked) return;
    const distance =
      (Math.round(e.clientX - touchEvents.startPoint) /
        Math.round(touchEvents.currentWidth)) *
      100;
    setTouchEvents({
      ...touchEvents,
      distanceMoved: distance,
    });
  };
  const handlePointerUp = (e) => {
    const slider = e.target.closest(".slider");
    slider.classList.add("transition");
    slider.classList.add("duration-500");
    slider.classList.add("ease-in-out");
    slider.classList.remove("cursor-grab");

    if (touchEvents.distanceMoved === 0) return;
    /*     if (touchEvents.distanceMoved < -1) nextSlide();
    if (touchEvents.distanceMoved > 1) prevSlide(); */
    touchEvents.distanceMoved < 0 ? nextSlide() : prevSlide();
    setTouchEvents({
      ...touchEvents,
      endPoint: e.clientX,
      isClicked: false,
      distanceMoved: 0,
    });
  };
  const handlePointerLeave = (e) => {
    handlePointerUp(e);
  };
  const handleOnClick = () => {
    setTouchEvents(defaultTouchEvents);
  };
  const setCurrSlide = (x) => setCurrentSlide(x);
  return (
    <div
      onClick={handleOnClick}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      className=" overflow-hidden slider w-full flex flex-col slidesContainer"
    >
      <div
        className={`flex slider transition  ease-in-out duration-500`}
        style={{
          transform: `translateX(${
            currentSlide * -100 + touchEvents.distanceMoved
          }%)`,
        }}
      >
        {sliderSlides.map((slide) => (
          <HeroSlide key={slide.id} item={slide} />
        ))}
      </div>
      <div className="flex gap-2  self-center">
        {sliderSlides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrSlide(i)}
            className={`h-2 sm:mb-10 lg:mb-0 mt-4  cursor-pointer rounded-full transition-all duration-500 ${
              currentSlide === i ? "bg-lightest w-6" : "bg-dark w-2"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
