import React, { useState } from 'react'
import "./Navbar.scss"
import { GoSearch } from 'react-icons/go'
import { IoIosNotifications } from 'react-icons/io'
import { IoMdArrowDropdown } from 'react-icons/io'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
    console.log(isScrolled);

    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My list</span>
                </div>
                <div className="right">
                    <GoSearch size={"24px"} className="icon" />
                    <span>KID</span>
                    <IoIosNotifications size={"24px"} className="icon" />
                    <img src="https://pdp.edu.vn/wp-content/uploads/2021/07/hinh-anh-spider-man-nguoi-nhen-dep-ngau-nhat.jpg" alt="" />
                    <div className="profile">
                        <IoMdArrowDropdown size={"18px"} className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
