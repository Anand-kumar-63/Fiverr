import React from "react";
import Footer from "../../Components/Footer/Footer";
// import { TbCategory } from "react-icons/tb";
const AddNewGigs = () => {
  return (
    <div className="p-8 md:p-20 flex flex-col items-center space-y-8">
      <h1 className="text-3xl text-gray-700 font-bold">Add New Gig</h1>
      <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-full max-w-6xl">
        {/* Left Column */}
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="title" className="text-lg font-semibold text-gray-800">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="e.g., I will do something I am good at"
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="category" className="text-lg font-semibold text-gray-800">
              Category
            </label>
            <select name="cat" id="category" className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="Design">Design</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Game Development">Game Development</option>
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="cover" className="text-lg font-semibold text-gray-800">
              Cover Image
            </label>
            <input className="w-full p-2" type="file" id="cover" multiple />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="upload-images" className="text-lg font-semibold text-gray-800">
              Upload Images
            </label>
            <input type="file" id="upload-images" className="w-full p-2" multiple />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="description" className="text-lg font-semibold text-gray-800">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={8}
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              placeholder="Provide a detailed description of your gig..."
            ></textarea>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="service-title" className="text-lg font-semibold text-gray-800">
              Service Title
            </label>
            <input className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="service-title" placeholder="e.g., Basic Package" />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="short-description" className="text-lg font-semibold text-gray-800">
              Short Description
            </label>
            <textarea
              name=""
              id="short-description"
              rows={8}
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              placeholder="A brief summary of your service..."
            ></textarea>
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="delivery-time" className="text-lg font-semibold text-gray-800">
              Delivery Time
            </label>
            <input
              type="number"
              id="delivery-time"
              name="delivery-time"
              placeholder="e.g., 3 days"
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="revision-number" className="text-lg font-semibold text-gray-800">
              Revision Number
            </label>
            <input type="number" id="revision-number" placeholder="e.g., 2" className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="add-features" className="text-lg font-semibold text-gray-800">
              Add features
            </label>
            <input type="text" id="add-features" placeholder="e.g., Custom assets, Source files" className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
      </form>
      <button className="text-lg text-white font-bold bg-green-500 py-3 px-8 rounded-md hover:bg-green-600 transition-colors duration-200">
        Create New Gig
      </button>

      <Footer />
    </div>
  );
};

export default AddNewGigs;