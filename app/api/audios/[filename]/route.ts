import { NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { join } from "path"
import { readdir } from "fs/promises"

// Helper function to normalize strings for comparison (remove accents, lowercase)
function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, "") // Remove special chars except spaces and hyphens
    .trim()
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params
    const decodedFilename = decodeURIComponent(filename)
    console.log("API: Requested filename:", decodedFilename)
    
    const audiosDir = join(process.cwd(), "public", "audios")
    const files = await readdir(audiosDir, { encoding: "utf8" })
    console.log("API: Available files:", files)
    
    // Normalize the search filename
    const normalizedSearch = normalizeString(decodedFilename.replace(/\.mp3$/i, ""))
    console.log("API: Normalized search:", normalizedSearch)
    
    // Find the file by normalized comparison
    const matchingFile = files.find(file => {
      const normalizedFile = normalizeString(file.replace(/\.mp3$/i, ""))
      return normalizedFile === normalizedSearch
    })
    
    if (!matchingFile) {
      // Try partial match as fallback
      const partialMatch = files.find(file => {
        const fileBase = normalizeString(file.replace(/\.mp3$/i, ""))
        return fileBase.includes(normalizedSearch) || normalizedSearch.includes(fileBase)
      })
      
      if (!partialMatch) {
        console.error(`API: Audio file not found: ${decodedFilename}. Available files:`, files)
        return NextResponse.json({ error: "File not found" }, { status: 404 })
      }
      
      console.log("API: Using partial match:", partialMatch)
      const filePath = join(audiosDir, partialMatch)
      const fileBuffer = await readFile(filePath)
      console.log("API: File size:", fileBuffer.length, "bytes")
      
      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Type": "audio/mpeg",
          "Content-Length": fileBuffer.length.toString(),
          "Cache-Control": "public, max-age=31536000, immutable",
          "Accept-Ranges": "bytes",
        },
      })
    }
    
    console.log("API: Found matching file:", matchingFile)
    const filePath = join(audiosDir, matchingFile)
    const fileBuffer = await readFile(filePath)
    console.log("API: File size:", fileBuffer.length, "bytes")
    
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "public, max-age=31536000, immutable",
        "Accept-Ranges": "bytes",
      },
    })
  } catch (error) {
    console.error("API: Error serving audio file:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

