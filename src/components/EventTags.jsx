import "../style/EventTags.css";

export const EventTags = ({ type }) => {
    return (
        <div className="eventtag-container">
            <h1 className="p-regular">{type}</h1>
        </div>
    );
};
