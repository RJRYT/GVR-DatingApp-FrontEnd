import React from 'react'
import FormTopSection from './FormTopSection'
import formImg from "../../../assets/Admin/notification-images/formImg.png";
import FormLeftSection from './FormLeftSection';
import FormRightSection from './FormRightSection';

function NotificationForm() {
  return (
    <div className='xl:w-[60%] mx-auto pb-10'>
      <div className="p-5 md:p-10 bg-white grid gap-5 shadow-md">

        <FormTopSection />
        <img src={formImg} className='w-[200px] md:w-[400px] h-[200px] md:h-[250px] mt-5 md:mx-auto object-cover rounded-xl' />
        <div className="grid md:grid-cols-2 gap-5 md:gap-1">
            <FormLeftSection />
            <FormRightSection />
        </div>
      </div>
    </div>
  )
}

export default NotificationForm