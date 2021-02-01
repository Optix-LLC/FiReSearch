import { useState } from 'react'
// <a href="#" className="bg-white shadow transition-shadow duration-500 lg:hover:shadow-lg text-gray-500 px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
export default function Index() {
    let [isProfileMenuOn, setIsProfileMenuOn] = useState(false)
    let loggedIn = true
    let profilePic = "/pfp.png"
    return (
        <>
            <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <a href="/">
                                    <img className="block h-8 w-auto" src="/logo.png" alt="Workflow"/>
                                </a>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 bg-white transition-all lg:hover:shadow lg:hover:text-gray-500">BRUH</a>
                                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 bg-white transition-all lg:hover:shadow lg:hover:text-gray-500">BRUH</a>
                                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 bg-white transition-all lg:hover:shadow lg:hover:text-gray-500">BRUH</a>
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
                <div className="hidden sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                    </div>
                </div>
            </nav>
        </>
    )
}