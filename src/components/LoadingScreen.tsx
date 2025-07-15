import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const LoadingScreen = ({ onSkip }) => {
    const [progress, setProgress] = useState(0);
    

    useEffect(() => {
        if (progress >= 100) {
            setTimeout(()=>onSkip(),1000)
            
            return;
        }
        const timer = setInterval(() => {
            setProgress((prevProgress) => prevProgress + 1);
        }, 15);
        return () => clearInterval(timer);
    }, [progress, onSkip]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
        <div className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-50 transition-opacity duration-30 opacity-100`}>
            <div className="text-white text-4xl mb-8 font-bold">
                Cargando... {progress}%
            </div>
            <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-purple-500 transition-all duration-30 ease-in-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div >
    </motion.div>
    );
};

export default LoadingScreen;
