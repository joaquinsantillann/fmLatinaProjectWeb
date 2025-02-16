"use client";

import { useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Volume } from "lucide-react";
import Link from "next/link";

const audioSrc = "http://18.229.26.169:8040/stream";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!window.audioPlayer) {
      window.audioPlayer = new Audio(audioSrc);
      window.audioPlayer.loop = true;
      window.audioPlayer.volume = volume;
      window.audioPlayer.muted = muted;
    }

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (window.audioPlayer) {
      setIsPlaying(!window.audioPlayer.paused);
    }
  }, [isVisible]);

  const togglePlay = () => {
    if (window.audioPlayer) {
      if (window.audioPlayer.paused) {
        window.audioPlayer
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error("Error al reproducir el audio:", err));
      } else {
        window.audioPlayer.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (window.audioPlayer) {
      window.audioPlayer.volume = newVolume;
      setMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    setMuted(!muted);
    if (window.audioPlayer) {
      window.audioPlayer.muted = !muted;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#212225] text-white">
      <nav className="absolute top-0 left-0 right-0 flex justify-around p-4 bg-[#333] shadow-md">
        <Link href="/" className="text-white font-semibold px-4 py-2 rounded-full bg-[#444] hover:bg-[#555] transition-all">
          Inicio
        </Link>
        <Link href="/about" className="text-white font-semibold px-4 py-2 rounded-full bg-[#444] hover:bg-[#555] transition-all">
          Sobre Nosotros
        </Link>
        <Link href="/contact" className="text-white font-semibold px-4 py-2 rounded-full bg-[#444] hover:bg-[#555] transition-all">
          Contacto
        </Link>
      </nav>
      <div className="bg-[#333] p-6 rounded-2xl shadow-lg text-center border-2 border-[#333]">
        <h1 className="text-2xl font-bold mb-2 text-white">FM LATINA en Vivo</h1>
        <p className="text-sm text-gray-300 mb-4">Disfruta de la mejor música en vivo!</p>
        <div className="flex items-center space-x-4">
          <button
            className="flex items-center bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-full shadow-lg cursor-pointer transition-all"
            onClick={togglePlay}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                isPlaying ? "bg-red-600 animate-pulse" : "bg-gray-600"
              }`}
            >
              {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
            </div>
            <span
              className={`ml-4 transition-all duration-500 ${
                isPlaying ? "text-red-400 animate-pulse" : "text-gray-400"
              }`}
            >
              En Vivo
            </span>
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={muted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-32 h-2 bg-gray-600 rounded-lg cursor-pointer appearance-none"
            style={{
              WebkitAppearance: "none",
              appearance: "none",
              background: `linear-gradient(to right, white 0%, white ${volume * 100}%, gray ${volume * 100}%, gray 100%)`,
            }}
          />
          <button onClick={toggleMute} className="text-white">
            {muted ? <VolumeX size={24} /> : volume > 0.5 ? <Volume2 size={24} /> : <Volume size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
}

