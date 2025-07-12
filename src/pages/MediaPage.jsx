import "../style/MediaPage.css";

import YouTubeCard from "../components/YoutubeCard";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

export const MediaPage = () => {
    const api = import.meta.env.VITE_API;
    const [hasFetched, setHasFetched] = useState(false);
    const [allVideos, setAllVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (hasFetched) return;

            try {
                const response = axios.get(api + "video/", {
                    headers: { "Content-Type": "application/json" },
                });
                const result = (await response).data;
                setAllVideos(result);
            } catch (error) {
                console.log(error);
            }

            setHasFetched(true);
        };

        fetchData();
    }, []);

    return (
        <motion.div
            className="mp-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: "0.50", delay: 0.25 }}
        >
            <div className="mp-landing">
                <div>
                    {/* <p className="p-bold-regular">Our Memories</p> */}
                    <h1 className="h-medium mp-title">Media</h1>
                </div>
                <span className="separator"></span>
                <div className="yt-card-container">
                    {allVideos.map((video) => {
                        return (
                            <YouTubeCard
                                key={video.video_id}
                                title={video.title}
                                description={video.description}
                                thumbnail={video.thumbnail}
                                link={video.link}
                                id={video.video_id}
                                date={video.date}
                                type={video.type}
                            />
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};
