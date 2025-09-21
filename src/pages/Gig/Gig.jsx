import React from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { TfiReload } from "react-icons/tfi";
import { FiCheckSquare } from "react-icons/fi";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import { IoSyncCircleOutline } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { reviews } from "./Data";
// import { array } from "./Data";
import { info } from "./Data";

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
  const array = [
    {
      head: "Propmt Writing",
      Icon: <FiCheckSquare />,
    },
    {
      head: "Additional desgin",
      Icon: <FiCheckSquare />,
    },
    {
      head: "Art delivery",
      Icon: <FiCheckSquare />,
    },
    {
      head: "Image upscaling",
      Icon: <FiCheckSquare />,
    },
  ];
  return (
    <div className="">
      <div className="py-10 relative h-[560px] bg-gray-100">
        <section className="px-10 space-y-2 w-[800px] absolute left-56 ">
          <span>{`FIVERR > GRAPHICS & DESIGN`}</span>
          <h1 className="text-2xl text-black font-bold">
            I will create AI artwork for you
          </h1>

          <span className="space-y-2 flex flex-row items-center space-x-2">
            <h1 className="mt-2">John Doe</h1>
            <span className="text-yellow-200 flex flex-row space-x-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
          </span>

          <div>// image carousel</div>

          <div>
            <h1>About this page</h1>
            <p className="text-xl/0.8 leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
              fuga. Totam voluptate ex veniam debitis consequuntur voluptatibus
              quis magnam consectetur quos, et, expedita sit temporibus vero
              delectus. Vero sequi repudiandae iste quaerat magni, impedit dolor
              in aperiam ratione qui vitae aspernatur nobis omnis. Laboriosam,
              deleniti adipisci quae officiis quis consequuntur necessitatibus
              vero ipsam labore, accusantium dolorem!
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              incidunt perferendis laborum impedit a explicabo aperiam rerum
              eaque reiciendis. Eius aperiam aut aliquid voluptas? Numquam
              accusantium assumenda a in repellat quia aliquid enim? Eaque
              nostrum porro facilis fugit aperiam corrupti est dolorum
              consectetur doloribus nesciunt consequuntur rerum laborum
              consequatur id architecto nulla qui, iste explicabo ab vel odio
              ducimus quia! Veniam quaerat nobis facere eum. A earum ipsum
              dolore delectus corrupti nemo modi tenetur quod adipisci
              repellendus. Quod accusamus placeat sed similique magnam provident
              facilis, fuga eius est assumenda quo dolorum excepturi, optio
              repudiandae, vitae ducimus cum ad ab dignissimos!
            </p>
          </div>
        </section>

        {/* payment card */}
        <div className="max-w-[360px] max-h-[300px] border p-2 flex flex-col space-y-2 fixed top-30 right-64 z-10">
          <span className="flex flex-row items-center justify-between">
            <h1>1 AI generated artwork</h1>
            <p>$59.90</p>
          </span>

          <span>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              magni necessitatibus suscipit pariatur illo nobis magnam, culpa
              non saepe reprehenderit quod hic esse ullam repellendus.
            </p>
          </span>

          <span className="flex flex-row justify-between">
            <span className="flex flex-row space-x-1 items-center">
              <GoClock />
              <h1>2 days later</h1>
            </span>
            <span className="flex flex-row space-x-1 items-center">
              <TfiReload />
              <h1>3 Revisions</h1>
            </span>
          </span>

          <ul>
            {array.map((item, index) => (
              <li
                key={index}
                className="flex flex-row items-center space-x-1 text-green-500"
              >
                {item.Icon}
                <h1 className="text-gray-700 text-sm">{item.head}</h1>
              </li>
            ))}
          </ul>

          <button className="text-white bg-green-400 py-1 rounded">
            Continue
          </button>
        </div>
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
            <h1>Anna Bell</h1>
            <ul className="flex flex-row space-x-1 text-amber-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </ul>
            <button className="bg-white border border-gray-300 rounded-2xl px-2 w-[120px]">
              Contact Me!
            </button>
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
            nobis debitis repudiandae molestias quae sequi, fugiat minus soluta
            ratione, itaque cum, quod sunt corrupti? Qui ea minima architecto
            quis? Consequuntur eveniet dolore tempore cupiditate sapiente iste
            tenetur id temporibus maxime officia mollitia, corrupti voluptas,
            ipsam omnis nam hic sunt placeat.
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
  );
};

export default Gig;
