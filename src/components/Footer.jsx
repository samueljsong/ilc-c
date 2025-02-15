import "../style/Footer.css";

import fb from "../assets/images/facebook.png";
import ig from "../assets/images/ig.png";
import email from "../assets/images/email.png";

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-logo-container">
                    <img src="/logo.png" alt="" className="footer-logo" />
                </div>
                {/* <div className="footer-socials">
                    <div className="socials-container">
                        <img src={fb} alt="" className="socials" />
                    </div>
                    <div className="socials-container">
                        <img src={ig} alt="" className="socials" />
                    </div>
                    <div className="socials-container">
                        <img src={email} alt="" className="socials" />
                    </div>
                </div> */}
                <span className="separator"></span>
                <div className="footer-copyright">
                    <p className="p-bold-regular">
                        © Immanuel Lutheran Church 2025
                    </p>
                </div>
            </div>
        </div>
    );
};
