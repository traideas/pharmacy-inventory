import { useState,useRef,useEffect } from "react";
import navLogo from '../../assests/logo/logo.png'
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContextProvider";

const Navbar = () => {
  const {user} = useAuth()
  console.log(user)

  
  const [menuOpen, setMenuOpen] = useState(false);
  const avatarRef = useRef(null);
  const menuRef = useRef(null);



  const handleToggle = () => {
    //setIsChecked(!isChecked);

  };




  // Function to handle button click
  const handleButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu when clicking outside
  const handleDocumentClick = (event) => {
    if (menuOpen && !avatarRef.current.contains(event.target) && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  // Attach event listener to the document
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [menuOpen]);

  return (
    <nav className="bg-[#E0F4FF] border-gray-200 relative">
      <div className="px-10 flex flex-wrap items-center justify-between">
        <Link to="/pharma/home" className="flex items-center">
          <img src={navLogo} className="h-16 w-16" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
          Pharma Inventory
          </span>
        </Link>
        <div className="p-1 hover:border-blue-500 hover:p-1 hover:rounded-full">
          <button
           
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0"
            id="user-menu-button"
            aria-expanded={menuOpen}
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            ref={avatarRef} onClick={handleButtonClick}
          >
            <img
              className="w-8 h-8 rounded-full"
              src="https://imgs.search.brave.com/npeZscVHB1404RyynKV6maAFjL0amZ7_FRfRd_5vNw0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTIvQXZh/dGFyLVBORy1JbWFn/ZS1GaWxlLnBuZw"
              alt="user"
            />
          </button>
          {menuOpen && (
            <div className="z-10 absolute w-60 border border-gray-400 lg:w-80 md:w-80 md:mr-2 lg:mr-2 right-0 top-full list-none bg-gray-50 py-3 divide-y divide-gray-100 rounded-lg shadow" ref={menuRef}>
              <div className="px-5 py-3">
                <div className="flex justify-between " >
                  <div>
                    <span className="block text-xl text-gray-900 ">{user && user.username}</span>
                    <span className="block text-sm  text-gray-500 truncate ">
                     {user && user.email}
                    </span>
                  </div>
                  <div>
                    <button onClick={handleButtonClick}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">

                <Link to="/">
                  <li className="flex flex-row items-center ml-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>

                    <p className="block px-2 py-2 text-md text-gray-700  ">
                     Sign Out
                    </p>
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
