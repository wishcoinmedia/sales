import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [hidden, setHidden] = useState("hidden")

  const hideSideBar = () => {
    hidden === "hidden" ? setHidden("") : setHidden("hidden")
  }

  return (
    <header className="bg-bg sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Link to="/" className="font-semibold text-lg">
            Wishcoin Media Sales
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            onClick={hideSideBar}
            className="block text-black focus:text-black focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {!hidden ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav className={`px-2 pt-2 pb-4 sm:flex sm:p-0 ${hidden}`}>
        <Link
          to="/"
          className="block px-2 py-1 text-black font-semibold rounded hover:bg-primary"
        >
          Home
        </Link>
        <Link
          to="/customers"
          className="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-primary sm:mt-0 sm:ml-2"
        >
          Customers
        </Link>
        <Link
          to="/signin"
          className="mt-1 block px-2 py-1 text-black font-semibold rounded hover:bg-primary sm:mt-0 sm:ml-2 md:border border-black hover:border-transparent"
        >
          Sign In
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
