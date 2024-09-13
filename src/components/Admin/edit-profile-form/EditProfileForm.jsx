import React from "react";

function EditProfile() {
  return (
    <div className=" h-full flex justify-center items-center  ">
      <div className="w-full max-h-screen  bg-white rounded-2xl  p-6 pt-8 ">
        <h2 className="text-2xl font-medium text-textHl mb-6">Edit Profile</h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-textLg">
                First Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
                placeholder="Yash"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-textLg">
                Last Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
                placeholder="Ghori"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-textLg">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
              placeholder="yghori@asite.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-textLg">
                Phone Number
              </label>
              <div className="flex">
                <select className="mt-1 block p-2 border border-gray-300 rounded-md outline-none">
                  <option value="+91">+91</option>
                  {/* Add more country codes as options */}
                </select>
                <input
                  type="text"
                  className="ml-2 mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
                  placeholder="8023456789"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-textLg">
                Nationality
              </label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none">
                <option value="India">India</option>
                {/* Add more nationality options */}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-textLg">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none"
              placeholder="Change Password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-textLg">
              Designation
            </label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none">
              <option value="UI Intern">UI Intern</option>
              {/* Add more designation options */}
            </select>
          </div>

          <div className="w-full grid place-items-center mt-9">
            <button
              type="submit"
              className="w-1/3 bg-blue-600 text-white font-medium p-2 rounded-md outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;