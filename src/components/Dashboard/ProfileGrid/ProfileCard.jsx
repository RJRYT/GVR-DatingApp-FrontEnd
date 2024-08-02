import React from 'react';
import backgroundImage from '../../../assets/matches/base.png'; 
import like from "../../../assets/matches/like.png"; 
import chat from "../../../assets/matches/chat.png"; 
import more from "../../../assets/matches/more.png"; 

const ProfileCard = ({ profile }) => {
   
  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-lg w-36 " >
           
      <img src={profile.image} alt={profile.name} className="w-full h-36 object-cover" />
      
     
      <div className="absolute top-0 left-0 right-0   p-2 text-white">
        <div className="flex justify-between items-top">
          <div className="flex items-center">
            
            <span className="text-xs uppercase">Online</span>
          </div>
         </div>
      
      </div>
      <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-1 flex '>
      <div className="text-white ">
            <span className="block text-xs font-bold ">{profile.name}</span>
            <span className="block text-xs uppercase">{profile.gender} {profile.age}</span>
            <span className="block text-xs uppercase">{profile.occupation}, {profile.location}</span>
          </div>
          </div>
      {/* Interaction Icons */}
      
      <div class="absolute bottom-0 top-0 right-0  bg-transparent h-24 w-10 rounded-3xl shadow-lg overflow-hidden bg-cover flex flex-col items-center "style={{ backgroundImage: `url(${backgroundImage})` }}>
  
    <button className=" flex-col items-center justify-center" >
        <img src={like} alt="Like" className="w-6 h-6" />
      </button>
      <button className=" flex-col items-center justify-center">
        <img src={chat} alt="Chat" className="w-6 h-6" />
      </button>
      <button className=" flex-col items-center justify-center">
        <img src={more} alt="More" className="w-6 h-6" />
      </button>
        
    
</div>
      
    </div>
  );
};

export default ProfileCard;
