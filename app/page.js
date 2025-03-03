"use client";

import { useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Volume } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const audioSrc = "https://fm1079.life/stream";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [audioPlayer, setAudioPlayer] = useState(null);

  useEffect(() => {
    const player = new Audio(audioSrc);
    player.loop = true;
    player.volume = volume;
    player.muted = muted;
    setAudioPlayer(player);

    return () => {
      player.pause();
      player.src = "";
    };
  }, []);

  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.volume = volume;
      audioPlayer.muted = muted;
    }
  }, [volume, muted, audioPlayer]);

  const togglePlay = () => {
    if (audioPlayer) {
      if (audioPlayer.paused) {
        audioPlayer.play().then(() => setIsPlaying(true)).catch(console.error);
      } else {
        audioPlayer.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#212225] text-white">
      <nav className="w-full absolute top-0 left-0 right-0 flex justify-around p-4 bg-[#333] shadow-md">
        <Link href="/" className="text-white font-semibold px-4 py-2 rounded-full bg-[#444] hover:bg-[#555] transition-all">Inicio</Link>
        <Link href="/about" className="text-white font-semibold px-4 py-2 rounded-full bg-[#444] hover:bg-[#555] transition-all">Sobre Nosotros</Link>
        <Link href="/contact" className="text-white font-semibold px-4 py-2 rounded-full bg-[#444] hover:bg-[#555] transition-all">Contacto</Link>
      </nav>
      <div className="bg-[#333] p-6 rounded-2xl shadow-lg text-center border-2 border-[#333] mt-20">
        <h1 className="text-2xl font-bold mb-2 text-white">FM LATINA 107.9 en Vivo</h1>
        <Image src="/layouts.jpg" alt="Logo fm life" width={250} height={150} className="mx-auto my-4 rounded-2xl" style={{ objectFit: "contain" }} />
        <p className="text-sm text-gray-300 mb-4">Disfruta de la mejor música en vivo!</p>
        <div className="flex items-center space-x-4 justify-center">
          <button className="flex items-center bg-[#444] hover:bg-[#555] text-white font-bold py-3 px-6 rounded-full shadow-lg cursor-pointer transition-all" onClick={togglePlay}>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${isPlaying ? "bg-red-600 animate-pulse" : "bg-[#444]"}`}>
              {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
            </div>
            <span className={`ml-4 transition-all duration-500 ${isPlaying ? "text-red-400 animate-pulse" : "text-gray-400"}`}>En Vivo</span>
          </button>
          <input type="range" min="0" max="1" step="0.01" value={muted ? 0 : volume} onChange={(e) => setVolume(parseFloat(e.target.value))} className="w-32 h-2 bg-gray-600 rounded-lg cursor-pointer appearance-none" />
          <button onClick={() => setMuted(!muted)} className="text-white">
            {muted ? <VolumeX size={24} /> : volume > 0.5 ? <Volume2 size={24} /> : <Volume size={24} />}
          </button>
        </div>
      </div>
      <footer className="w-11/12 mx-auto bg-[#333] py-4 mt-8 rounded-xl">
        <p className="text-center text-sm">© 2025 Radio Life. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

