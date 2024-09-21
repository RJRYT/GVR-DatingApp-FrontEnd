import { Image, VideoIcon } from "lucide-react";
import React from "react";

function UserForm() {
  return (
    <form className="w-full grid gap-2 ">
      <input
        type="text"
        placeholder="age"
        className="w-full h-12  text-zinc-300 bg-standard px-4 border rounded-md"
      />

      <input
        type="text"
        placeholder="DOB"
        className="w-full h-12  text-zinc-300 bg-standard px-4 border rounded-md "
      />

      <input
        type="text"
        placeholder="Hobbies"
        className="w-full h-12  text-zinc-300 bg-standard px-4 border rounded-md"
      />
      <input
        type="text"
        placeholder="Interests"
        className="w-full h-12  text-zinc-300 bg-standard px-4 border rounded-md"
      />
      <input
        type="text"
        placeholder="Smoking habits"
        className="w-full h-12  text-zinc-300 bg-standard px-4 border rounded-md"
      />
      <input
        type="text"
        placeholder="Drinking habits"
        className="w-full h-12  text-zinc-300 bg-standard px-4 border rounded-md"
      />
      <input
        type="text"
        placeholder="Qualification"
        className="w-full h-12  text-zinc-300 bg-standard px-4 border rounded-md"
      />

      <div className="w-full h-12  text-zinc-300 bg-standard px-4 border rounded-md grid items-center relative">
        <input
          type="file"
          placeholder="Qualification"
          className="w-full h-12 absolute left-0 opacity-0 z-20 "
        />
        <label className="w-full flex items-center justify-between">
          Profile Pic <Image className="text-zinc-600" />{" "}
        </label>
      </div>

      <div className="w-full h-12  text-zinc-300 bg-white px-4 border rounded-md grid items-center relative">
        <input
          type="file"
          placeholder="Qualification"
          className="w-full h-12 absolute left-0 opacity-0 z-20 "
        />
        <label className="w-full flex items-center justify-between">
          Add more image <Image className="text-zinc-600" />{" "}
        </label>
      </div>

      <div className="w-full h-12  text-zinc-300 bg-white px-4 border rounded-md grid items-center relative">
        <input
          type="file"
          placeholder="Qualification"
          className="w-full h-12 absolute left-0 opacity-0 z-20 "
        />
        <label className="w-full flex items-center justify-between">
          Short reel <VideoIcon className="text-zinc-600" />{" "}
        </label>
      </div>
      <input
        type="text"
        placeholder="Job status"
        className="w-full h-12  text-zinc-300 bg-white px-4 border rounded-md"
      />
    </form>
  );
}

export default UserForm;