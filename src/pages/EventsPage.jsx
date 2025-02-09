import "../style/EventsPage.css";
import placeholder from "../assets/images/ex2.jpg";
import placeholder2 from "../assets/images/temp1.png";
import { motion } from "framer-motion";

import { Events } from "../components/Events";

export const EventsPage = () => {
    return (
        <motion.div
            className="ep-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: "0.50", delay: 0.25 }}
        >
            <section className="ep-landing">
                <h1 className="p-bold-regular ep-subtitle">Upcoming</h1>
                <h1 className="h-medium ep-title">Events</h1>
                <p className="p-regular">
                    Immanuel Lutheran Church ministries meet throughout the week
                    to connect in various ways. Find out what's coming up and
                    consider joining us!
                </p>
            </section>
            <span className="separator"></span>
            <section className="events-container">
                <Events
                    image={placeholder}
                    title={"Bible Study and Choir Practice"}
                    date={"Every Thursdays"}
                    description={
                        "Every week ok Thursdays, come join us for bible study, choir practice and fellowship!"
                    }
                />
                <Events
                    image={placeholder2}
                    title={"Gainer's Lunch"}
                    date={"Every Third Thursdays"}
                    description={
                        "Every third Thursdays, come have fellowship with us at Gainer's Lunch!"
                    }
                />
                <Events
                    image={placeholder2}
                    title={"Gainer's Lunch"}
                    date={"Every Third Thursdays"}
                    description={
                        "Every third Thursdays, come have fellowship with us at Gainer's Lunch!"
                    }
                />
                <Events
                    image={placeholder2}
                    title={"Gainer's Lunch"}
                    date={"Every Third Thursdays"}
                    description={
                        "Every third Thursdays, come have fellowship with us at Gainer's Lunch!"
                    }
                />
                <Events
                    image={placeholder2}
                    title={"Gainer's Lunch"}
                    date={"Every Third Thursdays"}
                    description={
                        "Every third Thursdays, come have fellowship with us at Gainer's Lunch!"
                    }
                />
                <div></div>
            </section>
        </motion.div>
    );
};
