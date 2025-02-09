import "../style/FYPCard.css";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

export const FYPCard = ({ image, smalltxt, maintxt, location }) => {
    return (
        <Link to={location} className="fyp-card">
            <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2 }}
                whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                className="fyp-card-container"
                style={{ backgroundImage: `url(${image})` }}
            >
                {/* <div className="fyp-background"></div> */}
                <div className="fyp-overlay"></div>
                <div className="fyp-info-container">
                    <div className="fyp-info">
                        <p className="p-bold-regular fyp-smalltxt">
                            {smalltxt}
                        </p>
                        <h1 className="p-bold-regular fyp-maintxt">
                            {maintxt}
                        </h1>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};
