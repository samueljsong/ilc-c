import "../style/Button.css";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

export const Button = ({ text, btn_class, location }) => {
    return (
        <motion.div
            className="framer-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
        >
            <Link
                className={`button-container button-pd ${btn_class}`}
                to={location}
            >
                <p className="p-regular bold">{text}</p>
            </Link>
        </motion.div>
    );
};
