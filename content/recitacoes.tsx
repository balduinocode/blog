export interface Recitacao {
  slug: string
  title: string
  author: string
  date: string
  audioFile: string
}

// Helper function to parse filename and extract title and author
// Format: "nome do poema - nome do autor.mp3"
export function parseAudioFilename(filename: string): { title: string; author: string } {
  // Remove .mp3 extension
  const nameWithoutExt = filename.replace(/\.mp3$/i, "")
  
  // Split by " - " (space, dash, space) to separate title and author
  // Also handle cases with just " -" or "- " for flexibility
  const parts = nameWithoutExt.split(/\s*-\s*/)
  
  if (parts.length >= 2) {
    // Join all parts except the last one as title (in case title has " - " in it)
    const title = parts.slice(0, -1).join(" - ")
    const author = parts[parts.length - 1]
    return { title: title.trim(), author: author.trim() }
  }
  
  // Fallback: if no " - " found, use entire name as title and empty author
  return { title: nameWithoutExt.trim(), author: "" }
}

// Static list - will be populated from files in public/audios
// Format: "nome do poema - nome do autor.mp3"
const audioFiles = [
  "Madrigal Muito Fácil - Manuel Bandeira.mp3",
  "Ausência - Vinícius de Moraes.mp3"
]

export const recitacoes: Recitacao[] = audioFiles.map((filename) => {
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
