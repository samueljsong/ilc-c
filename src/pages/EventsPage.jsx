import "../style/EventsPage.css";
import placeholder from "../assets/images/ex2.jpg";

import { Events } from "../components/Events";

export const EventsPage = () => {
    return (
        <div className="ep-container">
            <section className="ep-landing">
                <h1 className="p-bold-regular ep-subtitle">Lutheran Events</h1>
                <h1 className="h-medium ep-title">
                    Happening <br /> Here
                </h1>
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
                <div></div>
            </section>
        </div>
    );
};
