import React, { useState } from "react";
import "./Navbar.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import search_light from "../../assets/search-w.png";
import search_dark from "../../assets/search-b.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import menu_icon from "../../assets/menubtn.jpg";

function Navbar({ theme, settheme }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggle_mode = () => {
        theme === "light" ? settheme("dark") : settheme("light");
        console.log("clicked");
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className={`navbar ${theme === "light" ? "" : "dark"}`}>
                <img src={theme === "light" ? logo_light : logo_dark} alt="Logo" className="logo" />
                <div className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Products</li>
                        <li>Home</li>
                    </ul>
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search anything" />
                    <img src={theme === "light" ? search_light : search_dark} alt="search" />
                </div>
                <img
                    onClick={toggle_mode}
                    src={theme === "light" ? toggle_light : toggle_dark}
                    alt="Toggle Theme"
                    className="toggle-icon"
                />
                <img
                    onClick={toggleMobileMenu}
                    src={menu_icon}
                    alt="Menu"
                    className="menu-icon"
                />
            </div>
        </>
    );
}

export default Navbar;
