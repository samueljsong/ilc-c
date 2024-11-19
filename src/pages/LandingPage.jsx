import "../style/LandingPage.css";

export const LandingPage = () => {
    const api = import.meta.env.VITE_API;

    return (
        <>
            <h1>{api}</h1>
        </>
    );
};
