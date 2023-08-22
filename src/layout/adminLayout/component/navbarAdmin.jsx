import React from "react"
import { LogOutUser } from "../../../middleware/auth/authentication"

const NavbarAdmin = ({ toggleSidebar }) => {

  const HandleLogout = () => {
    LogOutUser()
  }

  return (
    <div className="p-2 bg-gray-100 dark:bg-slate-800">
      <div className="navbar shadow-md rounded-lg border-2 border-black">
        <div className="flex-1">
          <button
            type="button"
            id="sidebar-toggle-button"
            onClick={toggleSidebar}
            className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Toggle Sidebar</span>
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <a className="btn btn-ghost normal-case text-xl">
            <p>Kwala<span className="text-blue-500">Store</span></p>
            </a>
        </div>
        <div className="flex-none gap-2">
            {/* 
            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://images.unsplash.com/photo-1525186492356-0fe09a5831df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZha2UlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a className="cursor-pointer" onClick={HandleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarAdmin
