import React from "react";
import MatchCard from "./MatchCard";

const matches = [
  {
    name: "James",
    age: 20,
    city: "HANOVER",
    distance: 1.3,
    match: 90,
    image:
      "https://healthfactorial.s3.amazonaws.com/media/public/posts_images/food.jpg",
  },
  {
    name: "Eddie",
    age: 23,
    city: "DORTMUND",
    distance: 2,
    match: 94,
    image: "https://i.postimg.cc/9MKLp7jm/Screenshot-2024-08-03-165931.png",
  },
  {
    name: "Brandon",
    age: 20,
    city: "HAMBURG",
    distance: 2.5,
    match: 89,
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Alfredo",
    age: 20,
    city: "HAMBURG",
    distance: 2.5,
    match: 80,
    image: "https://i.postimg.cc/wMWL2KNh/Screenshot-2024-08-03-165811.png",
  },
  {
    name: "James",
    age: 20,
    city: "HANOVER",
    distance: 1.3,
    match: 90,
    image:
      "https://healthfactorial.s3.amazonaws.com/media/public/posts_images/food.jpg",
  },
  {
    name: "Alfredo",
    age: 20,
    city: "HAMBURG",
    distance: 2.5,
    match: 80,
    image: "https://i.postimg.cc/wMWL2KNh/Screenshot-2024-08-03-165811.png",
  },
  {
    name: "James",
    age: 20,
    city: "HANOVER",
    distance: 1.3,
    match: 90,
    image:
      "https://healthfactorial.s3.amazonaws.com/media/public/posts_images/food.jpg",
  },
  {
    name: "Eddie",
    age: 23,
    city: "DORTMUND",
    distance: 2,
    match: 94,
    image: "https://i.postimg.cc/9MKLp7jm/Screenshot-2024-08-03-165931.png",
  },
  {
    name: "Brandon",
    age: 20,
    city: "HAMBURG",
    distance: 2.5,
    match: 89,
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Alfredo",
    age: 20,
    city: "HAMBURG",
    distance: 2.5,
    match: 80,
    image: "https://i.postimg.cc/wMWL2KNh/Screenshot-2024-08-03-165811.png",
  },
  {
    name: "James",
    age: 20,
    city: "HANOVER",
    distance: 1.3,
    match: 90,
    image:
      "https://healthfactorial.s3.amazonaws.com/media/public/posts_images/food.jpg",
  },
  {
    name: "Alfredo",
    age: 20,
    city: "HAMBURG",
    distance: 2.5,
    match: 80,
    image: "https://i.postimg.cc/wMWL2KNh/Screenshot-2024-08-03-165811.png",
  },
];

const MatchGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
      {matches.map((match, index) => (
        <MatchCard key={index} {...match} />
      ))}
    </div>
  );
};

export default MatchGrid;
