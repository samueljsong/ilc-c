import "../style/PostEventPage.css";
import { motion } from "framer-motion";

export const PostEventPage = () => {
    return (
        <motion.div className="pe-container">
            <section className="pe-landing">
                <p className="p-bold-regular">Create a Post</p>
                <h1 className="h-medium pe-title">Event</h1>
            </section>
        </motion.div>
    );
};
