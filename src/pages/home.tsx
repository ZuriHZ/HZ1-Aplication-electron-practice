"use client";
import React from "react";
import { HeroVideoDialogDemo } from "../components/HeroDialog";

const Home = () => {
    return (
        <>
        <div className="flex bg-black justify-center items-center h-[100vh] w-full">
            <div className="grid grid-cols-3">
           <HeroVideoDialogDemo/>
           <HeroVideoDialogDemo/>
           <HeroVideoDialogDemo/>
           <HeroVideoDialogDemo/>
           <HeroVideoDialogDemo/>
           <HeroVideoDialogDemo/>
            </div>
        </div>
        </>
    );
};

export default Home;
