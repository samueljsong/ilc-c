import "../style/MediaPage.css";

import YouTubeCard from "../components/YoutubeCard";

import { motion } from "framer-motion";

export const MediaPage = () => {
    return (
        <motion.div
            className="mp-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: "0.50", delay: 0.25 }}
        >
            <div className="mp-landing">
                <div>
                    <p className="p-bold-regular">Our Memories</p>
                    <h1 className="h-medium mp-title">Media</h1>
                </div>
                <span className="separator"></span>
                <div className="yt-card-container">
                    <YouTubeCard />
                    <YouTubeCard />
                    <YouTubeCard />
                </div>
            </div>
        </motion.div>
    );
};
