import "../style/Events.css";

import { EventTags } from "./EventTags";

export const Events = ({ image, title, date, description }) => {
    return (
        <div className="eventcard-container">
            <img src={image} alt="" className="eventcard-image" />
            <div className="eventcard-tag-container">
                <EventTags type={"EVERYDAY"} />
            </div>

            <div className="eventcard-info">
                <h1 className="p-bold-regular eventcard-title">{title}</h1>
                <h2 className="p-bold-regular eventcard-date">{date}</h2>
                <p className="p-regular eventcard-description">{description}</p>
                <div className="eventcard-learnmore-container">
                    <h1 className="p-bold-regular eventcard-learnmore">
                        Learn More
                    </h1>
                </div>
            </div>
        </div>
    );
};
