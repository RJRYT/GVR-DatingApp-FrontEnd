import React from 'react';
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai';
import { IoMdCheckmarkCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io';
const Notification = ({ type, title, message, time, onClose  }) => {
  const typeStyles = {
    news: '',
    success: '',
    alert: '',
    error: '',
  };
  

  const iconStyles = {
    news: 'text-white',
    success: 'text-white',
    alert: 'text-white',
    error: 'text-white',
  };


  const iconColor = {
    success: '#48B16E',
    alert: '#FBBF24', // A typical yellow color, you can choose any shade of yellow you prefer
    error: '#FB3836'
  };

  const Icon = ({ type }) => {
    switch (type) {
      case 'success':
        return <IoMdCheckmarkCircleOutline className="text-2xl mr-2" style={{ color: iconColor.success }} />;
      case 'alert':
        return <AiOutlineInfoCircle className="text-2xl mr-2" style={{ color: iconColor.alert }} />;
      case 'error':
        return <IoIosCloseCircleOutline className="text-2xl mr-2" style={{ color: iconColor.error }} />;
      default:
        return null; // No icon for news type
    }
  };

  const news = ({ type }) => {
    switch (type) {
      case 'success':
        return <IoMdCheckmarkCircleOutline className="text-2xl mr-2" style={{ color: iconColor.success }} />;
      case 'alert':
        return <AiOutlineInfoCircle className="text-2xl mr-2" style={{ color: iconColor.alert }} />;
      case 'error':
        return <IoIosCloseCircleOutline className="text-2xl mr-2" style={{ color: iconColor.error }} />;
      default:
        return <div class="" >news</div>; // No icon for news type
    }
  };

  return (
    <div className={`rounded-[30px] shadow-lg p-7 ml-4 mr-4 mb-4 ${typeStyles[type]} bg-fuchsia-800 text-white relative`}>
      <div class="flex flex-row">
      <div class="flex-none">
        <Icon type={type} />
        </div>
        <div class="flex-1">

      <strong className="font-bold" style={{ fontFamily: 'Roboto, sans-serif'}} >{title}</strong>
      <p style={{ fontFamily: 'Roboto, sans-serif'}} >{message}</p>
      <small style={{ fontFamily: 'Roboto, sans-serif'}} >{time}</small>
      <button onClick={onClose} className="absolute top-4 right-4 text-lg">
        <AiOutlineClose />
      </button>
      </div>
      </div>
    </div>
  );
};

export default Notification;
