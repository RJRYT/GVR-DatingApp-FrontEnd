import React from 'react';
import { IoArrowBack, IoAdd } from 'react-icons/io5';
import Header from '../Dashboard/Header';
import Navbar from '../Dashboard/Navbar';

const CreateGroup = () => {
    const members = [
        { name: "John Doe", avatar: "https://i.pravatar.cc/150?img=3" },
        { name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=1" },
        { name: "Steve Brown", avatar: "https://i.pravatar.cc/150?img=5" },
        { name: "Sweety Darwin", avatar: "https://i.pravatar.cc/150?img=3" },
        { name: "Christina Smithy", avatar: "https://i.pravatar.cc/150?img=4" },
        { name: "Rony Brownn", avatar: "https://i.pravatar.cc/150?img=5" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow bg-white p-3 sm:p-4">
                <Header />
                <header className="flex  items-center ">
                    <IoArrowBack className="text-fuchsia-950 text-2xl" />
                    <h1 className="text-xl font-bold text-center absolute left-0 right-0 mx-auto">Create Group</h1>
                    
                </header>

                <div className="mt-4">
                    <label className="block text-sm font-bold text-gray-700">Group Title</label>
                    <input type="text" placeholder="Group Title" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />

                    <label className="block mt-4 text-sm font-bold text-gray-700">Group Description</label>
                    <textarea placeholder="Group Description" className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"></textarea>
                    <h1 className="text-2xl pt-4 font-bold text-gray-900">Make a Group call with friend's</h1>
                </div>

                <div className="mt-4">
                    <h2 className="text-sm font-bold text-gray-700">Group Admin</h2>
                    <div className="flex items-center mt-2">
                        <img className="w-12 h-12 rounded-full" src="https://i.imgur.com/sjLMNDM.png" alt="Admin Name" />
                        <div className="ml-4">
                            <p className="text-sm font-bold">Stone Stellar</p>
                            <p className="text-xs text-gray-500">Group Admin</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="text-sm font-bold text-gray-700 mb-2">Invited Members</h2>
                    <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4">
                        {members.map(member => (
                            <div key={member.name} className="relative flex flex-col items-center">
                            <img className="w-13 h-13 md:w-20 md:h-20 rounded-full" src={member.avatar} alt={member.name} />
                            <IoAdd className="absolute bottom-1 right-1 md:bottom-2 md:right-2 block h-8 w-8 md:h-10 md:w-10 bg-white rounded-full text-fuchsia-950" />
                        </div>
                        ))}
                        <div className="flex justify-center items-center">
                            <button className="flex justify-center items-center w-14 h-14 rounded-full border-2 border-dashed border-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <button className="mt-4 w-full bg-fuchsia-950 text-white py-3 rounded-full shadow-lg hover:bg-fuchsia-800 mb-16">
                    Create
                </button>
                <Navbar />
            </div>
        </div>
    );
};

export default CreateGroup;
