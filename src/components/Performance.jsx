import React from 'react'
import { TfiDashboard } from "react-icons/tfi";
import { IoPeopleOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
// import logo from "../assets/ugyanlogobg.png"
import logo from "../assets/ugyanlogobg_enhanced-transformed.png";
import { Link } from 'react-router-dom';
import { BsFillPinAngleFill } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdPerson } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { FaRegFileAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { BiCalendarExclamation } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";  
import { useState,useEffect } from 'react';



const Performance = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    return (
    <div className='outer-performance'>
        <div className='header-performance'>
            
                <img src={logo}className='logo-performance'></img>
            
            <div>
            <h1 className='title-bar-performance'><Link to="/dashboard">Home</Link></h1>
        </div>
        <div>
            <p className='title-bar-performance'><Link to="/about">About</Link></p>
        </div>
        <div>
            <p className='title-bar-performance'>Designation</p>
        </div>
        <div>
            <p className='title-bar-performance'>Clock In/Out</p>
        </div>
        <div className="mobile-menu-icon-performance" onClick={toggleMobileMenu}>
          <GiHamburgerMenu />
        </div>
        </div>
        
        <div className='main-performance'>
            <div className='side-bar-performance'>
                {/* <h3 className='text-white text-6xl text-center bg-gradient-to-tl from-black to-slate-400 p-4'><img src={logo}className='bg-white'></img> */}
                {/* <Link to="/dashboard"> <div><h3 className='features-performance'><TbLayoutDashboardFilled className='dash-performance'/>Dashboard</h3></div></Link> */}
                <Link to="/employee"><div><h3 className='features-performance'><MdPerson className='dash-performance'/>Employee </h3></div></Link>
                <Link to="/recruitment"><div><h3 className='features-performance'><IoIosPeople className='dash-performance'/>Recruitment</h3></div></Link>
                <Link to="/calender"><div><h3 className='features-performance'><SlCalender className='dash-performance'/>Calender</h3></div></Link>
                <Link to="/payroll"><div><h3 className='features-performance'><FaMoneyCheckDollar className='dash-performance'/>Payroll</h3></div></Link>
                <Link to="/timeoff"><div><h3 className='features-performance'><BiCalendarExclamation className='dash-performance'/>Time off</h3></div></Link>
                <Link to="/performance"><div><h3 className='features-performance'><GrDocumentPerformance className='dash-performance'/>Performance</h3></div></Link>
                <Link to="/communication"><div><h3 className='features-performance'><FaRegFileAlt className='dash-performance'/>Communication</h3></div></Link>
                <Link to="/settings"><div><h3 className='features-performance'><IoSettingsOutline className='dash-performance'/>Settings</h3></div></Link>
                <Link to="/logout"><div><h3 className='features-performance'><CgLogOut className='dash-performance'/>Logout</h3></div></Link>
            </div>
            {isMobileMenuOpen && (
          <div className="mobile-dropdown-performance">
            <Link to="/employee" onClick={() => setIsMobileMenuOpen(false)}>Employee</Link>
            <Link to="/recruitment" onClick={() => setIsMobileMenuOpen(false)}>Recruitment</Link>
            <Link to="/calender" onClick={() => setIsMobileMenuOpen(false)}>Calendar</Link>
            <Link to="/payroll" onClick={() => setIsMobileMenuOpen(false)}>Payroll</Link>
            <Link to="/timeoff" onClick={() => setIsMobileMenuOpen(false)}>Time off</Link>
            <Link to="/performance" onClick={() => setIsMobileMenuOpen(false)}>Performance</Link>
            <Link to="/communication" onClick={() => setIsMobileMenuOpen(false)}>Communication</Link>
            <Link to="/settings" onClick={() => setIsMobileMenuOpen(false)}>Settings</Link>
            <Link to="/logout" onClick={() => setIsMobileMenuOpen(false)}>Logout</Link>
          </div>
        )}
            <div className='menu-performance'>
            <div>
                    <div className='performance-options'>
                        <Link to="/performeval"><div className='list-items-div-performance'><h1>Performance Evaluation Matrix</h1></div></Link>
                        <Link to="/goalsetting"><div className='list-items-div-performance'><h1>Goal Settings</h1></div></Link>
                    </div>
                    <div className='performance-options'>
                    <Link to="/feedback"><div className='list-items-div-performance'><h1>Feedback and coaching tools</h1></div></Link>
                    <Link to="/performreview"><div className='list-items-div-performance'><h1>Performance review</h1></div></Link>
                    </div> 
                </div>
                    
            </div>
        </div>
    </div>
    )
}

export default Performance
