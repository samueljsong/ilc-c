import "../style/AdminPage.css";
import calendar from "../assets/svg/calendar.svg";
import video from "../assets/svg/video.svg";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TaskButton } from "../components/TaskButton";

export const AdminPage = () => {
    const navigate = useNavigate();

    const onPostEventClickHandler = () => {
        navigate("/admin/event");
    };

    const onPostVideoClickHandler = () => {
        navigate("/admin/video");
    };

    return (
        <motion.div className="admin-container">
            <section className="admin-landing">
                <p className="p-bold-regular">Welcome to the</p>
                <h1 className="h-medium admin-title">Admin Page</h1>
            </section>
            <div className="admin-tasks-container">
                <TaskButton
                    task={"Create an Event"}
                    image={calendar}
                    nav={onPostEventClickHandler}
                />
                <TaskButton
                    task={"Post a Video"}
                    image={video}
                    nav={onPostVideoClickHandler}
                />
            </div>
        </motion.div>
    );
};
