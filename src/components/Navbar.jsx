import "../style/Navbar.css";
import logo from "/logo.png";
import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false); // State to manage menu open/close

    const [windowSize, setWindowSize] = useState(window.innerWidth); // State to manage window size

    const onLogoClickHandler = () => {
        navigate("/");
    };

    window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth);
    });

    const closeMenu = () => setMenuOpen(false); // Function to close the menu

    return (
        <nav className="nav-container">
            <div className="logo-container">
                <div
                    className="logo-img-container"
                    onClick={onLogoClickHandler}
                >
                    <img src={logo} alt="" />
                </div>

                {windowSize > 771 ? (
                    <div className="desktop-menu">
                        <Link className="p-bold-regular dm-item" to={"/"}>
                            HOME
                        </Link>
                        <Link className="p-bold-regular dm-item" to={"/about"}>
                            ABOUT
                        </Link>
                        <Link className="p-bold-regular dm-item" to={"/events"}>
                            EVENTS
                        </Link>
                        <Link className="p-bold-regular dm-item" to={"/media"}>
                            MEDIA
                        </Link>
                    </div>
                ) : (
                    <div className="burger-menu">
                        <Menu
                            right
                            width={250}
                            isOpen={menuOpen} // Control the menu's open/close state
                            onStateChange={({ isOpen }) => setMenuOpen(isOpen)} // Sync state with menu changes
                        >
                            <Link
                                className="menu-item p-bold-regular"
                                to={"/"}
                                onClick={closeMenu} // Close menu after clicking
                            >
                                Home
                            </Link>
                            <Link
                                className="menu-item p-bold-regular"
                                to={"/about"}
                                onClick={closeMenu} // Close menu after clicking
                            >
                                About
                            </Link>
                            <Link
                                className="menu-item p-bold-regular"
                                to={"/events"}
                                onClick={closeMenu} // Close menu after clicking
                            >
                                Events / News
                            </Link>
                            <Link
                                className="menu-item p-bold-regular"
                                to={"/media"}
                                onClick={closeMenu} // Close menu after clicking
                            >
                                Media
                            </Link>
                        </Menu>
                    </div>
                )}
            </div>
        </nav>
    );
};
