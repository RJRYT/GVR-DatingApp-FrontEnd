import React, { useState } from "react";
import SubscriptionAddInput from "./SubscriptionAddInput";
import axiosInstance from "../../../Instance/AxiosAdmin";
import { toast } from "react-toastify";

function SubscriptionAddForm({ setValue }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    duration: "",
    subscriptiontype: "",
    description: "",

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/me/subscription", formData)

      toast.success("Subscription added successfully!");
      setValue(false);
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data.message || "Something went wrong! Try again later."
      );
    }
  };

  return (
    <form className="mt-12 mb-5 grid gap-6" onSubmit={handleSubmit}>
      <SubscriptionAddInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <SubscriptionAddInput
        label="Price"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />
      <SubscriptionAddInput
        label="Duration"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
      />

      <select
        className="px-4 py-3 text-gray-400 border-2 border-gray-300 outline-none rounded-lg"
        name="subscriptiontype"
        value={formData.subscriptiontype}
        onChange={handleChange}
      >
        <option value="">Select Subscription Type</option>
        <option value="dating">Dating</option>
        <option value="matrimony">Matrimony</option>
        <option value="studyabroad">Study Abroad</option>
        <option value="jobportal">Job Portal</option>
      </select>

      <textarea
        rows={4}
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="px-4 py-3 border-2 border-gray-300 outline-none rounded-lg"
      ></textarea>

      <div className="flex justify-end gap-4">
        <button className="px-5 py-2 bg-black text-white rounded-lg">
          Save
        </button>
        <button
          type="button"
          onClick={() => setValue(false)}
          className="px-3 py-2 bg-red-600 text-white rounded-lg"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default SubscriptionAddForm;
