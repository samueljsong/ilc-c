import "../style/TaskButton.css";
import { motion } from "framer-motion";

export const TaskButton = ({ task, image, nav }) => {
    return (
        <motion.div
            className="task-container"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
            onClick={nav}
        >
            <img src={image} alt="" className="task-image" />
            <h1 className="p-bold-regular task-name">{task}</h1>
        </motion.div>
    );
};
