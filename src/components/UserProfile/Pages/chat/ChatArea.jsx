import React from 'react';
import sender from "../../../../assets/story/profile1.png";
import receiver from "../../../../assets/story/profile2.png";

const ChatArea = () => {
  return (
    <div className="bg-gray-200 overflow-y-auto">
      <ul className="p-4 space-y-4 pb-10">

        <li className="flex justify-center">
          <span className="bg-gray-300 text-xs py-1 px-2 rounded-xl">Yesderday</span>
        </li>

        <li className="flex items-start justify-start gap-2">
          <img src={sender} alt="Sender" className="w-10 h-10 rounded-full object-cover" />
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Fathima</p>
                <p className="text-xs text-gray-600">Good Night</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:20 PM</span>
            </div>
          </div>
        </li>

        <li className="flex items-start justify-end gap-2">
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Nezrin</p>
                <p className="text-xs text-gray-600">See you tomorrow</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:30 PM</span>
            </div>
          </div>
          <img src={receiver} alt="Receiver" className="w-10 h-10 rounded-full object-cover" />
        </li>

        <li className="flex justify-center">
          <span className="bg-gray-300 text-xs py-1 px-2 rounded-xl">Today</span>
        </li>

        <li className="flex items-start justify-end gap-2">
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Nezrin</p>
                <p className="text-xs text-gray-600">See you tomorrow</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:30 PM</span>
            </div>
          </div>
          <img src={receiver} alt="Receiver" className="w-10 h-10 rounded-full object-cover" />
        </li>

        <li className="flex items-start justify-end gap-2">
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Nezrin</p>
                <p className="text-xs text-gray-600">See you tomorrow</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:30 PM</span>
            </div>
          </div>
          <img src={receiver} alt="Receiver" className="w-10 h-10 rounded-full object-cover" />
        </li>

        <li className="flex items-start justify-end gap-2">
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Nezrin</p>
                <p className="text-xs text-gray-600">See you tomorrow</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:30 PM</span>
            </div>
          </div>
          <img src={receiver} alt="Receiver" className="w-10 h-10 rounded-full object-cover" />
        </li>

        <li className="flex items-start justify-start gap-2">
          <img src={sender} alt="Sender" className="w-10 h-10 rounded-full object-cover" />
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Fathima</p>
                <p className="text-xs text-gray-600">Good Night</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:20 PM</span>
            </div>
          </div>
        </li>

        <li className="flex items-start justify-end gap-2">
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Nezrin</p>
                <p className="text-xs text-gray-600">See you tomorrow</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:30 PM</span>
            </div>
          </div>
          <img src={receiver} alt="Receiver" className="w-10 h-10 rounded-full object-cover" />
        </li>

        <li className="flex items-start justify-end gap-2">
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Nezrin</p>
                <p className="text-xs text-gray-600">See you tomorrow</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:30 PM</span>
            </div>
          </div>
          <img src={receiver} alt="Receiver" className="w-10 h-10 rounded-full object-cover" />
        </li>

        <li className="flex items-start justify-end gap-2">
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Nezrin</p>
                <p className="text-xs text-gray-600">See you tomorrow</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:30 PM</span>
            </div>
          </div>
          <img src={receiver} alt="Receiver" className="w-10 h-10 rounded-full object-cover" />
        </li>

        <li className="flex items-start justify-start gap-2">
          <img src={sender} alt="Sender" className="w-10 h-10 rounded-full object-cover" />
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Fathima</p>
                <p className="text-xs text-gray-600">Good Night</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:20 PM</span>
            </div>
          </div>
        </li>

        <li className="flex items-start justify-end gap-2">
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Nezrin</p>
                <p className="text-xs text-gray-600">See you tomorrow</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:30 PM</span>
            </div>
          </div>
          <img src={receiver} alt="Receiver" className="w-10 h-10 rounded-full object-cover" />
        </li>

        <li className="flex items-start justify-end gap-2">
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Nezrin</p>
                <p className="text-xs text-gray-600">See you tomorrow</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:30 PM</span>
            </div>
          </div>
          <img src={receiver} alt="Receiver" className="w-10 h-10 rounded-full object-cover" />
        </li>

        <li className="flex items-start justify-end gap-2">
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Nezrin</p>
                <p className="text-xs text-gray-600">See you tomorrow</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:30 PM</span>
            </div>
          </div>
          <img src={receiver} alt="Receiver" className="w-10 h-10 rounded-full object-cover" />
        </li>

        <li className="flex items-start justify-start gap-2">
          <img src={sender} alt="Sender" className="w-10 h-10 rounded-full object-cover" />
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Fathima</p>
                <p className="text-xs text-gray-600">Good Night</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:20 PM</span>
            </div>
          </div>
        </li>

        <li className="flex items-start justify-end gap-2">
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Nezrin</p>
                <p className="text-xs text-gray-600">See you tomorrow</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:30 PM</span>
            </div>
          </div>
          <img src={receiver} alt="Receiver" className="w-10 h-10 rounded-full object-cover" />
        </li>

        <li className="flex items-start justify-end gap-2">
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Nezrin</p>
                <p className="text-xs text-gray-600">See you tomorrow</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:30 PM</span>
            </div>
          </div>
          <img src={receiver} alt="Receiver" className="w-10 h-10 rounded-full object-cover" />
        </li>

        <li className="flex items-start justify-end gap-2">
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Nezrin</p>
                <p className="text-xs text-gray-600">See you tomorrow</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:30 PM</span>
            </div>
          </div>
          <img src={receiver} alt="Receiver" className="w-10 h-10 rounded-full object-cover" />
        </li>

        <li className="flex items-start justify-start gap-2">
          <img src={sender} alt="Sender" className="w-10 h-10 rounded-full object-cover" />
          <div className="bg-white px-4 py-2 rounded-xl max-w-full md:max-w-[calc(100%-150px)]">
            <div className="flex justify-between items-center gap-2">
              <div>
                <p className="font-bold">Fathima</p>
                <p className="text-xs text-gray-600">Good Night</p>
              </div>
              <span className="text-xs text-gray-500 text-nowrap mt-auto">12:20 PM</span>
            </div>
          </div>
        </li>

      </ul>
    </div>
  );
};

export default ChatArea;
