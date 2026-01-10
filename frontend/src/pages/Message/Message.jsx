import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@/Components/ui/button";
const Message = () => {
  const { id } = useParams;
  const user = JSON.parse(localStorage.getItem("currentUser"));
  console.log(user);
  const Queryclient = useQueryClient();

  // to fetch the messages
  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: async (id) => {
      const response = await axios.get(`http://localhost:3000/message/${id}`, {
        withCredentials: true,
      });
      console.log(response);
      return response.data;
    },
  });

  // to update the messages
  const mutationdata = useMutation({
    queryFn: async (message) => {
      const response = await axios.post(
        `http://localhost:3000/message/`,
        message,
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    onSuccess: () => {
      Queryclient.invalidateQueries(["messages"]);
    },
  });

  // to mutate the data passing to the mutation function
  const handlesubmit = (e) => {
    e.preventDefault();
    mutationdata.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <span>
          <Link to={"/messages"}>Messages</Link> {"<" + "john doe" + "<"}
        </span>
        {isLoading ? (
          error ? (
            <div>Error</div>
          ) : (
            <div>Loading</div>
          )
        ) : (
          <div>
            {data.map((m) => {
              return (
                <div
                  className={
                    m.userId === currentUser._id ? "owner item" : "item"
                  }
                  key={m._id}
                >
                  <img
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <p>{m.desc}</p>
                </div>
              );
            })}
          </div>
        )}
        <hr />
        <form action="" className="flex flex-row items-center gap-2">
          <textarea
            name="message"
            id=""
            className="px-40 rounded-md"
            rows={4}
          />
          <Button type="submit" className="px-10 text-white bg-green-500 py-2">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Message;
