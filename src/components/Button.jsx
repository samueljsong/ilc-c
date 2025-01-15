import "../style/Button.css";

export const Button = ({ text, btn_class }) => {
    return (
        <div className={`button-container button-pd ${btn_class}`}>
            <p className="p-regular bold">{text}</p>
        </div>
    );
};
