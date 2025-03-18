import "../style/ManageVideosPage.css"
import { motion } from "framer-motion"

export const ManageVideosPage = () => {
    const api = import.meta.env.VITE_API;
    return (
        <motion.div className="manage-videos-container">
            <section className="manage-videos-landing">
                <p className="p-bold-regular">Welcome to the</p>
                <h1 className="h-medium manage-videos-title">Manage Videos</h1>
            </section>
           
        
        </motion.div>
    )
}