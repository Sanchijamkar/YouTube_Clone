// Import necessary dependencies and components
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, getUserData } from "../Redux/slice/authSlice";
import logo from "../assets/YouTube_Logo_2017.svg.png";
import { FiSearch, FiMenu } from "react-icons/fi";
import { RiVideoUploadLine } from "react-icons/ri";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CreateChannel from "./CreateChannel";
import { useToast } from "../hooks/use-toast";

function Navbar({ openChange, onSearch }) {
  // State management
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Redux hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status: authStatus, user: userdata } = useSelector((state) => state.auth);
  const { toast } = useToast();

  // Handlers
  const toggleSidebar = () => openChange();
  const toggleDropdown = () => setDropdownVisible((prev) => !prev);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass the search term to the parent component
  };

  const handleUploadClick = () => {
    navigate("/your_channel/upload_video", { state: { openModal: true } });
  };

  const handleSignOut = () => {
    dispatch(logout());
    toast({
      title: "You have successfully logged out.",
    });
    navigate("/"); // Redirect to Sign In page after logout
  };

  useEffect(() => {
    if (userdata?._id) {
      dispatch(getUserData(userdata._id));
    }
  }, [userdata, dispatch]);

  return (
    <>
      <nav className="fixed z-30 w-full bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 py-2 lg:px-6 flex items-center justify-between">
          {/* Left: Logo and Sidebar Toggle */}
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-100 lg:hidden"
            >
              <FiMenu className="w-6 h-6" />
            </button>
            <Link to="/" className="ml-4">
              <img src={logo} alt="YouTube Logo" className="h-5" />
            </Link>
          </div>

          {/* Center: Search Bar */}
          <div className="hidden lg:block lg:w-96">
            <form className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg pl-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>
          </div>

          {/* Right: User Actions */}
          <div className="flex items-center space-x-4">
            {authStatus ? (
              <>
                {/* Upload Icon */}
                {userdata?.hasChannel && (
                  <button onClick={handleUploadClick} className="hover:text-gray-700">
                    <RiVideoUploadLine className="w-6 h-6" />
                  </button>
                )}

                {/* User Dropdown */}
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center rounded-full focus:outline-none"
                  >
                    {userdata?.avatar ? (
                      <img
                        src={userdata.avatar}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <AccountCircleOutlinedIcon className="w-8 h-8 text-gray-500" />
                    )}
                  </button>
                  {dropdownVisible && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <div className="px-4 py-3">
                        <p className="text-sm font-semibold">{userdata?.name}</p>
                        <p className="text-sm text-gray-500">{userdata?.email}</p>
                      </div>
                      <ul className="py-1">
                        {userdata?.hasChannel ? (
                          <li>
                            <Link
                              to="/your_channel"
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              Your Channel
                            </Link>
                          </li>
                        ) : (
                          <li>
                            <button
                              onClick={openModal}
                              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              Create Channel
                            </button>
                          </li>
                        )}
                        <li>
                          <Link
                            to="/settings"
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            Settings
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={handleSignOut}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link to="/login">
                <button className="px-4 py-2 text-sm text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50">
                  <AccountCircleOutlinedIcon className="mr-2" />
                  SIGN IN
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Create Channel Modal */}
      <CreateChannel isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Navbar;
