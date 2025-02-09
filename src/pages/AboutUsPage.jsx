import "../style/AboutUsPage.css";
import { ValueCard } from "../components/ValueCard";

import scriptureIcon from "../assets/images/values/bible.png";
import jesusIcon from "../assets/images/values/cross.png";
import graceIcon from "../assets/images/values/church.png";
import faithIcon from "../assets/images/values/pray.png";

const scripture = {
    title: "Scripture Alone",
    description:
        "The Bible is God’s inerrant and infallible Word, in which He reveals His law and His gospel of salvation in Jesus Christ, The Son of God. It is the sole rule and norm for Christian doctrine.",
    verse: "2 Timothy 3:16",
    icon: scriptureIcon,
};

const jesus = {
    title: "Jesus Alone",
    description:
        "Salvation is made possible only by Jesus Christ, God’s Son, and not by anyone else. As Lord and Savior, He alone has the power to save sinners and grant them eternal life",
    verse: "John 14:6",
    icon: jesusIcon,
};

const grace = {
    title: "Grace Alone",
    description:
        "God loves the people of the world, even though we are sinful, rebel against Him, and do not deserve His love. He sent Jesus, His Son, to love the unlovable and save the ungodly. By His suffering and death in our place Jesus purchased our forgiveness and won eternal life for us",
    verse: "Ephesians 2:8-9",
    icon: graceIcon,
};

const faith = {
    title: "Faith Alone",
    description:
        "All who hear this good news and believe it have the eternal life that God offers. God creates faith in Christ and gives people forgiveness through Jesus.",
    verse: "Romans 5:1",
    icon: faithIcon,
};

export const AboutUsPage = () => {
    return (
        <div className="aboutus-container">
            <section className="aboutus-landing">
                <p className="p-bold-regular">Get to know more</p>
                <h1 className="h-medium mp-title">About Us</h1>
                <p className="p-regular">
                    Empowered by the Holy Spirit, Faith Lutheran Church (FLC)
                    shares with everyone the love and forgiveness of God through
                    Jesus Christ, His Son, our Lord.
                </p>
            </section>
            <span className="separator"></span>
            <section className="aboutus-values-container">
                <h1 className="h-medium">Our Values</h1>
                <ValueCard card={scripture} />
                <ValueCard card={jesus} />
                <ValueCard card={grace} />
                <ValueCard card={faith} />
            </section>
        </div>
    );
};
