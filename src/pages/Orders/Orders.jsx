import React from "react";
// import { use } from 'react'
// import { useSearchParams } from 'react-router';
import { useParams } from "react-router";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router";
const Orders = () => {
  const ordersdata = [
    {
      Image: "/images/gig1.png",
      Title: "Gig1",
      Price: 88,
      Buyer: "123",
      Contact: "delete",
    },
    {
      Image: "/images/gig1.png",
      Title: "Gig1",
      Price: 88,
      Buyer: "124",
      Contact: "delete",
    },
    {
      Image: "/images/gig1.png",
      Title: "Gig1",
      Price: 88,
      Buyer: "125",
      Contact: "delete",
    },
    {
      Image: "/images/gig1.png",
      Title: "Gig1",
      Price: 88,
      Buyer: "126",
      Contact: "delete",
    },
    {
      Image: "/images/gig1.png",
      Title: "Gig1",
      Price: 88,
      Buyer: "127",
      Contact: "delete",
    },
    {
      Image: "/images/gig1.png",
      Title: "Gig1",
      Price: 88,
      Buyer: "128",
      Contact: "delete",
    },
  ];

  return (
    <>
      <div className="px-66 py-10">
        <span className="flex flex-row justify-between mb-2 w-[73vw] ml-2">
          <h1 className="text-3xl font-bold">Orders</h1>
        </span>
        <table className="w-[74vw]">
          <tbody>
          <tr className="grid grid-cols-8 space-x-1 m-1">
            <td className="bg-red-100 px-12 py-2">Images</td>
            <td className="col-span-4 bg-red-100 px-12 py-2">Title</td>
            <td className="bg-red-100 px-12 py-2">Price</td>
            <td className="bg-red-100 px-12 py-2">Buyers</td>
            <td className="bg-red-100 px-12 py-2">Contact</td>
          </tr>
          {ordersdata.map((item, index) => {
            return (
              <tr
                key={index}
                className="grid grid-cols-8 text-gray-600 space-x-1 m-1"
              >
                <td className="py-8 bg-green-100 p-10">{item.Image}</td>
                <td className="col-span-4 py-8 bg-green-100 p-10">
                  {item.Title}
                </td>
                <td className="py-8 bg-green-100 p-10">{item.Price}</td>
                <td className="py-8 bg-green-100 p-10">{item.Buyer}</td>
                <td className="py-8 bg-green-100 p-10">
                  <button className="px-4 text-sm bg-green-400 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};
export default Orders;
