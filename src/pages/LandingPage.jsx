import "../style/LandingPage.css";
import email from "../assets/images/email.png";
import ig from "../assets/images/ig.png";
import facebook from "../assets/images/facebook.png";
import ex2 from "../assets/images/ex2.jpg";
import ex3 from "../assets/images/ex3.jpg";

export const LandingPage = () => {
    const api = import.meta.env.VITE_API;

    return (
        <>
            <div className="container">
                <section className="hero">
                    <div className="hero-title">
                        <h1 className="h-medium">Lutheran Church</h1>
                        <h1 className="h-light">Together in Faith</h1>
                        <h1 className="h-light">United in Love.</h1>
                        <h1 className="h-light">
                            Through Faith alone, by Scripture alone, in Christ
                            alone, by Grace alone!
                        </h1>
                        <h1 className="h-light">United in Love.</h1>
                    </div>

                    <div className="hero-image">
                        <img src={ex2} alt="" />
                    </div>

                    <div className="hero-servicetime">
                        <p className="p-bold-regular ">Sunday Service Times</p>
                        <p className="p-regular">
                            <span className="bold">10:00am</span> - Main
                            Ministry
                        </p>
                    </div>

                    <div className="hero-location">
                        <p className="p-bold-regular ">Location</p>
                        <p className="p-regular">
                            3232 272 Street Aldergrove BC
                        </p>
                    </div>

                    <div className="hero-socials">
                        <div className="socials-icon">
                            <img src={facebook} alt="" />
                        </div>
                        <div className="socials-icon">
                            <img src={ig} alt="" />
                        </div>
                        <div className="socials-icon">
                            <img src={email} alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
