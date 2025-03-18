import "../style/Navbar.css";
import logo from "/logo.png";
import React, { useEffect, useRef, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

export const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const menuRef = useRef(null); // Ref for the menu

    const onLogoClickHandler = () => {
        navigate("/");
    };

    useEffect(() => {
        const handleResize = () => setWindowSize(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false); // Close the menu when clicking outside
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const closeMenu = () => setMenuOpen(false);

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
                            <motion.p
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.1 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                HOME
                            </motion.p>
                        </Link>
                        <Link className="p-bold-regular dm-item" to={"/about"}>
                            <motion.p
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.1 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                ABOUT
                            </motion.p>
                        </Link>
                        <Link className="p-bold-regular dm-item" to={"/events"}>
                            <motion.p
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.1 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                EVENTS
                            </motion.p>
                        </Link>
                        <Link className="p-bold-regular dm-item" to={"/media"}>
                            <motion.p
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.1 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                MEDIA
                            </motion.p>
                        </Link>
                    </div>
                ) : (
                    <div className="burger-menu" ref={menuRef}>
                        <Menu
                            right
                            width={250}
                            isOpen={menuOpen}
                            onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
                        >
                            <Link
                                className="menu-item p-bold-regular"
                                to={"/"}
                                onClick={closeMenu}
                            >
                                <p>HOME</p>
                            </Link>
                            <Link
                                className="menu-item p-bold-regular"
                                to={"/about"}
                                onClick={closeMenu}
                            >
                                <p>ABOUT</p>
                            </Link>
                            <Link
                                className="menu-item p-bold-regular"
                                to={"/events"}
                                onClick={closeMenu}
                            >
                                <p>EVENTS</p>
                            </Link>
                            <Link
                                className="menu-item p-bold-regular"
                                to={"/media"}
                                onClick={closeMenu}
                            >
                                <p>MEDIA</p>
                            </Link>
                        </Menu>
                    </div>
                )}
            </div>
        </nav>
    );
};
