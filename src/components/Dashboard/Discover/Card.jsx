import React from "react";

const profiles = [
  {
    name: "Jennifer",
    age: 20,
    city: "HANOVER",
    distance: 2.2,
    match: 90,
    image: "https://i.postimg.cc/yN0dCR0d/flattering-poses-for-women.webp",
    isNew: true,
  },
  {
    name: "Vanessa",
    age: 18,
    city: "MUNICH",
    distance: 4.8,
    match: 94,
    image: "https://i.postimg.cc/7ZGhXd6S/011cb1d62b75d2d0af5f55300f04a63c.jpg",
    isNew: true,
  },
  {
    name: "Halima",
    age: 19,
    city: "BERLIN",
    distance: 16,
    match: 89,
    image:
      "https://i.postimg.cc/1zbpJDs3/health-fitness-2015-06-iphone-phone-social-media-taxi-car-handbag-stocksy-main.webp",
    isNew: true,
  },
  {
    name: "Vanesa",
    age: 18,
    city: "MUNICH",
    distance: 4.8,
    match: 94,
    image: "https://i.postimg.cc/7ZGhXd6S/011cb1d62b75d2d0af5f55300f04a63c.jpg",
    isNew: false,
  },
  {
    name: "Jenni",
    age: 20,
    city: "HANOVER",
    distance: 2.2,
    match: 90,
    image: "https://i.postimg.cc/yN0dCR0d/flattering-poses-for-women.webp",
    isNew: false,
  },
  {
    name: "Halima",
    age: 19,
    city: "BERLIN",
    distance: 16,
    match: 89,
    image:
      "https://i.postimg.cc/1zbpJDs3/health-fitness-2015-06-iphone-phone-social-media-taxi-car-handbag-stocksy-main.webp",
    isNew: false,
  },
];

const ProfileCard = ({ name, age, city, distance, image, isNew }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg relative flex flex-col items-center space-y-2">
      <div className="relative bg-white rounded-3xl block w-36 h-52">
        <img
          src={image}
          alt={`${name}`}
          className="w-full h-full object-cover rounded-3xl"
        />
        {isNew && (
          <div className="absolute border-2 border-[#d887ca] mt-3 top-0 left-1/3 transform -translate-x-3/4 bg-fuchsia-950 text-white p-0.5 px-2 rounded-md flex items-center justify-center">
            <p className="text-xs font-semibold uppercase">NEW</p>
          </div>
        )}

        <div
          className={`absolute bottom-0 left-0 right-0 h-1/2 rounded-br-3xl rounded-bl-3xl bg-gradient-to-t from-fuchsia-900 via-transparent to-transparent bg-opacity-30 p-2 text-center`}
        >
          <div
            className={`${name === "Vanessa" ? "border-2 border-white" : ""}`}
          >
            <div className="rounded-full p-1 mx-3 bg-opacity-70 font-medium text-xs border border-[#c7b8c4] bg-[#947789] flex items-center justify-center">
              <div className="text-white">
                {distance.toFixed(1).replace(".", ",")} km away
              </div>
            </div>
            <div className="text-white mt-2 mb-1 font-medium text-md flex items-center justify-center">
              {name}, {age}
              {name === "Jennifer" && (
                <span className="bg-green-400 h-2 w-2 rounded-full ml-2"></span>
              )}
            </div>
            <div className="text-gray-300 font-medium text-sm tracking-widest">
              {city}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="mt-1 xl:max-w-[768px] bg-white">
      <div className="flex justify-start py-5 overflow-y-auto hide-scrollbar">
        <div className="flex gap-4 mx-2">
          {profiles.map((profile) => (
            <ProfileCard key={profile.name} {...profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
