import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
const SearchBar = () => {
    const [input, setInput] = useState<string>("");
    return (
        <div className="flex items-center relative w-[40vw]">
            <input
                id="search"
                onInput={(e) => setInput(e.currentTarget.value)}
                type="text"
                value={input}
                placeholder="Search"
                className="rounded-l-full p-2 w-[90%] border-gray-500 border-[1px] bg-transparent focus:outline-none focus:ring-[1px] focus:ring-blue-500 z-10"
            />
            <button
                id="cross"
                onClick={() => setInput("")}
                className={`absolute right-20 text-2xl text-gray-700 p-1 rounded-full hover:bg-gray-400  z-30 ${
                    input ? "block" : "hidden"
                }`}
            >
                <MdOutlineClear />
            </button>
            <button
                disabled={!input}
                onClick={() => alert(`You searched for ${input}`)}
                className="rounded-r-full border-[1px] border-[#3D3D3D] w-20 p-3 bg-[#3D3D3D] overflow-hidden"
            >
                <IoIosSearch className="w-full" />
            </button>
        </div>
    );
};

export default SearchBar;
