import "../style/NewHerePage.css";
import gmap from "../assets/images/location3.png";

export const NewHerePage = () => {
    return (
        <div className="nhp-container">
            <section className="nhp-header">
                <h1 className="h-regular new-title">New Here?</h1>
                <h1 className="h-medium">
                    Plan a visit or connect with our community!
                </h1>
            </section>
            <section className="nhp-info">
                <div className="nhp-info-container">
                    <div>
                        <h1 className="p-bold-regular nhp-info-title">
                            Sunday Service
                        </h1>
                        <p className="p-regular">10:00AM - Main Service</p>
                    </div>
                    <div>
                        <h1 className="p-bold-regular nhp-info-title">
                            Address
                        </h1>
                        <p className="p-regular">
                            3232 272 Street <br />
                            Aldergrove BC <br />
                            V4W 3H6
                        </p>
                    </div>
                    <img src={gmap} alt="" className="gmap-img" />
                    <div>
                        <h1 className="p-bold-regular nhp-info-title">Email</h1>
                        <p className="p-regular">
                            immanuellutheranchurch@gmail.com
                        </p>
                    </div>
                    <h1 className="p-bold-regular nhp-info-title">
                        Immanuel Lutheran Church
                    </h1>
                </div>
            </section>
        </div>
    );
};
