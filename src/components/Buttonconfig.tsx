import React, { useState, useEffect, useRef } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Example = () => {
    return (
        <div className="flex justify-center items-center scale-50">
            <AnimatedHamburgerButton />
        </div>
    );
};

import { FaGithub, FaGoogleDrive,FaWhatsapp, FaCog, FaHome, FaNewspaper, FaPenFancy, FaStar, FaRocket } from "react-icons/fa";

type SocialIconsProps = {
    github?: string;
    facebook?: string;
    googleDrive?: string;
 
    whatsapp?: string;
};

import { FaFacebook } from "react-icons/fa";

const SocialIcons: React.FC<SocialIconsProps> = ({ github, facebook, googleDrive,whatsapp }) => {
    const icons = [
        { href: github, icon: <FaGithub />, label: "GitHub" },
        { href: facebook, icon: <FaFacebook />, label: "Facebook" },
        { href: googleDrive, icon: <FaGoogleDrive />, label: "Google Drive" },
   
        { href: whatsapp, icon: <FaWhatsapp />, label: "WhatsApp" },
    ];

    return (
        <div className="flex gap-6 justify-center items-center mt-4 mb-2">
            {icons.map(({ href, icon, label }) =>
                href ? (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-5xl text-black hover:text-blue-500 transition-colors duration-200 flex items-center justify-center">
                        {icon}
                    </a>
                ) : null
            )}
        </div>
    );
};

