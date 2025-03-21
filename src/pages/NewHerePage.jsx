import "../style/NewHerePage.css";
import gmap from "../assets/images/location3.png";

import { motion } from "framer-motion";

export const NewHerePage = () => {
    return (
        <motion.div
            className="nhp-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: "0.50", delay: 0.25 }}
        >
            <section className="nhp-header">
                <h1 className="h-regular new-title">New Here?</h1>
                <h1 className="h-medium">
                    Plan a visit or connect with our community!
                </h1>
            </section>
            <section className="nhp-info">
                <div className="nhp-info-container">
                    <div className="nhp-info-text1">
                        <h1 className="p-bold-regular nhp-info-title">
                            Sunday Service
                        </h1>
                        <p className="p-regular">10:00AM - Main Service</p>
                    </div>
                    <div className="nhp-info-text2">
                        <h1 className="p-bold-regular nhp-info-title">
                            Address
                        </h1>
                        <p className="p-regular">
                            3232 272 Street <br />
                            Aldergrove BC <br />
                            V4W 3H6
                        </p>
                    </div>
                    <img src={gmap} alt="" className="gmap-img" />
                    <div className="nhp-info-text3">
                        <h1 className="p-bold-regular nhp-info-title">Email</h1>
                        <p className="p-regular">immanuel4710@gmail.com</p>
                    </div>
                    <div className="nhp-info-text4">
                        <h1 className="p-bold-regular nhp-info-title">Phone</h1>
                        <p className="p-regular">604 856 4710</p>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};
