import "../style/Button.css";
import { Link, useNavigate } from "react-router-dom";

export const Button = ({ text, btn_class, location }) => {
    return (
        <Link
            className={`button-container button-pd ${btn_class}`}
            to={location}
        >
            <p className="p-regular bold">{text}</p>
        </Link>
    );
};
