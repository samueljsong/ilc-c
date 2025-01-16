import "../style/FYPCard.css";

export const FYPCard = ({ image, smalltxt, maintxt }) => {
    return (
        <div
            className="fyp-card-container"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="fyp-background"></div>
            <div className="fyp-overlay"></div>
            <div className="fyp-info-container">
                <div className="fyp-info">
                    <p className="p-bold-regular fyp-smalltxt">{smalltxt}</p>
                    <h1 className="p-bold-regular fyp-maintxt">{maintxt}</h1>
                </div>
            </div>
        </div>
    );
};
