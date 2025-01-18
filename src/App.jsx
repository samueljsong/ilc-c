import "./App.css";
import "./fonts.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { AdminLoginPage } from "./pages/AdminLoginPage";
import { Navbar } from "./components/Navbar";
import { NewHerePage } from "./pages/NewHerePage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { EventsPage } from "./pages/EventsPage";
import { MediaPage } from "./pages/MediaPage";

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/admin" element={<AdminLoginPage />} />
                <Route path="/new" element={<NewHerePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/media" element={<MediaPage />} />
            </Routes>
        </div>
    );
}

export default App;
