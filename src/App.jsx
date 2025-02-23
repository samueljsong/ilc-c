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
import { Footer } from "./components/Footer";
import { AdminPage } from "./pages/AdminPage";
import { ErrorPage } from "./pages/ErrorPage";
import { PostVideoPage } from "./pages/PostVideoPage";
import { PostEventPage } from "./pages/PostEventPage";
import { VideoDetailsPage } from "./pages/VideoDetailsPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <>
            <div className="app-container">
                <Navbar />
                <ScrollToTop></ScrollToTop>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<AdminLoginPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/new" element={<NewHerePage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/media" element={<MediaPage />} />
                    <Route path="/admin/video" element={<PostVideoPage />} />
                    <Route path="/admin/event" element={<PostEventPage />} />
                    <Route
                        path="/media/video/:id"
                        element={<VideoDetailsPage />}
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
            <Footer></Footer>
        </>
    );
}

export default App;
