import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import SubscriptionAddInput from "./SubscriptionAddInput";
import axiosInstance from "../../../Instance/AxiosAdmin";
import { toast } from "react-toastify";

function SubscriptionAddForm({ setValue }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    duration: "",
    currency: "",
    subscriptiontype: "",
    description: "",
    image: null,
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file, // Store the file directly
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} with value: ${value}`);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData,"////////")
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("duration", formData.duration);
    formDataToSend.append("currency", formData.currency);
    formDataToSend.append("subscriptiontype", formData.subscriptiontype);
    formDataToSend.append("description", formData.description);

    if (formData.image) {
      formDataToSend.append("image", formData.image); // Append image file directly
    }
  
       // Debugging: Log each form field value
       console.log("Form Data to Send:");
       for (let pair of formDataToSend.entries()) {
         console.log(pair[0] + ": " + pair[1]); // Log key-value pairs in FormData
       }
    try {
      const res = await axiosInstance.post("/subscription", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        toast.success("Subscription added successfully!");
        setValue(false);
      } else {
        toast.error(res.data.error);
      }
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
      <SubscriptionAddInput
        label="Currency"
        name="currency"
        value={formData.currency}
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

      <div className="relative flex justify-between items-center">
        <SubscriptionAddInput
          label="Image"
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImage}
        />
        <span className="absolute right-2 text-2xl text-gray-500">
          <CiImageOn />
        </span>
      </div>

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
