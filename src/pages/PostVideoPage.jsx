import "../style/PostVideoPage.css";

import YouTubeCard from "../components/YoutubeCard";
import { motion } from "framer-motion";

export const PostVideoPage = () => {
    return (
        <motion.div className="pv-container">
            <section className="pv-landing">
                <p className="p-bold-regular">Create a Post</p>
                <h1 className="h-medium pv-title">Video</h1>
            </section>
            <form action="" className="pv-form">
                <div className="pv-form-inputs pv-type">
                    <label className="p-bold-regular" htmlFor="">
                        Type
                    </label>
                    <input
                        className="p-regular form-input"
                        type="text"
                        placeholder="Ex. Sermon, Worship, etc."
                    />
                </div>
                <div className="pv-form-inputs pv-date">
                    <label className="p-bold-regular" htmlFor="">
                        Date
                    </label>
                    <input className="p-regular form-input" type="date" />
                </div>
                <div className="pv-form-inputs pv-post-title">
                    <label className="p-bold-regular" htmlFor="">
                        Title
                    </label>
                    <input
                        className="p-regular form-input"
                        type="text"
                        placeholder="Title for post"
                    />
                </div>
                <div className="pv-form-inputs pv-description">
                    <label className="p-bold-regular" htmlFor="">
                        Description
                    </label>
                    <textarea
                        className="p-regular form-input"
                        placeholder="Short description for post"
                    />
                </div>
                <div className="pv-form-inputs pv-link">
                    <label className="p-bold-regular" htmlFor="">
                        Link
                    </label>
                    <input
                        className="p-regular form-input"
                        type="text"
                        placeholder="Youtube Link"
                    />
                </div>
                <button className="create-btn p-bold-regular">
                    Create Post
                </button>
            </form>
        </motion.div>
    );
};
