export default function SearchBar() {
    if (typeof window !== "undefined") {
        if (document.querySelector('#bigSearchBar')) {
            document.querySelector('#bigSearchBar').focus()
        }
    }
    return (
        <>
            <div class="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-screen">
                <input type="text" id="bigSearchBar" placeholder="Search the web..." className="text-xl lg:p-4 lg:px-10 p-2 px-6 w-screen m-96 rounded-full border-2 border-gray-200 lg:border-0 lg:shadow-md outline-none text-gray-600 transition-all lg:hover:shadow-xl lg:focus:shadow-xl"/>
            </div>
        </>
    )
}