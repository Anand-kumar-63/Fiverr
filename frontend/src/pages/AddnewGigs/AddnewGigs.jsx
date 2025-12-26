import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router";

const AddNewGigs = () => {
  const navigate = useNavigate();
  const [gigdata, setgigdata] = useState({
    title: "",
    category: "",
    coverimage: "",
    uploadimages: "",
    description: "",
    servicetitle: "",
    shortdescription: "",
    deliverytime: "",
    revisionnumber: "",
    addfeatures: "",
  });
  console.log(gigdata);
  const handlechange = (e) => {
    e.preventDefault();
    setgigdata((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const gigdata = {
      title: "",
      category: "",
      coverimage: "",
      uploadimages: "",
      description: "",
      servicetitle: "",
      shortdescription: "",
      deliverytime: "",
      revisionnumber: "",
      addfeatures: "",
    };
    try {
      const response = await axios.post("http://localhost:3000/gig/",
         gigdata, 
         {withCredentials: true}
      );
      if(!response.data){
        console.log("Error");
        return;
      }
      const gig = response.data;
      console.log(gig);
      navigate("/gigpage");
    } catch(error){
      console.log("gigcreation failed",error);
      return;
    }
  };

  return (
    <div className="p-4 md:p-4 flex flex-col items-center space-y-6">
      <h1 className="text-3xl text-gray-700 font-bold">Add New Gig</h1>
      <form
        action=""
        onSubmit={handlesubmit}
        className="grid grid-cols-1 select-none md:grid-cols-2 gap-x-10 w-full max-w-6xl "
      >
        {/* Left Column */}
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-2">
            <label htmlFor="title" className="text-lg font-bold text-gray-800">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handlechange}
              placeholder="e.g., I will do something I am good at"
              className="border-2 border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-none"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="category"
              className="text-lg font-semibold text-gray-800"
            >
              Category
            </label>
            <select
              name="category"
              id="category"
              onChange={handlechange}
              className="border-2 border-gray-300 rounded-sm p-2 w-full focus:outline-none focus:ring-none"
            >
              <option value="Design">Design</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Game Development">Game Development</option>
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="cover"
              className="text-lg font-semibold text-gray-800"
            >
              Cover Image
            </label>
            <input
              onChange={handlechange}
              className="w-full p-2 focus:outline-none focus:ring-none"
              type="file"
              name="coverimage"
              id="cover"
              multiple
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="upload-images"
              className="text-lg font-semibold text-gray-800"
            >
              Upload Images
            </label>
            <input
              onChange={handlechange}
              type="file"
              name="uploadimages"
              id="upload-images"
              className="w-full p-2 focus:outline-none focus:ring-none"
              multiple
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="description"
              className="text-lg font-semibold text-gray-800"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={6}
              onChange={handlechange}
              className="border-2 border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-none resize-y"
              placeholder="Provide a detailed description of your gig..."
            ></textarea>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-1">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="service-title"
              className="text-lg font-semibold text-gray-800"
            >
              Service Title
            </label>
            <input
              className="border-2 border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-none"
              onChange={handlechange}
              type="text"
              name="servicetitle"
              id="service-title"
              placeholder="e.g., Basic Package"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="short-description"
              className="text-lg font-semibold text-gray-800"
            >
              Short Description
            </label>
            <textarea
              name="shortdescription"
              id="short-description"
              rows={6}
              onChange={handlechange}
              className="border-2 border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-none resize-y"
              placeholder="A brief summary of your service..."
            ></textarea>
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="delivery-time"
              className="text-lg font-semibold text-gray-800"
            >
              Delivery Time
            </label>
            <input
              type="datetime-local"
              id="delivery-time"
              name="deliverytime"
              onChange={handlechange}
              placeholder="e.g., 3 days"
              className="border-2 border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-none"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="revision-number"
              className="text-lg font-semibold text-gray-800"
            >
              Revision Number
            </label>
            <input
              type="number"
              name="revisionnumber"
              id="revision-number"
              placeholder="e.g., 2"
              onChange={handlechange}
              className="border-2 border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-none"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="add-features"
              className="text-lg font-semibold text-gray-800"
            >
              Add features
            </label>
            <input
              type="text"
              id="add-features"
              name="addfeatures"
              onChange={handlechange}
              placeholder="e.g., Custom assets, Source files"
              className="border-2 border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-none"
            />
          </div>
        </div>
      </form>
      <button className="text-lg text-white font-bold bg-green-500 py-2 px-8 rounded-sm hover:bg-green-600 transition-colors duration-200">
        Create New Gig
      </button>

      <Footer />
    </div>
  );
};

export default AddNewGigs;
