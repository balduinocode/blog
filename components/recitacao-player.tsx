"use client"

import { recitacoes as staticRecitacoes } from "@/content/recitacoes"
import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"

interface Recitacao {
  slug: string
  title: string
  author: string
  date: string
  audioFile: string
}

interface RecitacaoPlayerProps {
  slug: string
}

export function RecitacaoPlayer({ slug }: RecitacaoPlayerProps) {
  const [recitacao, setRecitacao] = useState<Recitacao | undefined>(
    staticRecitacoes.find((r) => r.slug === slug)
  )

  useEffect(() => {
    // Fetch recitacoes from API to get dynamically detected files
    fetch("/api/recitacoes")
      .then(res => res.json())
      .then(data => {
        if (data.recitacoes) {
          const found = data.recitacoes.find((r: Recitacao) => r.slug === slug)
          if (found) {
            setRecitacao(found)
          }
        }
      })
      .catch(err => {
        console.error("Error fetching recitacao:", err)
      })
  }, [slug])
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !recitacao?.audioFile) return

    console.log("Loading audio:", recitacao.audioFile)

    // Reset state when audio file changes
    setCurrentTime(0)
    setDuration(0)
    setIsPlaying(false)

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => setIsPlaying(false)
    const handleError = (e: Event) => {
      const error = (audio as HTMLAudioElement).error
      if (error) {
        console.error("Audio error details:", {
          code: error.code,
          message: error.message,
          src: audio.src,
          networkState: audio.networkState,
          readyState: audio.readyState
        })
        
        // Error codes: 1=MEDIA_ERR_ABORTED, 2=MEDIA_ERR_NETWORK, 3=MEDIA_ERR_DECODE, 4=MEDIA_ERR_SRC_NOT_SUPPORTED
        if (error.code === 4) {
          console.error("Source not supported. Trying to fetch audio file...")
          // Try to verify the file exists
          fetch(audio.src)
            .then(res => {
              if (!res.ok) {
                console.error(`HTTP error! status: ${res.status}`)
              } else {
                console.log("File is accessible via fetch")
              }
            })
            .catch(err => console.error("Fetch error:", err))
        }
      } else {
        console.error("Audio error event but no error object available")
      }
    }
    const handleLoadedData = () => {
      console.log("Audio loaded successfully:", audio.src)
      setDuration(audio.duration)
    }
    const handleCanPlay = () => {
      console.log("Audio can play:", audio.src)
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("error", handleError)
    audio.addEventListener("loadeddata", handleLoadedData)
    audio.addEventListener("canplay", handleCanPlay)

    // Load the audio
    audio.load()

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("error", handleError)
      audio.removeEventListener("loadeddata", handleLoadedData)
      audio.removeEventListener("canplay", handleCanPlay)
    }
  }, [recitacao?.audioFile])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const newTime = parseFloat(e.target.value)
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  if (!recitacao) return null

  return (
    <article className="prose prose-sm prose-neutral dark:prose-invert max-w-none text-muted-foreground">
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">{recitacao.date}</p>
      <h1 className="text-4xl font-serif mb-4 text-foreground">{recitacao.title}</h1>
      {recitacao.author && (
        <p className="text-lg text-muted-foreground mb-8 italic">{recitacao.author}</p>
      )}
      
      <div className="space-y-4">
        <audio 
          ref={audioRef} 
          src={recitacao.audioFile} 
          preload="metadata"
          controls={false}
        >
          Seu navegador não suporta o elemento de áudio.
        </audio>
        
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
            aria-label={isPlaying ? "Pausar" : "Tocar"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-foreground" />
            ) : (
              <Play className="w-5 h-5 text-foreground ml-0.5" />
            )}
          </button>
          
          <div className="flex-1 space-y-2">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-2 bg-foreground/10 rounded-lg appearance-none cursor-pointer accent-foreground/30"
              style={{
                background: `linear-gradient(to right, currentColor 0%, currentColor ${(currentTime / duration) * 100}%, transparent ${(currentTime / duration) * 100}%, transparent 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-muted-foreground font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

