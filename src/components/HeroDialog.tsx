import React from "react";
import HeroVideoDialog from "./magicui/hero-video-dialog";
import { Video } from "lucide-react";

// Convierte cualquier URL de YouTube (youtube.com o youtu.be) a formato embed
function getYouTubeEmbedUrl(url: string): string {
    try {
        const ytRegex =
            /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/;
        const match = url.match(ytRegex);
        if (match && match[1]) {
            return `https://www.youtube.com/embed/${match[1]}`;
        }
        // Si no es un link válido, retorna el original
        return url;
    } catch {
        return url;
    }
}

export function HeroVideoDialogDemo() {
    
    return (
        <div className="relative">
            <HeroVideoDialog
                className="block dark:hidden "
                animationStyle="from-center"
                videoSrc={getYouTubeEmbedUrl(Varibles.videoLight)}
                thumbnailSrc={Varibles.imageLight}
                thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc={getYouTubeEmbedUrl(Varibles.videoDark)}
                thumbnailSrc={Varibles.imageDark}
                thumbnailAlt="Hero Video"
            />
        </div>
    );
}

export const Varibles = {
    videoLight: "https://youtu.be/RSL6KqWKFvo",
    videoDark: "https://youtu.be/cWppAbqm9I8",
    imageLight: "https://i.ytimg.com/vi/RSL6KqWKFvo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCxKaU2lL32jP2KR5MqFms78PYk6g",
    imageDark: "https://i.ytimg.com/vi/mq2dq_KeV0M/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEygfMA8=&rs=AOn4CLAf4Ti64YptR-zPhrRzxS5L186Phg"


}