import React from "react";
import "../style/YoutubeCard.css";
import { EventTags } from "./EventTags";
import ra from "../assets/images/ra.png";
import { motion } from "framer-motion";

const YouTubeCard = () => {
    const youtubeUrl = "https://youtu.be/xKgeIA7cDgE";

    const extractVideoId = (url) => {
        const regex =
            /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const videoId = extractVideoId(youtubeUrl);
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return (
        <motion.div
            className="yt-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
        >
            <div className="yt-content">
                <img
                    src={thumbnailUrl}
                    alt="YouTube Thumbnail"
                    className="yt-card-img"
                />
                <div className="yt-subsection">
                    <EventTags type={"SERMON"} />
                    <p className="p-bold-regular">FEBRUARY 12 13</p>
                </div>
                <h1 className="p-bold-regular eventcard-title">
                    In Faith We Live
                </h1>
                <p className="p-regular eventcard-description">
                    Timothy 1:7 - 2:1 : Learn about how God's love can help us
                </p>
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
