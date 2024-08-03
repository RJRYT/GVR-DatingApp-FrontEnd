import React from "react";
import MyStory from "../../../assets/story/profile1.png";
import Selena from "../../../assets/story/profile2.png";
import Fabian from "../../../assets/story/profile3.png";
import Clara from "../../../assets/story/profile4.png";
import Ryan from "../../../assets/story/profile5.png";

const images = [
  { src: MyStory, alt: "My Story", label: "My Story", isMyStory: true },
  { src: Selena, alt: "Selena", label: "Selena", isMyStory: false },
  { src: Fabian, alt: "Fabian", label: "Fabian", isMyStory: false },
  { src: Clara, alt: "Clara", label: "Clara", isMyStory: false },
  { src: Ryan, alt: "Ryan", label: "Ryan", isMyStory: false },
];

const Story = () => {
  return (
    <div className="mt-1">
      <div className="flex justify-center px-2 py-5">
        <ul className="flex md:gap-4 max-md:gap-[1px]">
          {images.map((image, index) => (
            <li
              key={index}
              className="relative flex flex-col items-center space-y-2 max-md:w-[80px]"
            >
              <div className="bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 rounded-full p-0.5">
                <a
                  href="#"
                  className="relative bg-white rounded-full block p-1"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-md:w-[60px] max-md:h-[60px] md:w-[80px] md:h-[80px] rounded-full object-cover"
                  />
                  {image.isMyStory && (
                    <button className="absolute bottom-0 right-0 bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xl">
                      +
                    </button>
                  )}
                </a>
              </div>
              <a href="#">{image.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Story;
