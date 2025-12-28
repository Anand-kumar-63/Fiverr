import React from "react";
import { Link, useParams } from "react-router";
import { FaStar } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { TfiReload } from "react-icons/tfi";
import { FiCheckSquare } from "react-icons/fi";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { IoSyncCircleOutline } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import axios from "axios";
import { reviews } from "./Data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { info } from "./Data";
import { Card, CardContent } from "@/Components/ui/card";
import { useQuery } from "@tanstack/react-query";

const arr = [1, 2, 3, 4, 5];
const categoriesData = [
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
];

const Gig = () => {
  const param = useParams();
  const id = param.gigId;
  
  // to get the gigdata from the Backend using the tanstack query 
  const { isPending, error, data } = useQuery({
    queryKey: ["get-querydata"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/gig/single/${id}`,
        {
          withCredentials: true,
        }
      );
      return response?.data;
    },
  });
  console.log(data);
  const gigdata = data?.data;
  console.log(gigdata);

  // to get the current user from the localhost
  const currentuser = localStorage.getItem("currentUser");
  const parsedUser = JSON.parse(currentuser);
  console.log(parsedUser);

  // to calculate the date
  const date = new Date(gigdata?.createdAt);
  const now = new Date();
  const difference = now - date;
  // this difference is going to be millisecond so divide it by milliseconds in 24 hours
  const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

  // Array for the stars
  const stararray = Array.from({
    length: Math.round(gigdata?.totalStar / gigdata?.starNumber),
  });

  return !isPending ? (
    <div className="">
      <div className="py-10 relative h-[600px] bg-gray-100">
        <section className="px-10 space-y-2 w-[800px] absolute left-56 ">
          <span>{`FIVERR > GRAPHICS & DESIGN`}</span>
          <h1 className="text-2xl text-black font-bold">{gigdata.title}</h1>

          <span className="space-y-2 flex flex-row items-center space-x-2">
            <h1 className="mt-2">{parsedUser.username}</h1>
          </span>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-2xl h-[440px]"
          >
            <CarouselContent>
              {gigdata.Image.map((img, index) => (
                <CarouselItem key={index} className="">
                  <div className="p-1 flex justify-center">
                    <Card className="h-[440px] w-[580px] flex justify-center items-center">
                      <CardContent className="flex items-center justify-center p-1">
                        <img
                          src={img}
                          alt="Alt"
                          className="object-cover rounded-xl"
                        ></img>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* payment card */}
        <div className="max-w-[360px] bg-transparent rounded-xl max-h-[300px] border p-2 flex flex-col space-y-2 fixed top-30 right-64 z-10">
          <span className="flex flex-row items-center justify-between">
            <h1>{gigdata.title}</h1>
            <p>${gigdata.price}</p>
          </span>

          <span>
            <p className="text-sm leading-relaxed">{gigdata.desc}</p>
          </span>

          <span className="flex flex-row justify-between">
            <span className="flex flex-row space-x-1 items-center">
              <GoClock />
              <h1>{differenceInDays} days later</h1>
            </span>
            <span className="flex flex-row space-x-1 items-center">
              <TfiReload />
              <h1>{gigdata.revisionNumber} Revisions</h1>
            </span>
          </span>

          <ul>
            {!isPending ? (
              gigdata.Features.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center space-x-1 text-green-500"
                >
                  {<FiCheckSquare />}
                  <h1 className="text-gray-700 text-sm">{item}</h1>
                </li>
              ))
            ) : (
              <div>loading</div>
            )}
          </ul>

          <button className="text-white bg-green-400 py-1 rounded">
            Continue
          </button>
        </div>
      </div>

      <div className="mx-[260px] w-[740px] m-2">
        <h1 className="text-2xl">About this page</h1>
        <p className="text-xl/0.8 leading-relaxed text-gray-500">
          {gigdata.desc}
        </p>
      </div>

      <div className="mx-[260px] w-[740px]">
        <h1 className="text-2xl">About The Seller</h1>
        <span className="flex flex-row items-center space-x-4">
          <span>
            <img
              src="/images/pexels.png"
              alt="Profile picture"
              className="object-cover h-16 w-16 rounded-full"
            />
          </span>
          <span className="flex flex-col space-y-1 max-w-[200px]">
            <h1>{parsedUser.username}</h1>
            <ul className="flex flex-row space-x-1 text-amber-300">
              {stararray.map((_,index)=>{
                return(
                   <FaStar key={index}/>
                )
              })}
            </ul>
            <Link to={"/Chat"}>
            <button className="bg-white border border-gray-300 px-2">
              Contact Me!
            </button>
            </Link>
          </span>
        </span>

        <div className="border h-auto p-4 rounded-sm border-gray-400 mt-4">
          <ul className="grid grid-cols-2 border-b-1 border-gray-400">
            {info.map((item, index) => (
              <li key={index} className="flex flex-col text-sm py-1">
                <span className="font-semibold text-gray-600">
                  {item.title}
                </span>
                <span className="text-gray-500">{item.data}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-500 text-12 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            modi vitae necessitatibus ullam dolor enim dolores tenetur unde ut
          </p>
        </div>

        {/* Reviews Section */}
        <div className="mt-10 mb-10">
          <h1 className="text-2xl font-semibold">Reviews</h1>
          {reviews.map((item, index) => {
            return (
              <div
                key={index}
                className="mt-4 border-b-1 rounded-xs p-2 border-gray-400"
              >
                <span className="flex flex-row space-x-2 items-center">
                  <span>
                    <img
                      src="/images/united-states.png"
                      alt="american logo"
                      className="rounded-full object-cover h-10 w-10"
                    />
                  </span>
                  <span className="text-gray-700 text-sm">
                    <h1>{item.user}</h1>
                    <h2>{item.country}</h2>
                    <span className="flex flex-row text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                  </span>
                </span>
                <p className="text-[16px] text-gray-500">{item.comment}</p>

                <div className="flex flex-row space-x-2 mt-2 text-gray-600">
                  <h1>HelpFull?</h1>
                  <span className="flex flex-row items-center space-x-1">
                    <FaRegThumbsUp />
                    yes
                  </span>
                  <span className="flex flex-row items-center space-x-1">
                    <FaRegThumbsDown />
                    No
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>


       {/* footer */}
      <div className="flex flex-col space-x-50 mx-10 p-10 my-6 select-none">
        <div className="flex flex-row justify-between mx-26 cursor-pointer">
          {arr.map((item, index) => {
            return (
              <div className="" key={index}>
                <h1 className="text-2xl text-gray-600">Categories</h1>
                <ul className="text-gray-400 space-y-2">
                  {categoriesData.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <section className="flex flex-row justify-between border-t-1 mt-10 pt-4 w-[80rem] ml-24 text-gray-500">
          <div className="flex flex-row space-x-2">
            <h1 className="text-2xl font-bold">Fiverr</h1>
            <p className="flex flex-row justify-center items-center">
              <IoSyncCircleOutline />
              Fiverr International Ltd. 2024
            </p>
          </div>
          <div className="flex flex-row text-2xl space-x-4">
            <SlSocialInstagram />
            <FaFacebook />
            <IoLogoLinkedin />
            <FaPinterest />
            <FaSquareXTwitter />
            <span className="flex flex-row space-x-1.5">
              <CiGlobe />
              <h1 className="text-[18px]">
                <i>English</i>
              </h1>
            </span>
            <AiTwotoneDollarCircle />
            <span className="text-[18px] h-6 rounded-sm">USD</span>
          </div>
        </section>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Gig;
