import { useParams } from "react-router-dom";
import "../style/VideoDetailsPage.css";
import { motion } from "framer-motion";

export const VideoDetailsPage = () => {
    const videoId = useParams().id;

    return (
        <motion.div
            className="vdp-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: "0.50", delay: 0.25 }}
        >
            <div className="vdp-landing">
                <div>
                    {/* <p className="p-bold-regular">Our Memories</p> */}
                    <h1 className="h-medium vdp-title">Watch Now</h1>
                </div>
                <span className="separator"></span>
                <div className="vdp-video-container">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            position: "center",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                    ></iframe>
                </div>
            </div>
        </motion.div>
    );
};
