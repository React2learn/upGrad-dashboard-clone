import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHome, faPlayCircle, faBriefcase, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Home() {
    const [dark, setDark] = useState(() => {
        // Get the dark mode setting from local storage if available, or default to false
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode ? JSON.parse(savedDarkMode) : false;
    });

    const toggleDarkMode = () => {
        const newDarkMode = !dark;
        setDark(newDarkMode);
        // Save the dark mode setting to local storage
        localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    };

    // Update body background color when dark mode is toggled
    useEffect(() => {
        if (dark) {
            document.body.style.backgroundColor = '#2D3748'; // Set body background color to black
            document.body.style.color = '#FFFFFF';
        } else {
            document.body.style.backgroundColor = '#F8F8FF'; // Set body background color to white
            document.body.style.color = '#000000';
        }
    }, [dark]);

    const [selectedLink, setSelectedLink] = useState("Scheduled");

    const getCurrentDayAndDate = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const now = new Date();
        const day = days[now.getDay()];
        const date = now.getDate();
        const month = months[now.getMonth()];
        return `${day}, ${month} ${date}`;
    };

    const getCurrentMonthAndYear = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const now = new Date();
        const month = months[now.getMonth()];
        const year = now.getFullYear();
        return `${month} ${year}`;
    };

    return (
        <>
            {/* Header with light and dark mode */}
            <div className={`header bg-white text-dark p-2 ${dark ? 'dark' : ''} flex justify-between items-center`} style={{ '--tw-bg-opacity': '1', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
                <div className="header-logo pl-10" style={{ fontFamily: "math" }}>
                    <h1 className="text-2xl font-bold text-red-600" style={{ fontFamily: 'Be Vietnam Pro' }}>upGrad</h1>
                </div>

                {/* SearchBar Code */}
                <div className="header-search-bar m-1">
                    <div className={`w-[250px] h-[39px] bg-gray-600 rounded-[10px] flex items-center px-2 ${dark ? 'bg-gray-800' : 'bg-gray-300'}`}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white mr-2" />
                        <input type="text" className="w-full bg-transparent pl-2 text-white placeholder-white outline-none focus:outline-none" placeholder="Search..." style={{ fontFamily: "Math" }} />
                    </div>
                </div>

                {/* NavBar Links */}
                <div className="header-nav-links" style={{ fontFamily: "Be Vietnam Pro'", color: dark ? "rgb(170 170 170)" : "#4d4d4d", fontWeight: 500 }}>
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    <a href="/" className="text-md pr-8">
                        <span className="">Learn</span>
                    </a>
                    <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />
                    <a href="/about" className=" text-md pr-8">Live</a>
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                    <a href="/contact" className="text-md">Jobs</a>
                </div>


                {/* Toggle Switch */}
                
                <div className="header-links m-1 flex">
                <div className="user-profile flex items-center justify-center px-5">
                <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: '26px',color: dark ? "rgb(170 170 170)" : "#4d4d4d" }} />
                </div>
                    <div className={`w-[49px] h-[29px] rounded-[50px] border-2 border-gray-600 flex items-center pl-1 cursor-pointer ${dark ? 'bg-gray-600' : ''}`} onClick={toggleDarkMode}>
                        <div className={`w-[19px] h-[17px] rounded-full ${dark ? 'ml-auto' : ''} ${dark ? 'mr-1' : 'ml-0'} ${dark ? 'bg-white' : 'bg-gray-600'}`}></div>
                    </div>
                </div>
            </div>

            {/* Main Content (Home Component) */}
            <div className="flex">
                {/* Sidebar */}
                <div className="bg-gray-800 min-h-screen w-60 text-sm" style={{ fontFamily: 'Be Vietnam Pro', color: "#aeb6c4", fontWeight: 500 }}>
                    <div className="p-4">
                        <p className="pb-5">Live Dashboard</p>
                        <p className="text-white bg-gray-700 rounded-md py-2 px-3">
                            <FontAwesomeIcon icon={faHome} className="mr-3" />
                            <span style={{ fontFamily: "Be Vietnam Pro", fontWeight: 400, fontStyle: "normal", color: "#e5e7eb", fontSize: 14 }}>My Classroom</span>
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="main-content-wrapper" style={{ width: "calc(100% - 60px)" }}>
                    <div className="main-content shadow-sm" style={{ borderBottom: "2px solid #e5e7eb" }}>
                        <div className="p-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 14, color: dark ? "#FFFFFF" : "rgb(72 78 87)", fontWeight: 500 }}>
                            {getCurrentDayAndDate()}
                            <div className="text-2xl mt-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 600, color: dark ? "#FFFFFF" : "#2d3748" }}>
                                My Classroom
                            </div>
                            <div className="flex justify-between">
                                <div className="main-content-links mt-8" style={{ fontFamily: "'Be Vietnam Pro', sans-serif", color: dark ? "#FFFFFF" : "rgb(72 78 87)", fontWeight: 600, fontSize: 16 }}>
                                    <a
                                        className={`mr-6 text-md ${selectedLink === "Scheduled" ? "border-b-3 border-black" : ""}`}
                                        href="/"
                                        onClick={() => setSelectedLink("Scheduled")}
                                        style={{ borderBottom: selectedLink === "Scheduled" ? "3.5px solid " + (dark ? "#1a202c" : "#1a202c") : "", paddingBottom: 17 }}
                                    >
                                        Scheduled
                                    </a>
                                    <a
                                        className={`mr-6 text-md ${selectedLink === "Completed" ? "border-b-3 border-black" : ""}`}
                                        href="/"
                                        onClick={() => setSelectedLink("Completed")}
                                        style={{ borderBottom: selectedLink === "Completed" ? "3.5px solid black" : "", paddingBottom: 17 }}
                                    >
                                        Completed
                                    </a>
                                    <a
                                        className={`mr-6 text-md ${selectedLink === "Cancelled" ? "border-b-3 border-black" : ""}`}
                                        href="/"
                                        onClick={() => setSelectedLink("Cancelled")}
                                        style={{ borderBottom: selectedLink === "Cancelled" ? "3.5px solid black" : "", paddingBottom: 17 }}
                                    >
                                        Cancelled
                                    </a>
                                </div>
                                <div className="month-container mt-5 px-4 py-1 border-2px rounded-md bg-gray-700 text-white text-sm flex justify-center items-center" style={{ backgroundColor: dark ? '#4a5568' : '' }}>
                                    {getCurrentMonthAndYear()}
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="content flex justify-center items-center p-48">
                        <div className="text-center">
                            <p className="pb-2 text-lg" style={{ fontWeight: 600, fontFamily: "'Be Vietnam Pro', sans-serif", color: dark ? "#FFFFFF" : "#2d3748" }}>No Live sessions scheduled</p>
                            <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", color: dark ? "#FFFFFF" : "#718096" }}>Please check with your upGrad representative <br />
                                or write to us at <u className="text-blue-600">studentsupport@upgrad.com</u>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
