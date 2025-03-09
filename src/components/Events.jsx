import React, { useState } from "react";
import "../style/Events.css";
import { EventTags } from "./EventTags";
import { motion } from "framer-motion";
import temp from "../assets/images/ex1.jpg";

export const Events = ({ image, title, date, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="eventcard-container"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <img
                src={image || temp}
                alt=""
                className="eventcard-image"
                onError={(e) => (e.target.src = temp)}
            />
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
                        Don't miss out—join us!
                    </h1>
                </div>
            </div>
        </motion.div>
    );
};
