import { IoSearchSharp } from "react-icons/io5";

function SearchBar({ searchQuerry, onSearchChange }) {
  return (
    <div className="flex items-center gap-4  justify-center">
      <input
        type="text"
        value={searchQuerry}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search..."
        className="border-indigo-600 border-2 rounded-full pl-8 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-1  py-2 w-[20rem] relative "
      />
      <IoSearchSharp className="text-xl text-indigo-800 -ml-15" />
    </div>
  );
}

export default SearchBar;
