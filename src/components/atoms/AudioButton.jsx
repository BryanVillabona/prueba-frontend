import { useState, useRef } from 'react';
import { Volume2, Loader2 } from 'lucide-react';

export const AudioButton = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(audioUrl));

  const handlePlay = () => {
    if (!audioUrl) return;

    setIsPlaying(true);
    // Reiniciar el audio si ya existía
    audioRef.current.src = audioUrl;
    audioRef.current.load();
    
    audioRef.current.play().catch(error => {
      console.error("Error reproduciendo audio:", error);
      setIsPlaying(false);
    });

    audioRef.current.onended = () => setIsPlaying(false);
  };

  return (
    <button
      onClick={handlePlay}
      disabled={isPlaying || !audioUrl}
      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg 
                 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed 
                 transition-colors text-sm font-medium shadow-sm"
    >
      {isPlaying ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Reproduciendo...
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4" />
          Escuchar Grito
        </>
      )}
    </button>
  );
};