import React from "react";
import { Search } from "lucide-react";

function SearchBar({ placeholder, setInput }) {
  return (
    <div className="w-1/4 h-9 bg-white px-2 py-1 border rounded-lg  flex gap-2 items-center justify-center">
      <Search size={16} className="text-zinc-500" />
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder || "Search here..."}
        className="w-full h-full  bg-transparent outline-none"
      />
    </div>
  );
}

export default SearchBar;