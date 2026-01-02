import { NextResponse } from "next/server"
import { readdir } from "fs/promises"
import { join } from "path"
import { parseAudioFilename } from "@/content/recitacoes"

export interface Recitacao {
  slug: string
  title: string
  author: string
  date: string
  audioFile: string
}

export async function GET() {
  try {
    const audiosDir = join(process.cwd(), "public", "audios")
    const files = await readdir(audiosDir, { encoding: "utf8" })
    
    // Filter only .mp3 files
    const audioFiles = files.filter(file => file.toLowerCase().endsWith(".mp3"))
    
    // Generate recitacoes from files
    const recitacoes: Recitacao[] = audioFiles.map((filename) => {
      const { title, author } = parseAudioFilename(filename)
      const slug = filename
        .replace(/\.mp3$/i, "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove accents
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
      
      return {
        slug,
        title,
        author,
        date: "Dezembro 2025", // You can update this or make it dynamic
        audioFile: `/api/audios/${encodeURIComponent(filename)}`
      }
    })
    
    return NextResponse.json({ recitacoes })
  } catch (error) {
    console.error("Error reading audio files:", error)
    return NextResponse.json({ recitacoes: [] }, { status: 500 })
  }
}
