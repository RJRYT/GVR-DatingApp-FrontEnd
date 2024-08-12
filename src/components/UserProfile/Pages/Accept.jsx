import React from "react";

const contacts = [
  {
    name: "Team Align",
    time: "Today, 09:30 AM",
    avatar:
      "https://i.postimg.cc/LXrZ5YxG/collage-portraits-different-people-men-women-posing-over-multicolored-background-neon-lights-collage.webp",
    callType: "audio",
  },
  {
    name: "Mariya josaph ",
    time: "Today, 07:30 AM",
    avatar:
      "https://i.postimg.cc/SxS03Zmt/1000-F-415160354-l-Yhr-Kts4hrgda-JXKVCthy-J8f-K3-Zn17nc.jpg",
    callType: "audio",
  },
  {
    name: "Sabila Sayma",
    time: "Yesterday, 07:35 PM",
    avatar:
      "https://th.bing.com/th/id/OIP.SwRgsiaRUcQte2MrDaP4dQHaEo?rs=1&pid=ImgDetMain0",
    callType: "video",
  },
  {
    name: "Alex Linderson",
    time: "Monday, 09:30 AM",
    avatar:
      "https://i.postimg.cc/wx7Cdy8g/360-F-630981329-WRk-GMr-Gv456oj-PXeoxgf-YHh66qr-F8r-JU.jpg",
    callType: "audio",
  },
  {
    name: "Martin Borino",
    time: "Monday, 09:30 AM",
    avatar:
      "https://media.istockphoto.com/photos/portrait-of-a-beautifull-smiling-man-picture-id499907722?k=6&m=499907722&s=612x612&w=0&h=MYOvvCDGwVuKDQKPhkdQ_-hCqNST3AsMJv2CnO0AhNg=",
    callType: "video",
  },
  {
    name: "Team Align",
    time: "Today, 09:30 AM",
    avatar:
      "https://i.postimg.cc/LXrZ5YxG/collage-portraits-different-people-men-women-posing-over-multicolored-background-neon-lights-collage.webp",
    callType: "audio",
  },
  {
    name: "Tina roy",
    time: "Today, 07:30 AM",
    avatar:
      "https://i.postimg.cc/sgYF0kFW/close-young-fun-happy-successful-600nw-2250641791.webp",
    callType: "audio",
  },
  {
    name: "Amelia eva",
    time: "Yesterday, 07:35 PM",
    avatar: "https://i.postimg.cc/7PRyC1M5/istockphoto-1204482432-612x612.jpg",
    callType: "video",
  },
];

const Accept = () => {
  return (
    <div className="items-center justify-center min-h-screen bg-[#4b104d]">
      <div className="flex p-6">
        <button className="border bg-[#d887ca] w-14 h-14 rounded-full">
          <svg
            class="h-8 w-8 ml-3  text-stone-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <circle cx="11" cy="11" r="8" />{" "}
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <h3 className="flex-1 text-center mt-2 mr-14 text-3xl text-white font-medium">
          Accept
        </h3>
      </div>
      <div className="bg-white rounded-t-3xl min-h-screen p-4 h-96 mt-4">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full">
          <div
            className="w-16 h-1 bg-gray-200 mx-auto mt-0 rounded-full"
          ></div>
        </div>
        <div className="p-4 w-full h-1000 overflow-auto touch-pan-y">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center py-4 border-b border-gray-100"
            >
              <img
                className="h-16 w-16 object-cover rounded-full"
                src={contact.avatar}
                alt=""
              />
              <div className="ml-3 flex-grow ">
                <p className="text-2xl  text-black">{contact.name}</p>
                <div className="flex items-center  text-gray-600 ">
                  {contact.callType === "audio" ? (
                    <svg
                      class="h-4 w-4 text-green-300 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                      />
                    </svg>
                  ) : (
                    <svg
                      class="h-4 w-4  text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                      />
                    </svg>
                  )}
                  <div className="p-1.5">{contact.time}</div>
                </div>
              </div>
              <div className="flex space-x-7">
                <svg
                  className="h-7 w-7 text-gray-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  <path d="M15 7a2 2 0 0 1 2 2" />
                  <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
                <svg
                  className="h-7 w-7 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accept;
