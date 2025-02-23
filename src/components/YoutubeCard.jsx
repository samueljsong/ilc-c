import React from "react";
import "../style/YoutubeCard.css";
import { EventTags } from "./EventTags";
import ra from "../assets/images/ra.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const YouTubeCard = ({
    thumbnail,
    type,
    title,
    description,
    link,
    id,
    date,
}) => {
    const navigate = useNavigate();

    const onCardClickHandler = () => {
        // now navigate to video page
    };

    return (
        <motion.div
            className="yt-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
            onClick={onCardClickHandler}
        >
            <div className="yt-content">
                <img
                    src={thumbnail}
                    alt="YouTube Thumbnail"
                    className="yt-card-img"
                />
                <div className="yt-subsection">
                    <EventTags type={type} />
                    <p className="p-bold-regular">{date}</p>
                </div>
                <h1 className="p-bold-regular eventcard-title">{title}</h1>
                <p className="p-regular eventcard-description">{description}</p>
                <div className="eventcard-learnmore-container">
                    <h1 className="p-bold-regular eventcard-learnmore">
                        Watch Now
                    </h1>
                    <img src={ra} alt="" />
                </div>
            </div>
        </motion.div>
    );
};

export default YouTubeCard;
