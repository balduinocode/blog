import fs from "fs"
import path from "path"
import matter from "gray-matter"

const notesDirectory = path.join(process.cwd(), "content/notes")
const booksDirectory = path.join(process.cwd(), "content/books")
const modelosMentaisDirectory = path.join(process.cwd(), "content/modelos-mentais")
const projetosDirectory = path.join(process.cwd(), "content/projetos")
const poemasDirectory = path.join(process.cwd(), "content/poemas")

export interface NoteMetadata {
  slug: string
  title: string
  date: string
  excerpt: string
}

export interface NoteWithContent extends NoteMetadata {
  content: string
}

export interface BookMetadata {
  slug: string
  title: string
  author: string
  year: number
  lastUpdated?: string
  hasNotes: boolean
  isReading: boolean
}

export interface BookWithContent extends BookMetadata {
  content: string
}

export interface ModeloMentalMetadata {
  slug: string
  title: string
  date: string
  excerpt: string
}

export interface ModeloMentalWithContent extends ModeloMentalMetadata {
  content: string
}

export interface ProjetoMetadata {
  slug: string
  title: string
  date: string
  excerpt: string
}

export interface ProjetoWithContent extends ProjetoMetadata {
  content: string
}

export interface PoemaMetadata {
  slug: string
  title: string
  date: string
  excerpt: string
}

export interface PoemaWithContent extends PoemaMetadata {
  content: string
}

// Helper to get all note files
export function getNoteFiles() {
  if (!fs.existsSync(notesDirectory)) {
    return []
  }
  return fs.readdirSync(notesDirectory).filter((file) => file.endsWith(".mdx"))
}

// Get all notes metadata
export function getAllNotes(): NoteMetadata[] {
  const files = getNoteFiles()

  const notes = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "")
    const fullPath = path.join(notesDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
    }
  })

  return notes.sort((a, b) => (a.date > b.date ? -1 : 1))
}

// Get a single note by slug
export function getNoteBySlug(slug: string): NoteWithContent | null {
  try {
    const fullPath = path.join(notesDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      content,
    }
  } catch {
    return null
  }
}

// Book helper functions
export function getBookFiles() {
  if (!fs.existsSync(booksDirectory)) {
    return []
  }
  return fs.readdirSync(booksDirectory).filter((file) => file.endsWith(".mdx"))
}

export function getAllBooks(): BookMetadata[] {
  const files = getBookFiles()

  const books = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "")
    const fullPath = path.join(booksDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      author: data.author || "",
      year: data.year || 0,
      lastUpdated: data.lastUpdated,
      hasNotes: data.hasNotes ?? (content.trim().length > 0),
      isReading: data.isReading ?? false,
    }
  })

  return books
}

export function getBookBySlug(slug: string): BookWithContent | null {
  try {
    const fullPath = path.join(booksDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      author: data.author || "",
      year: data.year || 0,
      lastUpdated: data.lastUpdated,
      hasNotes: data.hasNotes ?? (content.trim().length > 0),
      isReading: data.isReading ?? false,
      content,
    }
  } catch {
    return null
  }
}

// Minimal Markdown → HTML converter for poemas (preserves line breaks)
export function markdownToHtmlPoema(markdown: string): string {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n")

  function escapeHtml(raw: string): string {
    return raw.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }

  function processInlineMarkdown(text: string): string {
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g
    const links: Array<{ text: string; url: string }> = []
    let match

    while ((match = linkPattern.exec(text)) !== null) {
      links.push({ text: match[1], url: match[2] })
    }

    let processedText = text.replace(linkPattern, '___LINK___')
    processedText = escapeHtml(processedText)

    links.forEach(({ text, url }) => {
      processedText = processedText.replace('___LINK___',
        `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`)
    })

    return processedText
  }

  const html: string[] = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    
    if (/^\s*$/.test(line)) {
      // Empty line = extra line break in poem
      html.push('<br/>')
      continue
    }

    // Process each line individually, preserving line breaks
    const processedLine = processInlineMarkdown(line.trim())
    if (processedLine) {
      html.push(processedLine)
      // Add line break after each line (except if it's the very last line)
      if (i < lines.length - 1) {
        html.push('<br/>')
      }
    }
  }

  return html.join('')
}

