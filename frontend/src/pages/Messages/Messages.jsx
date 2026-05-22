import React from "react";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import moment from "moment";

const Messages = () => {
  const stored = localStorage.getItem("currentUser");
  const user = stored ? JSON.parse(stored) : null;
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/conversation/", {
        withCredentials: true,
      });
      return response?.data;
    },
    enabled: !!user,
  });

  const mutation = useMutation({
    mutationFn: async (id) => {
      const response = await axios.put(
        `http://localhost:3000/conversation/${id}`,
        {},
        { withCredentials: true }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["conversations"] });
    },
  });

  if (!user) {
    return (
      <div className="p-10">
        Please <Link to="/login" className="text-blue-500">login</Link> to view messages.
      </div>
    );
  }

  return (
    <>
      <div className="px-66 py-10">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">Failed to load messages</div>
        ) : (
          <div>
            <span className="flex flex-row justify-between mb-2 w-[73vw] ml-2">
              <h1 className="text-3xl font-bold">Messages</h1>
              <Link to="/addnewgigs">
                <button className="w-[150px] bg-green-400 text-white py-1">
                  Add new Gig
                </button>
              </Link>
            </span>
            <table className="w-[74vw]">
              <thead>
                <tr className="grid grid-cols-7 space-x-1 m-1">
                  <td className="bg-red-100 px-12 py-2">
                    {user.isSeller ? "Buyer" : "Seller"}
                  </td>
                  <td className="col-span-4 bg-red-100 px-12 py-2">Last Message</td>
                  <td className="bg-red-100 px-12 py-2">Date</td>
                  <td className="bg-red-100 px-12 py-2">Action</td>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => {
                  const otherUser = user.isSeller ? item.BuyerId : item.SellerId;
                  return (
                    <tr
                      key={item.id}
                      className="grid grid-cols-7 text-gray-600 space-x-1 m-1"
                    >
                      <td className="py-8 bg-green-100 p-10">
                        <Link to={`/message/${item.id}`}>
                          {otherUser?.username || "User"}
                        </Link>
                      </td>
                      <td className="col-span-4 py-8 bg-green-100 p-10">
                        {item.lastMessage}
                      </td>
                      <td className="py-8 bg-green-100 p-10">
                        {moment(item.updatedAt || item.createdAt).fromNow()}
                      </td>
                      <td className="py-8 bg-green-100 p-10">
                        {(user.isSeller && !item.readBySeller) ||
                        (!user.isSeller && !item.readByBuyer) ? (
                          <button
                            className="px-4 text-sm bg-green-400 text-white"
                            onClick={() => mutation.mutate(item.id)}
                          >
                            Mark as Read
                          </button>
                        ) : null}
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
