import "../style/Modal.css";
import { motion } from "framer-motion";
import check from "../assets/images/check.png";
import close from "../assets/images/close.png";
import { useNavigate } from "react-router-dom";

export const Modal = ({ status, message, setShowModal, location }) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        setShowModal(false);
    };

    const onSuccessButtonClickHandler = () => {
        navigate(`/${location}`);
    };

    const onFailButtonClickHandler = () => {
        location.reload();
    };

    return (
        <>
            <div className="modal-container" onClick={handleOnClick}></div>
            <div className="modal-card-container">
                {status === 200 ? (
                    <>
                        <img src={check} alt="" />
                        <h1 className="p-bold-regular">Success!</h1>
                    </>
                ) : (
                    <>
                        <img src={close} alt="" />
                        <h1 className="p-bold-regular">Error!</h1>
                    </>
                )}
                <p className="p-regular">{message}</p>
                {status === 200 ? (
                    <button
                        className="success-button p-bold-regular"
                        onClick={onSuccessButtonClickHandler}
                    >
                        Check Post
                    </button>
                ) : (
                    <button
                        className="fail-button p-bold-regular"
                        onClick={onFailButtonClickHandler}
                    >
                        Try Again
                    </button>
                )}
            </div>
        </>
    );
};