// Minimal Markdown → HTML converter for our MDX content
// Supports: headings, paragraphs, blockquotes, lists, links, and fenced code blocks
export function markdownToHtml(markdown: string): string {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n")

  function escapeHtml(raw: string): string {
    return raw.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }

  function processInlineMarkdown(text: string): string {
    // First escape HTML, then convert markdown links to HTML <a> tags
    // We use a placeholder to protect link syntax during escaping
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g
    const links: Array<{ text: string; url: string }> = []
    let match

    // Extract all links
    while ((match = linkPattern.exec(text)) !== null) {
      links.push({ text: match[1], url: match[2] })
    }

    // Replace links with placeholders
    let processedText = text.replace(linkPattern, '___LINK___')

    // Escape HTML in the remaining text
    processedText = escapeHtml(processedText)

    // Restore links as HTML
    links.forEach(({ text, url }) => {
      processedText = processedText.replace('___LINK___',
        `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`)
    })

    return processedText
  }

  const html: string[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]

    if (/^\s*$/.test(line)) {
      i++
      continue
    }

    if (/^```/.test(line)) {
      const code: string[] = []
      i++
      while (i < lines.length && !/^```/.test(lines[i])) {
        code.push(lines[i])
        i++
      }
      if (i < lines.length && /^```/.test(lines[i])) i++
      html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`)
      continue
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/)
    if (heading) {
      const level = heading[1].length
      const text = processInlineMarkdown(heading[2])
      html.push(`<h${level}>${text}</h${level}>`)
      i++
      continue
    }

    if (/^>\s?/.test(line)) {
      const quote: string[] = []
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        quote.push(lines[i].replace(/^>\s?/, ""))
        i++
      }
      html.push(`<blockquote>${escapeHtml(quote.join("\n")).replace(/\n/g, "<br/>")}</blockquote>`)
      continue
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        const itemText = processInlineMarkdown(lines[i].replace(/^[-*]\s+/, ""))
        items.push(`<li>${itemText}</li>`)
        i++
      }
      html.push(`<ul>${items.join("")}</ul>`)
      continue
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        const itemText = processInlineMarkdown(lines[i].replace(/^\d+\.\s+/, ""))
        items.push(`<li>${itemText}</li>`)
        i++
      }
      html.push(`<ol>${items.join("")}</ol>`)
      continue
    }

    const para: string[] = [line]
    i++
    while (i < lines.length && !/^\s*$/.test(lines[i])) {
      if (/^(?:```|#{1,6}\s|>\s|[-*]\s|\d+\.\s)/.test(lines[i])) break
      para.push(lines[i])
      i++
    }
    const text = processInlineMarkdown(para.join(" ").trim())
    if (text) html.push(`<p>${text}</p>`)
  }

  return html.join("\n")
}

// Helper to get all modelo mental files
export function getModeloMentalFiles() {
  if (!fs.existsSync(modelosMentaisDirectory)) {
    return []
  }
  return fs.readdirSync(modelosMentaisDirectory).filter((file) => file.endsWith(".mdx"))
}

// Get all modelos mentais metadata
export function getAllModelosMentais(): ModeloMentalMetadata[] {
  const files = getModeloMentalFiles()

  const modelosMentais = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "")
    const fullPath = path.join(modelosMentaisDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
    }
  })

  return modelosMentais.sort((a, b) => (a.date > b.date ? -1 : 1))
}

// Get a single modelo mental by slug
export function getModeloMentalBySlug(slug: string): ModeloMentalWithContent | null {
  try {
    const fullPath = path.join(modelosMentaisDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      content,
    }
  } catch {
    return null
  }
}

// Helper to get all projeto files
export function getProjetoFiles() {
  if (!fs.existsSync(projetosDirectory)) {
    return []
  }
  return fs.readdirSync(projetosDirectory).filter((file) => file.endsWith(".mdx"))
}

// Get all projetos metadata
export function getAllProjetos(): ProjetoMetadata[] {
  const files = getProjetoFiles()

  const projetos = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "")
    const fullPath = path.join(projetosDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
    }
  })

  return projetos.sort((a, b) => (a.date > b.date ? -1 : 1))
}

// Get a single projeto by slug
export function getProjetoBySlug(slug: string): ProjetoWithContent | null {
  try {
    const fullPath = path.join(projetosDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      content,
    }
  } catch {
    return null
  }
}

// Helper to get all poema files
export function getPoemaFiles() {
  if (!fs.existsSync(poemasDirectory)) {
    return []
  }
  return fs.readdirSync(poemasDirectory).filter((file) => file.endsWith(".mdx"))
}

// Get all poemas metadata
export function getAllPoemas(): PoemaMetadata[] {
  const files = getPoemaFiles()

  const poemas = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "")
    const fullPath = path.join(poemasDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
    }
  })

  return poemas.sort((a, b) => (a.date > b.date ? -1 : 1))
}

// Get a single poema by slug
export function getPoemaBySlug(slug: string): PoemaWithContent | null {
  try {
    const fullPath = path.join(poemasDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      content,
    }
  } catch {
    return null
  }
}
