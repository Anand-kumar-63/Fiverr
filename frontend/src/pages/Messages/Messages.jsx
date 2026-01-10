import React from "react";
import { useParams } from "react-router";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { Link } from "react-router";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import moment from "moment";
import axiosInstance from "@/lib/aixos.instance";
const Messages = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  console.log(user);
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/conversation/", {
        withCredentials: true,
      });
      console.log(response?.data);
      return response?.data;
    },
  });
  const mutation = useMutation({
    mutationFn: async (id) => {
      const response = await axios.post(`http://localhost:3000/conversation/${id}`,
      {
        withCredentials: true,
      }
    );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleclick = (id) => {
    mutation.mutate(id);
  };

  return (
    <>
      <div className="px-66 py-10">
        {isLoading ? (
          error ? (
            <div>error</div>
          ) : (
            <div>Loading</div>
          )
        ) : (
          <div>
            {" "}
            <span className="flex flex-row justify-between mb-2 w-[73vw] ml-2">
              <h1 className="text-3xl font-bold">Messsages</h1>
              <Link to={"/addnewgigs"}>
                <button className="w-[150px] bg-green-400 text-white py-1">
                  Add new Gig
                </button>
              </Link>
            </span>
            <table className="w-[74vw]">
              <thead>
                <tr className="grid grid-cols-7 space-x-1 m-1">
                  <td className="bg-red-100 px-12 py-2">Buyer</td>
                  <td className="col-span-4 bg-red-100 px-12 py-2">
                    Last Message
                  </td>
                  <td className="bg-red-100 px-12 py-2">Date</td>
                  <td className="bg-red-100 px-12 py-2">Action</td>
                </tr>
              </thead>

              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="grid grid-cols-7 text-gray-600 space-x-1 m-1"
                    >
                      <td className="py-8 bg-green-100 p-10">
                        {item.BuyerId.username}
                      </td>
                      <td className="col-span-4 py-8 bg-green-100 p-10">
                        {item.lastMessage}
                      </td>
                      <td className="py-8 bg-green-100 p-10">
                        {moment(item.createdAt).fromNow()}
                      </td>
                      <td className="py-8 bg-green-100 p-10">
                        {(user.isSeller && !item.readBySeller ||
                        !user.isSeller && !item.readByBuyer) && (
                          <button
                            className="px-4 text-sm bg-green-400 text-white"
                            onClick={() => handleclick(item.id)}
                          >
                            Mark as Read
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default Messages;
