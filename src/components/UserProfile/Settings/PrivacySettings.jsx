import React,{useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Switch from 'react-switch';

const PrivacySettings = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (checked) => {
    setIsChecked(checked);
  };
  return (
    <div className='items-center justify-center min-h-screen bg-fuchsia-950 '>
     <div className="flex p-6">
     <button className="rounded-full border border-white border-2 p-2 bg-[#DD88CF] ml-4">
          <FaSearch className="text-white" />
        </button>
        <h3 className="flex-1 text-center text-white text-2xl font-bold"> Privacy & Settings</h3>
     </div>
     <div className="bg-white rounded-t-3xl min-h-screen p-6 h-96 mt-4 ">
      <div className='flex p-6'>
      <label className='font-medium'>Sign-in Email</label>
      <p className='flex-1 text-right '>johnsmith@gmail.com</p>
      
      </div>
      <div className='flex px-6 py-2 border-b'>
      <label className='font-medium'>Password</label>
      <Link to='' className='flex-1 text-right'><p className='text-blue-600 font-bold'> Change Password</p></Link>      
      </div>
      <div className='flex px-6 pt-6 '>
      <label className='font-medium'>2-FA authentication</label>
      <Switch
            checked={isChecked}
            onChange={handleToggle}
            onColor="#701a75"
            offColor="#E5E7EB"
            onHandleColor="#ffffff"
            offHandleColor="#ffffff"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={36}
            className="react-switch ml-auto"
          />
           
      </div>
      <div className='flex p-6'>
      <label className='font-medium'>Phone number</label>
      <p className='flex-1 text-right '>+91 93123 45067</p>
      
      </div>
      <div className='flex px-6 py-2  border-b'>
      <Link to='' className='font-bold'>Partner Preference</Link>
         
      </div>
      <div className=' px-6 pt-6'>
      <label className='font-medium'>Last sign in</label>
      <p className='  font-light py-6'>Today at 18:34,Safary 198.123.23.23</p>
      
      </div>
      <div className=' px-6 pt-6 border-b'>
      <label className='font-medium'>Total active sessions(5)</label>
      <p className='  font-light pt-6 pb-2'><span>DESKTOP_6TIG6EC</span>.Kyiv,ukraine</p>
      <p className='font-light pb-2'>Chrome.Used right now</p>
      
      </div>
      <div className=' px-6 pt-6 border-b'>
      
      <p className='  font-light pt-2 pb-2'><span>DESKTOP_6TIG6EC</span>.Kyiv,ukraine</p>
      <p className='font-light pb-2'>Chrome.Used right now</p>      
      </div>
      <div className='p-6 flex pb-24'>
        <button className='bg-fuchsia-950 text-white p-2 rounded-md ml-auto'>+ Reset all active sessions</button>
      </div>
     </div>
    </div>
  )
}

export default PrivacySettings
