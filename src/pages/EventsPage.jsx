import "../style/EventsPage.css";
import placeholder from "../assets/images/ex2.jpg";
import placeholder2 from "../assets/images/temp1.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import { Events } from "../components/Events";

export const EventsPage = () => {
    const api = import.meta.env.VITE_API;
    const [events, setEvents] = useState([]);
    const [hasFetched, setHasFetched] = useState(false);
    const [recurringHasFetched, setRecurringHasFetched] = useState(false);
    const [recurringEvents, setRecurringEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            if (hasFetched) return;

            try {
                const response = axios.get(api + "post/", {
                    headers: { "Content-Type": "application/json" },
                });
                const result = (await response).data;
                setEvents(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            }

            setHasFetched(true);
        };

        const fetchRecurringEvents = async () => {
            if (recurringHasFetched) return;

            try {
                const response = axios.get(api + "post/recurring", {
                    headers: { "Content-Type": "application/json" },
                });
                const result = (await response).data;
                setRecurringEvents(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            }

            setRecurringHasFetched(true);
        };

        fetchRecurringEvents();
        fetchEvents();
    }, []);

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
            <h1 className="h-medium aboutus-ourvalues">Recurring Events</h1>
            <section className="events-container">
                {recurringEvents.map((event) => {
                    return (
                        <Events
                            key={event.recurringEvent_id}
                            image={event.image_url}
                            title={event.title}
                            date={event.recurringDetail}
                            description={event.description}
                        />
                    );
                })}
            </section>
            <h1 className="h-medium aboutus-ourvalues">Upcoming Events</h1>
            <section className="events-container">
                {events.map((event) => {
                    return (
                        <Events
                            key={event.event_id}
                            image={event.image_url}
                            title={event.title}
                            date={event.expirationDate.split("T")[0]}
                            description={event.description}
                        />
                    );
                })}
            </section>
        </motion.div>
    );
};
