import React from "react";
// import { use } from 'react'
// import { useSearchParams } from 'react-router';
import { useParams } from "react-router";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router";
const Messages = () => {
  const data = [
    {
      Buyer: "John Doe",
      LastMessage: "Is this item still available?",
      Date: "2025-09-20",
    },
    {
      Buyer: "Emily Smith",
      LastMessage: "Can you provide a discount?",
      Date: "2025-09-21",
    },
    {
      Buyer: "Michael Johnson",
      LastMessage: "I’d like to place a bulk order.",
      Date: "2025-09-22",
    },
    {
      Buyer: "Sophia Brown",
      LastMessage: "When can I expect delivery?",
      Date: "2025-09-23",
    },
    {
      Buyer: "David Wilson",
      LastMessage: "Thanks for the quick response!",
      Date: "2025-09-24",
    },
  ];
  return (
    <>
      <div className="px-66 py-10">
        <span className="flex flex-row justify-between mb-2 w-[73vw] ml-2">
          <h1 className="text-3xl font-bold">Messsages</h1>
          <Link>
            <button className="w-[150px] bg-green-400 text-white py-1">
              Add new Gig
            </button>
          </Link>
        </span>
        <table className="w-[74vw]">
          <tr className="grid grid-cols-7 space-x-1 m-1">
            <td className="bg-red-100 px-12 py-2">Buyer</td>
            <td className="col-span-4 bg-red-100 px-12 py-2">Last Message</td>
            <td className="bg-red-100 px-12 py-2">Date</td>
            <td className="bg-red-100 px-12 py-2">Action</td>
          </tr>
          {data.map((item, index) => {
            return (
              <tr
                key={index}
                className="grid grid-cols-7 text-gray-600 space-x-1 m-1"
              >
                <td className="py-8 bg-green-100 p-10">{item.Buyer}</td>
                <td className="col-span-4 py-8 bg-green-100 p-10">{item.LastMessage}</td>
                <td className="py-8 bg-green-100 p-10">{item.Date}</td>
                <td className="py-8 bg-green-100 p-10">
                  <button className="px-4 text-sm bg-green-400 text-white">
                    Mark as Read
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <Footer />
    </>
  );
};
export default Messages;

// <div className="grid grid-cols-7 gap-2">
//         <div className="col-span-1 h-[70vh] bg-green-50 px-4 text-gray-600">
//           <h1 className="border-b-2 border-gray-200">Buyer</h1>
//           <ul className="flex flex-col space-y-4">
//             {Buyerobj.map((item, index) => {
//               return <li key={index}>{item}</li>;
//             })}
//           </ul>
//         </div>
//         <div className="col-span-4 bg-amber-50 px-4">
//           <h1 className="border-b-2 border-gray-200">Lastname</h1>
//           <ul className="text-gray-600 space-y-4">
//             {desc.map((item, index) => {
//               return <li key={index}>{item}</li>;
//             })}
//           </ul>
//         </div>
//         <div className="bg-red-50 px-4 text-gray-600">
//           <h1 className="border-b-2 border-gray-300">Date</h1>
//           <ul className="space-y-4">
//             {date.map((item, index) => {
//               return <li key={index}>{item}</li>;
//             })}
//           </ul>
//         </div>
//         <div className="bg-blue-50 text-gray-500 px-4">
//           <h1 className="border-b-2 border-gray-300">Action</h1>
//         </div>
//       </div>
