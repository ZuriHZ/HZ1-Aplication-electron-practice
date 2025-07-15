import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Config from "./pages/config";
import Home from "./pages/home";
import Noticias from "./pages/noticias";
import Blog from "./pages/blog";
import Features from "./pages/features";
import Opcion3 from "./pages/opcion3";
import "./index.css";
import Footer from "./components/Footer";
import ButtonComponent from "./components/ButtonconfigComponent";

function App() {

    return (
        <Router>
            <>
            <div className="fixed w-full bg-purple-950 z-50">
                <ButtonComponent />
            </div>
                <div className="flex min-h-screen w-full bg-purple-950">
                    <div className="flex-1 flex flex-col min-h-screen md:ml-[340px] w-full">
                        <main className="flex-1 flex flex-col items-center justify-center gap-32 w-full">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/config" element={<Config />} />
                                <Route
                                    path="/noticias"
                                    element={<Noticias />}
                                />
                                <Route path="/blog" element={<Blog />} />
                                <Route
                                    path="/features"
                                    element={<Features />}
                                />
                                <Route path="/opcion3" element={<Opcion3 />} />
                            </Routes>
                        </main>
                        <div className="fixed bottom-0 w-full text-white">
                        <Footer />
                        </div>
                    </div>
                </div>
            </>
        </Router>
    );
}

export default App;
