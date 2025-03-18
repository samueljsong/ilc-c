import "../style/ManageEventsPage.css"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import axios from "axios";
import { Events } from "../components/Events";

export const ManageEventsPage = () => {
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
        <motion.div className="manage-events-container">
            <section className="manage-events-landing">
                <p className="p-bold-regular">Welcome to the</p>
                <h1 className="h-medium manage-events-title">Manage Events</h1>
            </section>
            <h1 className="h-medium aboutus-ourvalues">Recurring Events</h1>
            <div className="manage-events-list">
            
            {
                recurringEvents.map((event) => {
                    return (
                        <div className="manage-events-card-container">
                            <Events
                                key={event.recurringEvent_id}
                                image={event.image_url}
                                title={event.title}
                                date={event.recurringDetail}
                                description={event.description}
                            />
                            <div className="manage-events-button-container">
                                <motion.button className="delete-button">
                                    Delete
                                </motion.button>
                                <motion.button className="edit-button">
                                    Edit
                                </motion.button>
                            </div>
                        </div>
                    );
                })
            }
            </div>
            <h1 className="h-medium aboutus-ourvalues">One-Time Events</h1>
            <div className="manage-recurringevents-list">
                {
                    events.map((event) => {
                        return (
                            <Events
                                key={event.event_id}
                                image={event.image_url}
                                title={event.title}
                                date={event.expirationDate.split("T")[0]}
                                description={event.description}
                            />
                        );
                    })
                }
            </div>
        </motion.div>
    )
}