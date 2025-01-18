import "../style/FYPCard.css";
import { Link, useNavigate } from "react-router-dom";

export const FYPCard = ({ image, smalltxt, maintxt, location }) => {
    return (
        <Link
            className="fyp-card-container"
            style={{ backgroundImage: `url(${image})` }}
            to={location}
        >
            <div className="fyp-background"></div>
            <div className="fyp-overlay"></div>
            <div className="fyp-info-container">
                <div className="fyp-info">
                    <p className="p-bold-regular fyp-smalltxt">{smalltxt}</p>
                    <h1 className="p-bold-regular fyp-maintxt">{maintxt}</h1>
                </div>
            </div>
        </Link>
    );
};
