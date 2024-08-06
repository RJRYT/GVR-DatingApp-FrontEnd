import React, { useState } from 'react';
import profilePicture from '../../../assets/profile/profilePic.png'; // Ensure correct path
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import { Close as CrossIcon, Star as StarIcon, Favorite as FavouriteIcon } from '@mui/icons-material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';




// Sample user data
const sampleUser = {
  profilePicture, // Correctly use the imported image
  name: 'Alexander',
  age: '25',
  location: 'New York',
  about: `A good listener. I love having a good talk to know each other's side.`
};

// Sample interests list with emojis
const interests = [
  { text: "Nature", emoji: "🌳" },
  { text: "Travel", emoji: "🌍" },
  { text: "Writing", emoji: "✍️" }
];

const UserProfile = () => {

  const [activeLine, setActiveLine] = useState(1); // State to manage active line

  const handleLineClick = (lineNumber) => {
    setActiveLine(lineNumber); // Set active line based on the clicked line
  };

  const handleBackClick = () => {
    // Example action: Navigate back or perform another action
    window.history.back(); // This will navigate to the previous page
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
      
      {/* Profile Picture Section */}
      <div
        className="w-[30vw] h-full bg-cover bg-center- relative"
        style={{ backgroundImage: `url(${sampleUser.profilePicture})`, position:'absolute', top: 0 , left: 450 }}
      >
            {/* Back Arrow Button */}
            <button
          onClick={handleBackClick}
          className="absolute top-4 left-4 bg-transparent p-2 rounded-full border-2 border-white shadow-md hover:bg-gray-200 focus:outline-none"
          // style={{ borderColor: 'white' }} // Ensure the border color is visible
        >
          <ArrowBackIosNewOutlinedIcon
            className="text-white" // Set icon color to white or your desired color
            sx={{ fontSize: 24 }} 
        />
        </button>
         {/* NearMeOutlined Icon with Blurred Background */}
         <div className="absolute top-4 right-4 flex items-center p-2 rounded-3xl border-2 border-white shadow-md hover:bg-gray-200 focus:outline-none backdrop-blur-md bg-white bg-opacity-30">
          <NearMeOutlinedIcon
            className="text-white" // Set icon color to white
            sx={{ fontSize: 24 }} // Apply styles using sx prop
          />
          <span className="text-white ml-2 text-sm pr-1 chakra-petch-light gap-1">2.5km</span> {/* Distance text */}
        </div>
        {/* User Information Overlay */}
        <div className="absolute top-48 left-0  w-full bg- bg-opacity-50 p-4 text-white rounded-t-lg">
          <h1 className="text-xl font-bold text-center chakra-petch-medium gap-5">{sampleUser.name}, {sampleUser.age}</h1>
          <p className="text-base text-center chakra-petch-light uppercase">{sampleUser.location}</p>
        </div>
          {/* Combined Vertical Lines */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
          <div
            onClick={() => handleLineClick(1)}
            className={`w-1 h-10 ${activeLine === 1 ? 'bg-white' : 'bg-gray-500'}`}
            style={{ cursor: 'pointer' }}
          ></div>
          <div
            onClick={() => handleLineClick(2)}
            className={`w-1 h-10 ${activeLine === 2 ? 'bg-white' : 'bg-gray-500'}`}
            style={{ cursor: 'pointer' }}
          ></div>
          </div>
    
       <Button variant="outlined" 
       style={{margin: '280px 200px',
        color: 'white',
         borderRadius: '18px',
           border: '1px solid rgb(121,3,121)',
            padding: '5px',
            textTransform:'none' }}>
        Match
      </Button>
      
    
    
     {/* User Details Section */}
     <div
          className="absolute top-[40%] w-[30vw]  bg-white shadow-lg overflow-auto"
          style={{ borderRadius: '30px', top: 400 , height: 'calc(70vh - 150px)', overflow: 'auto' }}

        >
           {/* Horizontal Line at the Top Center */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full">
          <div className="w-16 h-1 bg-gray-200 mx-auto mt-4" style={{borderRadius: '2px'}}></div>
        </div>
        <div className="p-4">
          <p className="text-base mt-1 ">
            <h4 className='left-0 chakra-petch-medium text-gray-400'>About</h4>
           <p className='chakra-petch-medium pt-2' >{sampleUser.about}</p>
          </p>
        </div>
        <div className='p-4'>
        <h4 className='left-0 chakra-petch-medium text-gray-400 mb-2'>Interest</h4>
        <div className="flex flex-wrap gap-2 mb-2">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="bg-white text-black chakra-petch-medium left-0 px-2 py-1 rounded-full border border-gray-400 flex items-center justify-center"
            style={{ 
              borderRadius: '12px', // Adjust the border-radius as needed
              padding: '5px 10px'  // Adjust the padding as needed
            }}
          >
        <span className="mr-2 text-xl">{interest.emoji}</span> {/* Emoji with margin-right */}
        {interest.text}         
         </div>
           ))}
         </div>
         
         <div className="mt-1 flex justify-center items-center w-full px-1">
  {/* Card Container */}
  <div className="w-full max-w-full p-1 bg-white rounded-full border border-gray-300 shadow-md flex justify-center">
    {/* Icon Buttons */}
    <div className="flex space-x-10">
      
      <IconButton
        className="rounded-full hover:bg-gray-100"
        style={{ color: 'white', backgroundColor: 'pink', padding: '15px' }}
      >
        <CrossIcon />
      </IconButton>

      <IconButton
        className="rounded-full hover:bg-gray-100"
        style={{ color: 'white', backgroundColor: 'rgb(121,3,121)', padding: '15px' }}
      >
        <StarIcon />
      </IconButton>

      <IconButton
        className="rounded-full hover:bg-gray-100"
        style={{ color: 'white', backgroundColor: 'rgb(213,40,210)', padding: '15px' }}
      >
        <FavouriteIcon />
      </IconButton>

      <IconButton
        className="rounded-full hover:bg-gray-100"
        style={{ color: 'white', backgroundColor: 'rgb(183,40,210)', padding: '15px' }}
      >
        <ChatBubbleOutlineIcon />
      </IconButton>

    </div>
  </div>
</div>

      </div>
        {/* Horizontal Line at the Bottom Center */}
        <div className="w-full flex justify-center mb-1 ">
            <div className="w-[10vw] h-1 bg-gray-200 " style={{ borderRadius: '2px' }}></div>
          </div>
        </div>

        </div>
      </div>
  
    
    
  );
};

export default UserProfile;
