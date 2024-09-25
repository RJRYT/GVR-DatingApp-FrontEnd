import React, { useState, useEffect } from "react";
import axiosInstance from "../../../Instance/AxiosAdmin";
import { tableHead } from "../../../constants/subscription-table";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function SubscriptionTable() {
  const [subscriptions, setSubscriptions] = useState([]);
  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const res = await axiosInstance.get("/me/subscriptions");
        setSubscriptions(res.data);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    };

    fetchSubscriptions();
  }, []);

  const handleDelete = async (subscriptionId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete this subscription?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosInstance.delete(`/me/subscription/${subscriptionId}`)
          setSubscriptions((prevSubscriptions) =>
            prevSubscriptions.filter((sub) => sub._id !== subscriptionId)
          );
          toast.success("Subscription deleted successfully")
        } catch (error) {
          toast.error("Error deleting subscription");
          console.error("Error deleting subscription:", error);
        }
      }
    });
  };
  return (
    <table className="w-max lg:w-full border-separate border-spacing-y-3">
      <thead>
        <tr className="">
          {tableHead.map((head, index) => (
            <td
              key={index}
              className="px-3 md:px-10 py-3 border-b-2 border-gray-200 text-center text-sm md:text-base lg:text-lg font-semibold capitalize"
            >
              {head}
            </td>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {subscriptions.map((subscription, index) => (
          <tr
            key={index}
            className="bg-white text-center text-xs md:text-sm lg:text-base font-medium  shadow"
          >
            <td className="px-3 md:px-10 py-3 capitalize rounded-s-lg">
              {subscription.name}
            </td>
            <td className="p-3 capitalize">&#8377;{subscription.price}</td>
            <td className="p-3 capitalize">{subscription.description}</td>
            <td className="p-3 capitalize">
              <select
                className="p-3 capitalize border-none outline-none"
                defaultValue={subscription.status}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </td>

            <td className="p-3 ">{subscription.duration}</td>
            <td className="p-3 capitalize">{subscription.subscriptiontype}</td>
            <td className="p-3 capitalize rounded-e-lg">
              <RiDeleteBin6Line 
               className="cursor-pointer text-red-600"
               onClick={() => handleDelete(subscription._id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SubscriptionTable;
