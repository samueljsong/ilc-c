import "../style/Navbar.css";
import logo from "/logo.png";

export const Navbar = () => {
    return (
        <nav className="nav-container">
            <div className="logo-container">
                <div className="logo-img-container">
                    <img src={logo} alt="" />
                </div>
                <div></div>
            </div>

            <div className="nav-elements">
                <div className="element"></div>
                <div className="element"></div>
                <div className="element"></div>
            </div>
        </nav>
    );
};
