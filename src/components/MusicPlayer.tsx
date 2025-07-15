import React, { useState, useRef, useEffect } from "react";

const songs = [
    {
        title: "Adele - Set Fire To The Rain",
        artist: "Adele",
        src: "assets/Adele.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=256&q=80",
    },
    {
        title: "SoundHelix Song 1",
        artist: "SoundHelix",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&q=80",
    },
    {
        title: "SoundHelix Song 2",
        artist: "SoundHelix",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80",
    },
];

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const audioRef = useRef(null);

    const currentSong = songs[currentSongIndex];

    useEffect(() => {
        // When song changes, reset time and play if was playing
        setCurrentTime(0);
        setDuration(0);
        if (audioRef.current) {
            audioRef.current.load();
            if (isPlaying) {
                audioRef.current.play();
            }
        }
        // eslint-disable-next-line
    }, [currentSongIndex]);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleSeek = (e) => {
        const time = e.target.value;
        audioRef.current.currentTime = time;
        setCurrentTime(time);
    };

    const handlePrev = () => {
        if (currentSongIndex > 0) {
            setCurrentSongIndex(currentSongIndex - 1);
            setIsPlaying(true);
        }
    };

    const handleNext = () => {
        if (currentSongIndex < songs.length - 1) {
            setCurrentSongIndex(currentSongIndex + 1);
            setIsPlaying(true);
        }
    };

    const handleEnded = () => {
        if (currentSongIndex < songs.length - 1) {
            setCurrentSongIndex(currentSongIndex + 1);
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <div className="fixed bottom-6 right-6 bg-gradient-to-br from-purple-800 via-purple-900 to-indigo-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl w-96 border border-purple-700/40">
            <div className="flex flex-col gap-5">
                {/* Album Art & Title */}
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg border-2 border-purple-500/60 flex-shrink-0 bg-purple-700/30">
                        <img
                            src={currentSong.cover}
                            alt="Album Art"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold text-white drop-shadow">{currentSong.title}</span>
                        <span className="text-xs text-purple-200/80">{currentSong.artist}</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="flex items-center gap-3">
                    <span className="text-purple-200 text-xs font-mono w-10 text-right">
                        {formatTime(currentTime)}
                    </span>
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleSeek}
                        className="flex-1 h-2 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-400 rounded-full appearance-none cursor-pointer accent-purple-400"
                        style={{
                            background: `linear-gradient(90deg, #a78bfa ${(currentTime/duration)*100 || 0}%, #4c1d95 ${(currentTime/duration)*100 || 0}%)`
                        }}
                    />
                    <span className="text-purple-200 text-xs font-mono w-10 text-left">
                        {formatTime(duration)}
                    </span>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-8 mt-1">
                    {/* Backward */}
                    <button
                        className={`p-2 rounded-full bg-purple-700/40 hover:bg-purple-700/70 text-purple-200 transition-colors ${currentSongIndex === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
                        onClick={handlePrev}
                        disabled={currentSongIndex === 0}
                        aria-label="Previous"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M11 19l-7-7 7-7M19 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    {/* Play/Pause */}
                    <button
                        onClick={togglePlayPause}
                        className={`p-4 rounded-full shadow-lg bg-gradient-to-tr from-fuchsia-600 via-purple-600 to-indigo-500 hover:scale-105 transition-transform duration-150 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400`}
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <rect x="6.5" y="5" width="3" height="14" rx="1.5" fill="currentColor"/>
                                <rect x="14.5" y="5" width="3" height="14" rx="1.5" fill="currentColor"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <polygon points="7,5 21,12 7,19" fill="currentColor"/>
                            </svg>
                        )}
                    </button>
                    {/* Forward */}
                    <button
                        className={`p-2 rounded-full bg-purple-700/40 hover:bg-purple-700/70 text-purple-200 transition-colors ${currentSongIndex === songs.length - 1 ? "opacity-40 cursor-not-allowed" : ""}`}
                        onClick={handleNext}
                        disabled={currentSongIndex === songs.length - 1}
                        aria-label="Next"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>

                <audio
                    ref={audioRef}
                    src={currentSong.src}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={handleEnded}
                    autoPlay={isPlaying}
                />
            </div>
        </div>
    );
};

export default MusicPlayer;
