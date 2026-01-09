import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
// import review from "../review/review";
import axios from "axios";
import Review from "../review/review";
const Reviews = async ({ gigId }) => {
  const Queryclient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["getreviews"],
    queryFn: async () => {
      await axios.get(`http://localhost:3000/reviews/${gigId}`).then((res) => {
        console.log(res.data);
        return res.data;
      });
    },
  });
  const mutation = useMutation({
    mutationKey:["createreview"],
    mutationFn:async(review)=>{
      const response = await axios.post("http://localhost:3000/reviews/",review);
      console.log(response.data);
      return response.data;
    },
    onSuccess:()=>{
      Queryclient.invalidateQueries("createreview");
    }
  })

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({gigId , desc , star});
  }

return (
    <div className="mt-10 mb-10">
      <h1 className="text-2xl font-semibold">Reviews</h1>
      {/*WIP : return reviews mapping to the review component   */}
      {
        isLoading?"Loading"
        :error? "Something went wrong"
        :data.map((review)=><Review review={review} key={review._id}/>)
      }
      <div className="flex">
        <h3>Add a review</h3>
        <form action="" className="addForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="write your opinion" />
          <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
