import { useState } from 'react'

export default function Nav() {
    let [isProfileMenuOn, setIsProfileMenuOn] = useState(false)
    let loggedIn = false
    let profilePic = "/pfp.png"
    if (typeof window !== 'undefined') {
        window.onscroll = function(ev) {
            if (window.scrollY >= 15) {
                document.querySelector('#nav').classList.add('shadow-lg')
                document.querySelector('#nav').classList.add('sticky')
            } else {
                document.querySelector('#nav').classList.remove('shadow-lg')
                document.querySelector('#nav').classList.remove('sticky')
            }
        }
        console.log(window.location.pathname)
        if (window.location.pathname == "/") {
            document.querySelector('#searchBarNav').classList.add('hidden')
        }
    }
    return (
        <>
            <nav className="bg-white transition-all top-0 right-0 left-0 bottom-0" id="nav">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <a href="/">
                                    <img className="hidden lg:block h-8 w-auto" src="/logo.png" alt="Workflow"/>
                                </a>
                            </div>
                            <div className="sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <input id="searchBarNav" type="text" placeholder="Search the web..." className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 bg-white transition-all lg:hover:shadow lg:hover:text-gray-500 lg:focus:shadow lg:focus:text-gray-500 outline-none w-96"/>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className={`ml-3 relative ${loggedIn ? "" : "hidden"}`}>
                                <div>
                                    <button onClick={() => setIsProfileMenuOn(!isProfileMenuOn)} className="bg-gray-800 flex text-sm rounded-full focus:outline-none" id="user-menu" aria-haspopup="true">
                                        <span className="sr-only">Open profile menu</span>
                                        <img className="h-8 w-8 rounded-full object-fill" src={profilePic} alt=""/>
                                    </button>
                                </div>
                                <div className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ${isProfileMenuOn ? "" : "hidden"}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                                </div>
                            </div>
                            <div className={`ml-3 relative ${loggedIn ? "hidden" : ""}`}>
                                <div>
                                    <a href="/login?ref=/&url=/" className="bg-gray-200 px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-white transition-all lg:hover:shadow">
                                        Login
                                    </a>
                                </div>
                            </div>
                            <div className={`ml-3 relative ${loggedIn ? "hidden" : ""}`}>
                                <div>
                                    <a href="/register?ref=/&url=/" className="bg-blue-500 px-3 py-2 rounded-md text-sm font-medium text-white bg-white transition-all lg:hover:shadow">
                                        Register
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}