import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from '../../../Instance/Axios'


const Story = () => {
  const [stories,setStories] =useState([])
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get('/users/stories');
        
        setStories(response.data.stories);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchStories();
  }, []);
  return (
    <div className="mt-1 xl:max-w-[768px]">
      <div className="flex justify-start py-5 overflow-y-auto hide-scrollbar">
        <ul className="flex gap-4 mx-2">
          {stories.map((story, index) => (
            <li
              key={index}
              className="relative flex flex-col items-center space-y-2 max-md:w-[80px]"
            >
              <div className="bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 rounded-full p-0.5">
                <Link
                  to={`/dashboard/story?video=${encodeURIComponent(story.shortReel)}&username=${encodeURIComponent(story.username)}&profilePic=${encodeURIComponent(story.profilePic)}`}
                  className="relative bg-white rounded-full block p-1 h-[80px] w-[80px]"
                >
                  <video
                    src={story.shortReel}
                    alt={story.username}
                    className="h-full w-full rounded-full object-cover"
                  />
                {index=== 0 && 
                    <button className="absolute bottom-0 right-0 bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xl">
                      +
                    </button>}
                 
                </Link>
              </div>
              <a href="#">{index===0 ? "My Story" : story.username}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Story;
