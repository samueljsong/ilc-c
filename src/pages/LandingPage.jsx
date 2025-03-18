import "../style/LandingPage.css";

import { Link, useNavigate } from "react-router-dom";

import ex1 from "../assets/images/ex1.jpg";
import ex2 from "../assets/images/ex2.jpg";
import ex3 from "../assets/images/ex3.jpg";
import camp from "../assets/images/camp.jpg";
import bible from "../assets/images/bible.jpg";

import { Button } from "../components/Button";
import { FYPCard } from "../components/FYPCard";
import { useRef } from "react";

import { motion } from "framer-motion";

export const LandingPage = () => {
    const api = import.meta.env.VITE_API;
    const navigate = useNavigate();

    return (
        <>
            <motion.div
                className="container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: "0.50", delay: 0.5 }}
            >
                <section className="hero">
                    <div className="hero-title">
                        <h1 className="p-bold-regular lp-subtitle">
                            Immanuel Lutheran Church
                        </h1>
                        <h1 className=" lp-title">
                            Together in Faith United in Love.
                        </h1>
                    </div>

                    <div className="hero-image">
                        <img src={ex1} className="hero-img-1" alt="" />
                        <img className="hero-img-2" src={ex3} alt="" />
                    </div>

                    <div className="hero-servicetime">
                        <p className="p-bold-regular ">Sunday Service Times</p>
                        <p className="p-regular">
                            <span className="bold">10:00am</span> - Main
                            Ministry
                        </p>
                    </div>

                    <div className="hero-location">
                        <p className="p-bold-regular ">Location</p>
                        <p className="p-regular">
                            3232 272 Street Aldergrove BC
                        </p>

                        <p className="p-bold-regular">Phone</p>
                        <p className="p-regular">604 856 4710</p>
                    </div>
                    <Button
                        text={"New Here?"}
                        btn_class={"btn-blue hero-btn"}
                        location={"/new"}
                    />
                </section>
            </motion.div>
            <div className="full-container">
                <section className="hero-about">
                    <div className="hero-about-container">
                        <h1 className="h-medium sub-title">
                            Welcome to Lutheran Church!
                        </h1>
                        <p className="p-regular">
                            Finding a church that feels like home can be a
                            challenge—we understand. That’s why at Immanuel
                            Lutheran Church, we aim to create a warm, welcoming
                            space where you can explore faith, build
                            relationships, and feel supported no matter where
                            you’re at in life.
                            <br />
                            <br />
                            Want to learn more about who we are, what we
                            believe, and how we do life together? Click that
                            “More About Us” button below. We’d love for you to
                            discover what makes our church family unique and how
                            you can be a part of it.
                            <br />
                            <br />
                            Let’s walk this journey together—one step at a time.
                        </p>

                        <Button
                            text="More About Us"
                            btn_class={"btn-white"}
                            location={"/about"}
                        />
                    </div>
                </section>
            </div>
            <div className="container2">
                <section className="fyp">
                    <h1 className="h-medium fyp-title sub-title">
                        Find Your Place
                    </h1>
                    <div className="fyp-cards">
                        <FYPCard
                            image={camp}
                            smalltxt={"Upcoming"}
                            maintxt={"Events"}
                            location={"/events"}
                        />
                        <FYPCard
                            image={ex2}
                            smalltxt={"On the go"}
                            maintxt={"Media"}
                            location={"/media"}
                        />
                        <FYPCard
                            image={bible}
                            smalltxt={"Learn more"}
                            maintxt={"About Us"}
                            location={"/about"}
                        />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
            </div>
        </>
    );
};
