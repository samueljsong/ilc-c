import "../style/Navbar.css";
import logo from "/logo.png";
import React from "react";
import { slide as Menu } from "react-burger-menu"; // Import the menu type you want
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    const onLogoClickHandler = () => {
        navigate("/");
    };

    return (
        <nav className="nav-container boxshadow">
            <div className="logo-container">
                <div
                    className="logo-img-container"
                    onClick={onLogoClickHandler}
                >
                    <img src={logo} alt="" />
                </div>
                <div className="burger-menu">
                    <Menu right width={250}>
                        <a className="menu-item p-bold-regular" href="#home">
                            Home
                        </a>
                        <a className="menu-item p-bold-regular" href="#about">
                            About
                        </a>
                        <a
                            className="menu-item p-bold-regular"
                            href="#services"
                        >
                            Events / News
                        </a>
                        <a className="menu-item p-bold-regular" href="#contact">
                            Media
                        </a>
                    </Menu>
                </div>
            </div>
        </nav>
    );
};
