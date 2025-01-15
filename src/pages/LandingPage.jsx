import "../style/LandingPage.css";
import ex2 from "../assets/images/ex2.jpg";
import ex3 from "../assets/images/ex3.jpg";

import { Button } from "../components/Button";

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
                    <Button />
                </section>
            </div>
        </>
    );
};
