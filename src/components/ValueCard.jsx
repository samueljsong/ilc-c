import "../style/ValueCard.css";

export const ValueCard = ({ card }) => {
    return (
        <div className="valuecard-container">
            <div className="valuecard-content">
                <img className="valuecard-icon" src={card.icon} alt="" />
                <h1 className="p-bold-regular">{card.title}</h1>
                <span className="valuecard-line"></span>
                <p className="p-regular">{card.description}</p>
                <p className="p-bold-regular">{card.verse}</p>
            </div>
        </div>
    );
};
