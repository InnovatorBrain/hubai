import React, { useState } from 'react';

// Icons``
import { IoReloadOutline } from "react-icons/io5";
import { VscSaveAll } from "react-icons/vsc";
import { MdOutlineSettings } from "react-icons/md";
import { TbPrompt } from "react-icons/tb";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import "./Sidebar.css";

function Sidebar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    // Add any specific actions you want to perform when the link is clicked
    console.log('Link clicked!');
  };

  return (
    <>
      <div className="side_container">
        <div className="side_block">
          <p id='side_title'>Names Workspace</p>
        </div>
        <p id='side_gray_title'>Tools</p>

        {/* Old Threads Link is here */}
        <a href="" id='promts_title-gen_link'>
          <p id='side_threads_title'><IoReloadOutline className='sidebar_icons'/>Old Threads</p>
        </a>

        {/* Saved Prompts Link is here  */}
        <a href="" id='promts_title-gen_link'>
          <p id='side_threads_title'><VscSaveAll className='sidebar_icons'/>Saved Propmts</p>
        </a>

        {/* Optimized Prompts Link is here    */}
        <a href="" id='promts_title-gen_link'>
          <p id='side_threads_title'><HiOutlineRocketLaunch className='sidebar_icons'/>Optimized Prompts</p>
        </a>

        {/* Prompts Hub Link with Dropdown is here    */}
        <div className="dropdown-container">
          <a href="" id='promts_title-gen_link'>
            <p id='side_threads_title'><TbPrompt className='sidebar_icons'/>Prompts Hub </p>
          </a>
          <IoIosArrowDropdownCircle id='react-icon-dropd' onClick={toggleDropdown}/>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <ul>
                <li>
                  <a href="#" onClick={handleLinkClick}>
                    LinkOneHere
                  </a>
                </li>
                <li>
                  <a href="#" onClick={handleLinkClick}>
                    LinkTwoHere
                  </a>
                </li>
                {/* Add more links as needed */}
              </ul>
            </div>
          )}
        </div>
        {/* Prompts Hub Link with Dropdown is here    */}
        <div className="dropdown-container">
          <a href="" id='promts_title-gen_link'>
            <p id='side_threads_title'><MdOutlineSettings className='sidebar_icons'/>Settings </p>
          </a>
          <IoIosArrowDropdownCircle id='react-icon-dropd' onClick={toggleDropdown}/>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <ul>
                <li>
                  <a href="#" onClick={handleLinkClick}>
                    LinkOneHere
                  </a>
                </li>
                <li>
                  <a href="#" onClick={handleLinkClick}>
                    LinkTwoHere
                  </a>
                </li>
                {/* Add more links as needed */}
              </ul>
            </div>
          )}
        </div>
        {/* Prompts Hub Link with Dropdown is here    */}
        <div className="dropdown-container">
          <a href="" id='promts_title-gen_link'>
            <p id='side_threads_title'><BiSupport className='sidebar_icons'/>Support </p>
          </a>
          <IoIosArrowDropdownCircle id='react-icon-dropd' onClick={toggleDropdown}/>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <ul>
                <li>
                  <a href="#" onClick={handleLinkClick}>
                    LinkOneHere
                  </a>
                </li>
                <li>
                  <a href="#" onClick={handleLinkClick}>
                    LinkTwoHere
                  </a>
                </li>
                {/* Add more links as needed */}
              </ul>
            </div>
          )}
        </div>

      </div>
    </>
  );
}

export default Sidebar;
