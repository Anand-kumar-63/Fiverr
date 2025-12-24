import React from "react";
// import Cateforycard from "../CategoryCard/Cateforycard";
// import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
// // import cn from "../../utils/cn";
// import { CgArrowLeftO } from "react-icons/cg";
// import { CgArrowRightO } from "react-icons/cg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { Card, CardContent } from "../ui/card";
import Cateforycard from "../CategoryCard/Cateforycard";
import { Card } from "../ui/card";

const Slide = ({ cards }) => {
  // const [currentindex, setcurrentindex] = useState(0);
  // const Arraylength = Cards.Cards.length;
  // console.log(Arraylength / 4);
  // function Nextindex() {
  //   if (currentindex + 4 >= Cards.Cards.length - 1) setcurrentindex(0);
  //   else setcurrentindex(currentindex + 4);
  // }
  // function PrevIndex() {
  //   if (currentindex == 0) setcurrentindex(Cards.Cards.length - 4);
  //   else setcurrentindex(currentindex - 4);
  // }
  // console.log(currentindex);

  return (
    <ErrorBoundary fallback={<div>hey slider is not working</div>}>
    
      {/* <div className="relative w-[102rem]">
        <div
          className="flex flex-row gap-4 overflow-x-hidden w-[70rem] p-10 rounded-2xl mx-auto my-8 border-gray-200
          transition all duration-500 ease-in">
          {Cards.Cards.slice(currentindex, currentindex + 4).map(
            (card, index) => {
              return (
                <div
                  key={index}
                  className="relative      
                  transform transition-all duration-500 ease-in-out hover:scale-102
                "
                >
                  <Cateforycard carsdetails={card} />
                </div>
              );})}
        </div>
        <button
          className="absolute top-40 left-70 text-4xl"
          onClick={() => {
            PrevIndex();
          }}>
          <CgArrowLeftO />
        </button>
        <button
          className="absolute top-40 right-70 rounded-2xl text-4xl"
          onClick={() => {
            Nextindex();
          }}>
          <CgArrowRightO />
        </button>
      </div> */}
     
      <div className="w-full bg-white relative h-[60vh] flex justify-center items-center">
        <Carousel className="max-w-[1000px]">
          <CarouselContent>
            {cards.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className= "w-[420px] h-[410px] flex justify-center items-center">
                    <Cateforycard carsdetails={item} />
                  </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </ErrorBoundary>
  );
};
export default Slide;

Slide.propTypes = {
  cards: PropTypes.array.isRequired,
};
