import React from "react";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
import { useQuery } from "@tanstack/react-query";
const Orders = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/order/", {
        withCredentials: true,
      });
      console.log(response?.data);
      return response.data;
    },
  });
  return isLoading ? (
    <div>Loading please wait </div>
  ) : error ? (
    <div className="text-red-400 text-sm">{error.message}</div>
  ) : (
    <>
      <div className="px-66 py-10">
        <span className="flex flex-row justify-between mb-2 w-[73vw] ml-2">
          <h1 className="text-3xl font-bold">Orders</h1>
        </span>
        <table className="w-[74vw]">
          <tbody>
            <tr className="grid grid-cols-8 space-x-1 m-1">
              <td className="bg-red-100 px-12 py-2 flex1">Images</td>
              <td className="col-span-4 bg-red-100 px-12 py-2 flex1">Title</td>
              <td className="bg-red-100 px-12 py-2">Price</td>
              <td className="bg-red-100 px-12 py-2 flex1">Contact</td>
            </tr>
            {data.map((item) => {
              return (
                <tr
                  key={item._id}
                  className="grid grid-cols-8 text-gray-600 space-x-1 m-1"
                >
                  <td className="py-8 bg-green-100 p-10 flex justify-center items-center">
                    <img src={item.img} alt="img not found" className="rounded-full h-10 w-10" />
                  </td>
                  <td className="col-span-4 py-8 bg-green-100 p-10">
                    {item.title}
                  </td>
                  <td className="py-8 bg-green-100 p-10">{item.Price}</td>
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
