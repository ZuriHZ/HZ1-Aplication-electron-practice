"use client"
import React from "react";
import { Example } from "./Buttonconfig";
import {IconSidebarUp } from './styles/Variables'
interface windowControls {
    id: string;
    icon: React.ReactNode;
    onClick: () => void;
    title: string;
}


const windowControls: windowControls[] = [
    {
        id: "minimize-btn",
        icon: <IconSidebarUp.iconMinimize />,
        onClick: () => (window as any).electronAPI?.minimize?.(),
        title: "Minimizar ventana",
    },
    {
        id: "maximize-btn",
        icon: <IconSidebarUp.iconMaximize />,
        onClick: () => (window as any).electronAPI?.maximize?.(),
        title: "Maximizar ventana",
    },
    {
        id: "close-btn",
        icon: <IconSidebarUp.iconClose />,
        onClick: () => (window as any).electronAPI?.close?.(),
        title: "Cerrar ventana",
    },
];

export default function ButtonComponent() {
    return (
        <>
        <header
            id="title-bar"
            className="flex items-center justify-between px-4 py-2 bg-gray-900 text-white "
        >
            <div className="flex items-center gap-2 no-drag">
                <Example />
            </div>
            <div className="flex items-center gap-4" id="title-bar-buttons">
                <span className="font-bold text-lg" id="title">
                    ZuriHZ
                </span>
                {windowControls.map(({ id, icon, onClick, title }) => (
                    <button
                        key={id}
                        id={id}
                        onClick={onClick}
                        title={title}
                        className="mx-1 px-2 py-1 rounded hover:bg-gray-700 focus:outline-none"
                        tabIndex={0}
                        aria-label={title}
                    >
                        {icon}
                    </button>
                ))}
            </div>
        </header>
        </>
    );
}
