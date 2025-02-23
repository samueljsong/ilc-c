import "../style/PostVideoPage.css";

import YouTubeCard from "../components/YoutubeCard";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";

export const PostVideoPage = () => {
    const api = import.meta.env.VITE_API;

    const [formData, setFormData] = useState({
        video_id: "",
        type: "",
        date: "",
        title: "",
        description: "",
        link: "",
        createdDate: "",
        thumbnail: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        try {
            await axios.post(api + "video/", formData, {
                Headers: { "Content-Type": "application/json" },
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <motion.div className="pv-container">
            <section className="pv-landing">
                <p className="p-bold-regular">Create a Post</p>
                <h1 className="h-medium pv-title">Video</h1>
            </section>
            <form action="" className="pv-form" onSubmit={handleSubmit}>
                <div className="pv-form-inputs pv-type">
                    <label className="p-bold-regular" htmlFor="">
                        Type
                    </label>
                    <input
                        className="p-regular form-input"
                        type="text"
                        name="type"
                        value={formData.type}
                        placeholder="Ex. Sermon, Worship, etc."
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="pv-form-inputs pv-date">
                    <label className="p-bold-regular" htmlFor="">
                        Date
                    </label>
                    <input
                        className="p-regular form-input"
                        type="date"
                        value={formData.date}
                        name="date"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="pv-form-inputs pv-post-title">
                    <label className="p-bold-regular" htmlFor="">
                        Title
                    </label>
                    <input
                        className="p-regular form-input"
                        type="text"
                        name="title"
                        value={formData.title}
                        placeholder="Title for post"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="pv-form-inputs pv-description">
                    <label className="p-bold-regular" htmlFor="">
                        Description
                    </label>
                    <textarea
                        className="p-regular form-input"
                        placeholder="Short description for post"
                        name="description"
                        onChange={handleChange}
                        value={formData.description}
                        required
                    />
                </div>
                <div className="pv-form-inputs pv-link">
                    <label className="p-bold-regular" htmlFor="">
                        Link
                    </label>
                    <input
                        className="p-regular form-input"
                        type="text"
                        name="link"
                        placeholder="Youtube Link"
                        onChange={handleChange}
                        value={formData.value}
                        required
                    />
                </div>
                <button className="create-btn p-bold-regular">
                    Create Post
                </button>
            </form>
        </motion.div>
    );
};
