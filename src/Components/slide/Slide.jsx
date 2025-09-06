import React from "react";
import Cateforycard from "../CategoryCard/Cateforycard";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import cn from "../../utils/cn";
import { CgArrowLeftO } from "react-icons/cg";
import { CgArrowRightO } from "react-icons/cg";
const Slide = (Cards) => {
  const [currentindex, setcurrentindex] = useState(0);
  const Arraylength = Cards.Cards.length;
  console.log(Arraylength / 4);
  // to show four slides at a ti
  function Nextindex() {
    if (currentindex + 4 >= Cards.Cards.length - 1) setcurrentindex(0);
    else setcurrentindex(currentindex + 4);
  }
  // function to call when to previous index
  function PrevIndex() {
    if (currentindex == 0) setcurrentindex(Cards.Cards.length - 4);
    else setcurrentindex(currentindex - 4);
  }
  // Funtion to slide the slider
  // function Slider(currentindex){
  //   for);
  // }

  console.log(currentindex);
  return (
    <ErrorBoundary fallback={<div>hey slider is not working</div>}>
      <div className="relative w-[102rem]">
        <div
          className="flex flex-row gap-4 overflow-x-hidden w-[70rem] p-10 rounded-2xl mx-auto my-8 border-gray-200
          transition all duration-500 ease-in
          "
        >
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
              );
            }
          )}
        </div>
        {/* next btn */}
        <button
          className="absolute top-40 left-70 text-4xl"
          onClick={() => {
            PrevIndex();
          }}
        >
          <CgArrowLeftO />
        </button>
        {/* Prev btn */}
        <button
          className="absolute top-40 right-70 rounded-2xl text-4xl"
          onClick={() => {
            Nextindex();
          }}
        >
          <CgArrowRightO />
        </button>

        {/* <div className="absolute top-70 left-180">
          {
            Cards.Cards.slice(0,Arraylength).map((item , index)=>{
              return(
                <button key={index} className={cn(`text-9xl text-gray-200 hidden`,currentindex==index&&`text-yellow-200 block`)}>.</button>
              )
            })
          }
        </div>  */}
      </div>
    </ErrorBoundary>
  );
};
export default Slide;
