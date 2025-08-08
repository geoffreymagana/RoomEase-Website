"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { AudioLines, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { textToSpeech } from "@/lib/elevenlabs";
import { Progress } from "@/components/ui/progress";

interface AudioPlayerProps {
  title: string;
  content: string;
}

export default function AudioPlayer({ title, content }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [useNativeTTS, setUseNativeTTS] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Clean up function for audio resources
  const cleanup = () => {
    if (audioElement) {
      audioElement.pause();
      URL.revokeObjectURL(audioElement.src);
      setAudioElement(null);
    }
    if (speechSynthesisRef.current) {
      window.speechSynthesis.cancel();
      speechSynthesisRef.current = null;
    }
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
  };

  // Cleanup on unmount
  useEffect(() => {
    return cleanup;
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleNativeTTS = () => {
    if (!speechSynthesisRef.current) {
      const utterance = new SpeechSynthesisUtterance(content);
      speechSynthesisRef.current = utterance;

      utterance.onend = () => {
        setIsPlaying(false);
        speechSynthesisRef.current = null;
      };

      utterance.onboundary = (event) => {
        const progress = (event.charIndex / content.length) * 100;
        setProgress(progress);
      };

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    } else {
      window.speechSynthesis.cancel();
      speechSynthesisRef.current = null;
      setIsPlaying(false);
    }
  };

  const handlePlay = async () => {
    if (useNativeTTS) {
      handleNativeTTS();
      return;
    }

    if (!audioElement) {
      try {
        setIsLoading(true);
        if (!process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY || !process.env.NEXT_PUBLIC_ELEVENLABS_VOICE_ID) {
          console.log('ElevenLabs configuration missing, falling back to native TTS');
          setUseNativeTTS(true);
          handleNativeTTS();
          return;
        }

        const audioBlob = await textToSpeech(content);
        const audio = new Audio(URL.createObjectURL(audioBlob));
        
        audio.addEventListener('loadedmetadata', () => {
          setDuration(audio.duration);
        });

        audio.addEventListener('timeupdate', () => {
          setCurrentTime(audio.currentTime);
          setProgress((audio.currentTime / audio.duration) * 100);
        });

        audio.addEventListener('ended', () => {
          setIsPlaying(false);
          setProgress(0);
          setCurrentTime(0);
        });

        setAudioElement(audio);
        audio.play();
        setIsPlaying(true);

      } catch (error) {
        console.error('Error generating audio:', error);
        console.log('Falling back to native TTS');
        setUseNativeTTS(true);
        handleNativeTTS();
      } finally {
        setIsLoading(false);
      }
    } else {
      if (isPlaying) {
        audioElement.pause();
        setIsPlaying(false);
      } else {
        audioElement.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (audioElement) {
      audioElement.muted = !audioElement.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 border border-slate-200 w-[320px]">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <AudioLines className="w-6 h-6 text-slate-600" />
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-900">Listen to Article</div>
              <div className="text-xs text-slate-500 truncate max-w-[200px]">{title}</div>
            </div>
            {!useNativeTTS && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMute}
                className="hover:bg-slate-100"
                disabled={!audioElement}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-slate-600" />
                ) : (
                  <Volume2 className="w-4 h-4 text-slate-600" />
                )}
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePlay}
              className="hover:bg-slate-100"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-slate-600 border-t-transparent rounded-full animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-5 h-5 text-slate-600" />
              ) : (
                <Play className="w-5 h-5 text-slate-600" />
              )}
            </Button>
          </div>
          
          <div className="space-y-2">
            <Progress value={progress} className="h-1" />
            <div className="flex justify-between text-xs text-slate-500">
              <span>{formatTime(currentTime)}</span>
              <span>{useNativeTTS ? '--:--' : formatTime(duration)}</span>
            </div>
          </div>

          {useNativeTTS && (
            <div className="text-xs text-slate-500 italic">
              Using browser text-to-speech
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
