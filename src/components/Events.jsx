import React, { useState } from "react";
import "../style/Events.css";
import ra from "../assets/images/ra.png";
import { EventTags } from "./EventTags";
import { motion } from "framer-motion";

export const Events = ({ image, title, date, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="eventcard-container"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <img src={image} alt="" className="eventcard-image" />
            <div className="eventcard-tag-container">
                <EventTags type={date} />
            </div>

            <div className="eventcard-info">
                <h1
                    className="p-bold-regular eventcard-title"
                    style={{ color: isHovered ? "var(--highlight1)" : "#000" }}
                >
                    {title}
                </h1>
                <p className="p-regular eventcard-description">{description}</p>
                <div className="eventcard-learnmore-container">
                    <h1
                        className="p-bold-regular eventcard-learnmore"
                        style={{
                            color: isHovered ? "var(--highlight1)" : "#000",
                        }}
                    >
                        Learn More
                    </h1>
                    <img src={ra} alt="" />
                </div>
            </div>
        </motion.div>
    );
};