const AnimatedHamburgerButton = () => {
    const [active, setActive] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target) &&
                active
            ) {
                setActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [active]);

    // Responsive sidebar width and style
    const isMobile = windowWidth < 640;
    const sidebarWidth = isMobile ? '100vw' : windowWidth < 900 ? '70vw' : '440px';
    const sidebarRadius = isMobile ? '0rem 2rem 0 0' : '0rem 0 0 0rem';
    const sidebarPosition = isMobile ? { bottom: 0, top: 'unset', left: 0 } : { top: 0, left: 0 };
    const sidebarHeight = isMobile ? '40vh' : '100vh';
    const sidebarClass = isMobile
        ? 'fixed left-0 bottom-0 z-[1000] flex flex-col items-center p-6 bg-gradient-to-tr from-cyan-900 via-purple-900 to-zinc-900 shadow-2xl w-full h-screen min-h-screen'
        : 'fixed top-0 left-0 z-[1000] flex flex-col items-center p-8 bg-gradient-to-br from-cyan-900 via-purple-900 to-zinc-900 shadow-2xl h-screen min-h-screen';

    // El botón hamburguesa siempre visible
    const showHamburger = true; 

    return (
        <div className="relative ">
            {showHamburger && (
                <MotionConfig
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                    }}
                >
                    <motion.button
                        ref={buttonRef}
                        initial={false}
                        animate={active ? "open" : "closed"}
                        onClick={() => setActive((pv) => !pv)}
                        aria-label={
                            active ? "Cerrar configuración" : "Abrir configuración"
                        }
                        className="relative h-20 w-20 rounded-full hover:bg-gray-500 transition-colors shadow-2xl"
                    >
                        <motion.span
                            variants={VARIANTS.top}
                            className="absolute h-1.5 w-12 bg-white rounded-full"
                            style={{
                                y: "-50%",
                                left: "50%",
                                x: "-50%",
                                top: "35%",
                            }}
                        />
                        <motion.span
                            variants={VARIANTS.middle}
                            className="absolute h-1.5 w-12 bg-white rounded-full"
                            style={{
                                left: "50%",
                                x: "-50%",
                                top: "50%",
                                y: "-50%",
                            }}
                        />
                        <motion.span
                            variants={VARIANTS.bottom}
                            className="absolute h-1.5 w-7 bg-white rounded-full"
                            style={{
                                x: "-50%",
                                y: "50%",
                                bottom: "35%",
                                left: "calc(50% + 14px)",
                            }}
                        />
                    </motion.button>
                </MotionConfig>
            )}
            {/* Sidebar animado y colapsable SIEMPRE (desktop y móvil) */}
            <motion.aside
                ref={menuRef}
                initial={isMobile ? { y: '100%', opacity: 0 } : { x: '-100%', opacity: 0 }}
                animate={active
                    ? isMobile
                        ? { y: 0, opacity: 1 }
                        : { x: 0, opacity: 1 }
                    : isMobile
                        ? { y: '100%', opacity: 0 }
                        : { x: '-100%', opacity: 0 }
                }
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className={
                    `${sidebarClass} text-white transition-all translate-y-22 -translate-x-20 ${active ? 'pointer-events-auto' : 'pointer-events-none'}`
                }
                style={{
                    width: sidebarWidth,
                    borderRadius: sidebarRadius,
                    ...sidebarPosition,
                    position: 'fixed',
                    zIndex: 1000,
                    height: '100vh', // Forzar altura total
                    minHeight: '119.90rem',
                }}
            >
                <div className="flex flex-col justify-between h-full w-full">
                    {/* Contenido principal centrado */}
                    <div className="flex-1 flex flex-col justify-center items-center w-full">
                        {/* Avatar */}
                        <div className="flex flex-col items-center mb-10 -translate-y-50">
                            <div className="w-44 h-44 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg border-4 border-white/20">
                            <a  href="http://hassamzuriel.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <span className="text-7xl font-extrabold hover:text-black transition-colors duration-200">Z</span>
                            </a>
                            </div>
                        </div>
                        {/* Links */}
                        <ul className="flex flex-col items-center gap-7 w-full">
                            <Link to="/config" onClick={() => setActive(false)}>
                                <li className="py-6 px-5 w-full text-center hover:bg-cyan-700/60 hover:scale-105 rounded-xl cursor-pointer transition-all text-5xl flex flex-col items-center justify-center">
                                    <FaCog size={100} className="mb-2" />
                                    <span className="text-4xl">Configuración</span>
                                </li>
                            </Link>
                            <Link to="/" onClick={() => setActive(false)}>
                                <li className="py-6 px-5 w-full text-center hover:bg-cyan-700/60 hover:scale-105 rounded-xl cursor-pointer transition-all text-5xl flex flex-col items-center justify-center">
                                    <FaHome size={100} className="mb-2 " />
                                    <span className="text-4xl">Home</span>
                                </li>
                            </Link>
                            <Link to="/noticias" onClick={() => setActive(false)}>
                                <li className="py-6 px-5 w-full text-center hover:bg-cyan-700/60 hover:scale-105 rounded-xl cursor-pointer transition-all text-5xl flex flex-col items-center justify-center">
                                    <FaNewspaper size={100} className="mb-2" />
                                    <span className="text-4xl">Noticias</span>
                                </li>
                            </Link>
                            <Link to="/blog" onClick={() => setActive(false)}>
                                <li className="py-6 px-5 w-full text-center hover:bg-cyan-700/60 hover:scale-105 rounded-xl cursor-pointer transition-all text-5xl flex flex-col items-center justify-center">
                                    <FaPenFancy size={100} className="mb-2" />
                                    <span className="text-4xl">Blog</span>
                                </li>
                            </Link>
                            <Link to="/opcion3" onClick={() => setActive(false)}>
                                <li className="py-6 px-5 w-full text-center hover:bg-cyan-700/60 hover:scale-105 rounded-xl cursor-pointer transition-all text-5xl flex flex-col items-center justify-center">
                                    <FaStar size={100} className="mb-2" />
                                    <span className="text-4xl">Opción 3</span>
                                </li>
                            </Link>
                            <Link to="/features" onClick={() => setActive(false)}>
                                <li className="py-6 px-5 w-full text-center hover:bg-cyan-700/60 hover:scale-105 rounded-xl cursor-pointer transition-all text-5xl flex flex-col items-center justify-center">
                                    <FaRocket size={100} className="mb-2" />
                                    <span className="text-4xl">Features Projects</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    {/* Footer fijo abajo */}
                    <div className="w-full flex flex-col items-center justify-end text-zinc-400 opacity-80 -translate-y-4">
                        <span className="font-semibold text-4xl -translate-y-4 hover:text-cyan-400 transition-colors duration-200">Zuri Electron App</span>
                        <SocialIcons 
                            github="https://github.com/" 
                            facebook="https://www.facebook.com/" 
                            googleDrive="https://drive.google.com/" 
                            whatsapp="https://wa.me/" 
                        />
                    </div>
                </div>
            </motion.aside>
        </div>
    );
};

const VARIANTS = {
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            left: "calc(50% + 10px)",
        },
    },
};
