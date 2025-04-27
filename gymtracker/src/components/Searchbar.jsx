import HugeiconsSearch01 from "./icones/search";

function SearchBar() {
    return (
        <div className="">
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <HugeiconsSearch01 />
                </div>
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for exercises..." required />
                <button type="submit" class="text-white absolute end-2.5 bottom-1.5 !bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
        </div>
    );
}

export default SearchBar