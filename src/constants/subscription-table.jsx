import subscriptionImg from "../assets/Admin/subscription.png";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export const tableHead = [
  "name",
  "image",
  "price",
  "description",
  "status",
  "duration",
  "subscription type",
  "",
  ""
];

export const tableBody = [
  {
    name: "Plan 1",
    image: subscriptionImg,
    price: 49,
    description: "plan description",
    status: "active",
    duration: "xx/xx/xxxx",
    type: "dating",
    icon1: <FaRegEdit />,
    icon2: <RiDeleteBin6Line />,
  },
  {
    name: "Plan 1",
    image: subscriptionImg,
    price: 49,
    description: "plan description",
    status: "active",
    duration: "xx/xx/xxxx",
    type: "matrimony",
    icon1: <FaRegEdit />,
    icon2: <RiDeleteBin6Line />,
  },
  {
    name: "Plan 1",
    image: subscriptionImg,
    price: 49,
    description: "plan description",
    status: "active",
    duration: "xx/xx/xxxx",
    type: "job portal",
    icon1: <FaRegEdit />,
    icon2: <RiDeleteBin6Line />,
  },
  {
    name: "Plan 1",
    image: subscriptionImg,
    price: 49,
    description: "plan description",
    status: "active",
    duration: "xx/xx/xxxx",
    type: "study abroad",
    icon1: <FaRegEdit />,
    icon2: <RiDeleteBin6Line />,
  },
];