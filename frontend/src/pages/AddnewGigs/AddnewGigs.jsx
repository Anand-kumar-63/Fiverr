import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { API_BASE_URL } from "@/lib/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddNewGigs = () => {
  const navigate = useNavigate();
  const [gigData, setGigData] = useState({
    title: "",
    category: "Design",
    desc: "",
    shortTitle: "",
    shortdesc: "",
    DeliveryTime: "",
    revisionNumber: "",
    price: "",
    CoverImg: "",
    Image: [],
    Features: [],
  });
  const [featureInput, setFeatureInput] = useState("");

  const handleChange = (e) => {
    setGigData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const uploadFile = async (file) => {
    const data = new FormData();
    data.append("file", file);
    const res = await axios.post(`${API_BASE_URL}/cloud/upload`, data, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });
    return res.data.url;
  };

  const handleCoverChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await uploadFile(file);
      setGigData((prev) => ({ ...prev, CoverImg: url }));
    } catch {
      toast.error("Cover image upload failed");
    }
  };

  const handleImagesChange = async (e) => {
    const files = Array.from(e.target.files || []);
    try {
      const urls = await Promise.all(files.map((f) => uploadFile(f)));
      setGigData((prev) => ({ ...prev, Image: urls }));
    } catch {
      toast.error("Gallery upload failed");
    }
  };

  const addFeature = () => {
    if (!featureInput.trim()) return;
    setGigData((prev) => ({
      ...prev,
      Features: [...prev.Features, featureInput.trim()],
    }));
    setFeatureInput("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        title: gigData.title,
        category: gigData.category,
        desc: gigData.desc,
        shortTitle: gigData.shortTitle,
        shortdesc: gigData.shortdesc,
        DeliveryTime: Number(gigData.DeliveryTime),
        revisionNumber: Number(gigData.revisionNumber),
        price: Number(gigData.price),
        CoverImg: gigData.CoverImg,
        Image: gigData.Image,
        Features: gigData.Features,
      };
      await axios.post(`${API_BASE_URL}/gig/`, payload, {
        withCredentials: true,
      });
      toast.success("Gig created");
      navigate("/gigs");
    } catch (err) {
      toast.error(err.response?.data?.message || "Gig creation failed");
    }
  };

  return (
    <div className="p-4 md:p-4 flex flex-col items-center space-y-6">
      <h1 className="text-3xl text-gray-700 font-bold">Add New Gig</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full max-w-6xl"
      >
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            name="title"
            placeholder="Gig title"
            onChange={handleChange}
            required
            className="border-2 rounded-sm p-2"
          />
          <select name="category" onChange={handleChange} className="border-2 rounded-sm p-2">
            <option value="Design">Design</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="Game Development">Game Development</option>
          </select>
          <input type="file" onChange={handleCoverChange} required />
          <input type="file" multiple onChange={handleImagesChange} />
          <textarea
            name="desc"
            rows={6}
            placeholder="Description"
            onChange={handleChange}
            required
            className="border-2 rounded-sm p-2"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            name="shortTitle"
            placeholder="Service title"
            onChange={handleChange}
            required
            className="border-2 rounded-sm p-2"
          />
          <textarea
            name="shortdesc"
            rows={4}
            placeholder="Short description"
            onChange={handleChange}
            required
            className="border-2 rounded-sm p-2"
          />
          <input
            type="number"
            name="DeliveryTime"
            placeholder="Delivery time (days)"
            onChange={handleChange}
            required
            className="border-2 rounded-sm p-2"
          />
          <input
            type="number"
            name="revisionNumber"
            placeholder="Revisions"
            onChange={handleChange}
            required
            className="border-2 rounded-sm p-2"
          />
          <input
            type="number"
            name="price"
            placeholder="Price ($)"
            onChange={handleChange}
            required
            className="border-2 rounded-sm p-2"
          />
          <div className="flex gap-2">
            <input
              type="text"
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              placeholder="Add feature"
              className="border-2 rounded-sm p-2 flex-1"
            />
            <button type="button" onClick={addFeature} className="bg-gray-200 px-4 rounded">
              Add
            </button>
          </div>
          <ul className="text-sm text-gray-600">
            {gigData.Features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
        <button
          type="submit"
          className="col-span-full text-lg text-white font-bold bg-green-500 py-2 px-8 rounded-sm hover:bg-green-600 md:col-span-2"
        >
          Create New Gig
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default AddNewGigs;
