import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { RiQrScan2Line } from "react-icons/ri";
import visa from '../../../assets/visa.png'
import mastercard from '../../../assets/mastercard.png'
import AmericanExp from '../../../assets/americanexpress.jpg'
import Discover from '../../../assets/discover.png'

const AddCard = () => {
  return (
    <div className="items-center justify-center min-h-screen bg-white">
      <div className='p-8'>
        <button ><BsArrowLeft  className='text-3xl'/></button>
      </div>
      <div className='text-3xl text-fuchsia-950 px-8 font-bold '>Add Credit Card</div>
      <div className='px-8 pt-8 '>
        <label className='font-semibold'>Name</label>
        <div className=' pt-2 border-b border-black'>
        <input className='focus:outline-none bg-transparent text-medium'/>
        </div>       
      </div>

      <div className='px-8 pt-8 '>
        <label className='font-semibold'>Credit Card Number</label>
        <div className=' pt-2 border-b border-black'>
        <input placeholder='' className='focus:outline-none bg-transparent text-medium '/>
        </div>       
      </div>
      <div className='px-8 pt-8 '>
        <button className='bg-fuchsia-950 rounded-lg text-white px-10 py-2 flex items-center'>
            <RiQrScan2Line className='text-white mr-2'/>Scan card</button>
      </div>
      <div className='flex flex-col sm:flex-row px-8 pt-8'>
    <div className='w-full sm:w-auto'>
        <label className='font-semibold'>Expiry Date</label>
        <div className='pt-2 border-b border-black'>
            <input placeholder='' className='w-full focus:outline-none bg-transparent text-medium' />
        </div> 
    </div>
    <div className='w-full sm:w-auto flex-1 sm:ml-8 mt-8 sm:mt-0'>
        <label className='font-semibold'>CCV</label>
        <div className='pt-2 border-b border-black'>
            <input placeholder='***' className='w-full focus:outline-none bg-transparent text-medium' />
        </div> 
    </div>
</div>


      <div className='px-8 pt-16'>
        <p className='font-light'>Debit cards are accepted a same locations and for same categories</p>
      </div>
      <div className="flex justify-center space-x-4 mt-8">
            <img src={visa} alt="Visa" className="w-16 h-auto" />
            <img src={mastercard} alt="Mastercard" className="w-16 h-auto" />
            <img src={AmericanExp} alt="AmericanExp" className="w-16 h-auto" />
            <img src={Discover} alt="Discover" className="w-16 h-auto" />
            
        </div>
      <div className='px-8'>
      <button className='bg-fuchsia-950 w-full mt-16 mb-2 py-2 rounded-lg text-white text-xl font-bold'>Add Payment Method</button>
      </div>
       
       
       
    </div>
  )
}

export default AddCard
