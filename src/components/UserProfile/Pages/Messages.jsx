import React from "react";
import NavBar from "../../Dashboard/Navbar";

const recentMatches = [
  {
    name: "Alfredo Calzoni",
    avatar:
      "https://healthfactorial.s3.amazonaws.com/media/public/posts_images/food.jpg",
  },
  {
    name: "Clara Hazel",
    avatar:
      "https://i.postimg.cc/SxS03Zmt/1000-F-415160354-l-Yhr-Kts4hrgda-JXKVCthy-J8f-K3-Zn17nc.jpg",
  },
  {
    name: "Brandon",
    avatar:
      "https://th.bing.com/th/id/OIP.SwRgsiaRUcQte2MrDaP4dQHaEo?rs=1&pid=ImgDetMain0",
  },
  {
    name: "Amina Mina",
    avatar:
      "https://i.postimg.cc/wx7Cdy8g/360-F-630981329-WRk-GMr-Gv456oj-PXeoxgf-YHh66qr-F8r-JU.jpg",
  },
];

const messages = [
  {
    name: "Alfredo Calzoni",
    message: "What about that new jacket if I ...",
    time: "09:18",
    avatar:
      "https://media.istockphoto.com/photos/portrait-of-a-beautifull-smiling-man-picture-id499907722?k=6&m=499907722&s=612x612&w=0&h=MYOvvCDGwVuKDQKPhkdQ_-hCqNST3AsMJv2CnO0AhNg=",
    isNew: true,
  },
  {
    name: "Clara Hazel",
    message: "I know right 😏",
    time: "12:44",
    avatar:
      "https://i.postimg.cc/LXrZ5YxG/collage-portraits-different-people-men-women-posing-over-multicolored-background-neon-lights-collage.webp",
    isNew: true,
  },
  {
    name: "Brandon",
    message: "Already registered, can’t wai...",
    time: "08:06",
    avatar:
      "https://i.postimg.cc/sgYF0kFW/close-young-fun-happy-successful-600nw-2250641791.webp",
    isNew: true,
  },
  {
    name: "Amina Mina",
    message: "It will have two lines of heading ...",
    time: "09:32",
    avatar: "https://i.postimg.cc/7PRyC1M5/istockphoto-1204482432-612x612.jpg",
    isNew: true,
  },
  {
    name: "Clara Hazel",
    message: "I know right 😏",
    time: "12:44",
    avatar:
      "https://i.postimg.cc/LXrZ5YxG/collage-portraits-different-people-men-women-posing-over-multicolored-background-neon-lights-collage.webp",
    isNew: true,
  },
  {
    name: "Brandon",
    message: "Already registered, can’t wai...",
    time: "08:06",
    avatar:
      "https://i.postimg.cc/sgYF0kFW/close-young-fun-happy-successful-600nw-2250641791.webp",
    isNew: true,
  },
  {
    name: "Amina Mina",
    message: "It will have two lines of heading ...",
    time: "09:32",
    avatar: "https://i.postimg.cc/7PRyC1M5/istockphoto-1204482432-612x612.jpg",
    isNew: true,
  },
];

const Messages = () => {
  return (
    <div className="bg-[#4b104d]">
      <Header />
      <RecentMatches matches={recentMatches} />
      <MessageList messages={messages} />
      <NavBar />
    </div>
  );
};

const Header = () => (
  <div className="flex justify-between items-center mb-10">
    <button className="border w-11 h-11 mt-6 ml-6 rounded-full">
      <svg
        className="h-8 w-8 ml-1 text-stone-100"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <polyline points="15 6 9 12 15 18" />
      </svg>
    </button>
    <h1 className="text-white text-3xl mt-5 mr-7 font-medium">Messages</h1>
    <div className="w-6"></div>
  </div>
);

const RecentMatches = ({ matches }) => (
  <div className="mb-10">
    <h2 className="text-white text-xl  ml-10">Recent Matches</h2>
    <div className="overflow-x-auto mt-4 hide-scrollbar">
      <div className="flex gap-4 items-center ml-12">
        {matches.map((match, index) => (
          <div
            key={index}
            className="flex-none w-28 h-32 rounded-xl overflow-hidden relative"
          >
            <img
              src={match.avatar}
              alt={match.name}
              className="w-full h-full object-cover"
            />

            {match.name === "Alfredo Calzoni" && (
              <>
                <div className="absolute inset-0 bg-fuchsia-300 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MessageList = ({ messages }) => (
  <div className="bg-white rounded-t-3xl p-5 mt-10 overflow-auto">
    {messages.map((message, index) => (
      <div
        key={index}
        className="flex items-center border-b border-gray-100 py-6"
      >
        <div className="flex-none w-16 h-16 rounded-full overflow-hidden">
          <img
            src={message.avatar}
            alt={message.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-4 flex-1">
          <div className="flex justify-between items-center">
            <h3 className="text-black text-2xl font-normal">{message.name}</h3>
            <span className="text-gray-500 text-lg ml-4">{message.time}</span>
          </div>
          <p className="text-gray-800 text-lg font-semibold truncate">
            {message.message}
          </p>
        </div>

        {message.isNew && message.name !== "Amina Mina" && (
          <span className="w-4 h-4 bg-[#da6fde] rounded-full"></span>
        )}
      </div>
    ))}
  </div>
);

export default Messages;
