import "../style/PostVideoPage.css";

import YouTubeCard from "../components/YoutubeCard";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import { Modal } from "../components/Modal";

import tempThumbnail from "../assets/images/ex1.jpg";

export const PostVideoPage = () => {
    const api = import.meta.env.VITE_API;
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState();
    const [message, setMessage] = useState("");

    const [formData, setFormData] = useState({
        video_id: "",
        type: "",
        date: "",
        title: "",
        description: "",
        link: "",
        created_date: "",
        thumbnail: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        try {
            const response = await axios.post(api + "video/", formData, {
                Headers: { "Content-Type": "application/json" },
            });
            const result = response;
            setStatus(result.status);
            setMessage(result.data.message);
            setShowModal(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            {showModal ? (
                <Modal
                    status={status}
                    message={message}
                    setShowModal={setShowModal}
                    location={"media"}
                />
            ) : null}
            <motion.div className="pv-container">
                <section className="pv-landing">
                    <p className="p-bold-regular">Create a Post</p>
                    <h1 className="h-medium pv-title">Video</h1>
                </section>
                <form action="" className="pv-form" onSubmit={handleSubmit}>
                    <div className="pv-preview-card">
                        <YouTubeCard
                            type={formData.type}
                            title={formData.title}
                            description={formData.description}
                            date={formData.date}
                            thumbnail={tempThumbnail}
                        />
                    </div>
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
                            maxLength={20}
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
                            maxLength={45}
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
                            maxLength={125}
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
        </>
    );
};
