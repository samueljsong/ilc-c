import "../style/PostEventPage.css";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios"; // Import axios for API calls
import { Events } from "../components/Events";
import { Cloudinary } from "@cloudinary/url-gen";
import { Modal } from "../components/Modal";

export const PostEventPage = () => {
    const api = import.meta.env.VITE_API;
    const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/dxp9ftmcw/upload`;
    const uploadPreset = `z5ejbum7`;
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState();
    const [message, setMessage] = useState("");

    const [formData, setFormData] = useState({
        type: "",
        date: "",
        recurringDetails: "",
        title: "",
        description: "",
        created_date: "",
        image_url: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.type) {
            alert("Please select either Recurring Event or One-Time Event.");
            return;
        }

        console.log(formData);

        try {
            const response = await axios.post(api + "post/", formData, {
                headers: { "Content-Type": "application/json" }, // Fix "Headers" to "headers"
            });
            const result = response;
            setStatus(result.status);
            setMessage(result.data.message);
            setShowModal(true);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset); // Ensure this matches Cloudinary

        try {
            const response = await axios.post(cloudinaryUploadUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setFormData((prev) => ({
                ...prev,
                image_url: response.data.secure_url,
            }));
        } catch (error) {
            console.error(
                "Error uploading image:",
                error.response?.data || error
            );
        }
    };

    return (
        <>
            {showModal ? (
                <Modal
                    status={status}
                    message={message}
                    setShowModal={setShowModal}
                    location={"events"}
                />
            ) : null}
            <motion.div className="pe-container">
                <section className="pe-landing">
                    <p className="p-bold-regular">Create a Post</p>
                    <h1 className="h-medium pe-title">Event</h1>
                </section>
                <form action="" className="pe-form" onSubmit={handleSubmit}>
                    <div className="pe-form-inputs pe-image-upload">
                        <label className="p-bold-regular">Upload Image</label>
                        <input
                            type="file"
                            className="p-regular form-input"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </div>
                    <div className="pe-type">
                        <div>
                            <input
                                className="p-regular form-input"
                                type="checkbox"
                                name="type"
                                value="recurring"
                                checked={formData.type === "recurring"}
                                onChange={handleChange}
                            />
                            <label className="p-bold-regular">
                                Recurring Event
                            </label>
                        </div>
                        <div>
                            <input
                                className="p-regular form-input"
                                type="checkbox"
                                name="type"
                                value="one-time"
                                checked={formData.type === "one-time"}
                                onChange={handleChange}
                            />
                            <label className="p-bold-regular">
                                One-Time Event
                            </label>
                        </div>
                    </div>
                    <div className="pe-form-inputs pe-date">
                        <label className="p-bold-regular">
                            {formData.type === "recurring"
                                ? "Recurring Event Details"
                                : "Date of the Event"}
                        </label>
                        {formData.type === "recurring" ? (
                            <input
                                className="p-regular form-input"
                                type="text"
                                name="recurringDetails"
                                value={formData.recurringDetails || ""}
                                placeholder="E.g., Every Sunday at 10 AM"
                                onChange={handleChange}
                                required
                            />
                        ) : (
                            <input
                                className="p-regular form-input"
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        )}
                    </div>
                    <div className="pe-form-inputs pe-post-title">
                        <label className="p-bold-regular">Title</label>
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
                    <div className="pe-form-inputs pe-description">
                        <label className="p-bold-regular">Description</label>
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
                    {/* Image Upload Section */}
                    <div className="pe-preview-card">
                        <Events
                            title={formData.title}
                            description={formData.description}
                            date={
                                formData.type === "recurring"
                                    ? formData.recurringDetails
                                    : formData.date
                            }
                            image={formData.image_url}
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
