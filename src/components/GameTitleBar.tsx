import React from "react";

const GameTitleBar = () => {
    const windowControls = [
        {
            id: "minimize-btn",
            label: "-",
            onClick: () => window.electronAPI.minimizeGameWindow(),
            title: "Minimizar ventana",
        },
        {
            id: "maximize-btn",
            label: "☐",
            onClick: () => window.electronAPI.maximizeGameWindow(),
            title: "Maximizar ventana",
        },
        {
            id: "close-btn",
            label: "✕",
            onClick: () => window.electronAPI.closeGameWindow(),
            title: "Cerrar ventana",
        },
    ];

    return (
        <header
            className="fixed top-0 left-0 right-0 h-8 bg-gray-900 text-white select-none flex items-center justify-between px-2 z-50"
            style={{ WebkitAppRegion: "drag" }}
        >
            <div className="flex items-center">
                <span className="text-sm font-medium">Snake Game</span>
            </div>
            <div
                className="flex items-center gap-1"
                style={{ WebkitAppRegion: "no-drag" }}
            >
                {windowControls.map(({ id, label, onClick, title }) => (
                    <button
                        key={id}
                        id={id}
                        onClick={onClick}
                        title={title}
                        className="w-6 h-6 flex items-center justify-center text-sm hover:bg-gray-700 rounded transition-colors"
                    >
                        {label}
                    </button>
                ))}
            </div>
        </header>
    );
};

export default GameTitleBar;
