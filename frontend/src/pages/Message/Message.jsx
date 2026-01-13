import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@/Components/ui/button";

const Message = () => {
  const { Id } = useParams();
  console.log(Id);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const Queryclient = useQueryClient();

  // to fetch the messages
  const { isLoading, error, data } = useQuery({
    queryKey: ["messages", Id],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/message/${Id}`, {
        withCredentials: true,
      });
      console.log(response.data);
      return response.data;
    },
  });
  // to update the messages
  const mutationdata = useMutation({
    mutationFn: async (message) => {
      console.log(message);
      const response = await axios.post(
        `http://localhost:3000/message/`,
        message,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      return response?.data;
    },
    onSuccess: () => {
      Queryclient.invalidateQueries(["messages", Id]);
    },
  });

  // to mutate the data passing to the mutation function
  const handlesubmit = (e) => {
    e.preventDefault();
    const desc = e.target.desc.value;
    mutationdata.mutate({
      conversationId: Id,
      desc: desc,
    });
    e.target[0].value = "";
  };

  return (
    <div className="p-2">
      <span className="text-gray-600 ml-[420px]">
        <Link to={"/messages"}>Messages</Link> {"<" + "john doe" + "<"}
      </span>
      <div className="flex flex-col items-center justify-center">
        {isLoading ? (
          error ? (
            <div>Error</div>
          ) : (
            <p className="text-red-400 text-sm">Loading</p>
          )
        ) : (
          <div
            className={
              "overflow-auto h-[68vh] w-[50vw] m-2 border-x-2 border-gray-100 rounded-xl no-scrollbar"
              // m.userId === user._id ?
            }
          >
            {data.map((m) => {
              return (
                <div
                  className={
                    m.userId === user._id
                      ? "flex flex-row-reverse items-center justify-start m-2 rounded-4xl p-1"
                      : "flex flex-row items-center m-2 rounded-4xl p-1"
                  }
                  key={m._id}
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <p className="w-[280px] px-2 border-2 rounded-4xl p-2 break-words rounded-r-2xl h-auto text-sm text-gray-500">
                    {m.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        <hr />
        <form
          onSubmit={handlesubmit}
          className="flex flex-row items-center gap-2"
        >
          <textarea
            name="desc"
            id="desc"
            className="px-40 border-1 rounded-md"
            rows={4}
          />
          <button
            type="submit"
            className="px-10 text-white rounded-sm bg-green-500 py-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
