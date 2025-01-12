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
                    </div>

                    <div className="hero-images">
                        <div className="hero-img-container hic-1">
                            <img src={ex2} alt="" />
                        </div>
                        <div className="hero-img-container hic-2">
                            <img src={ex3} alt="" />
                        </div>
                    </div>

                    <div className="hero-servicetime">
                        <p className="p-bold-regular ">Sunday Service Times</p>
                        <p className="p-regular">
                            <span className="bold">9:00am</span> - Adult
                            Ministry
                        </p>
                        <p className="p-regular">
                            {" "}
                            <span className="bold">12:00am</span> - Youth
                            Ministry
                        </p>
                    </div>
                    <div className="hero-location">
                        <p className="p-bold-regular ">Location</p>
                        <p className="p-regular">
                            10045 154 Street Unit 5, Surrey BC
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
                <footer></footer>
            </div>
        </>
    );
};
