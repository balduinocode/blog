import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.join(__dirname, "..")

// Minimal Markdown → HTML converter for poemas (preserves line breaks)
function markdownToHtmlPoema(markdown) {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n")

  function escapeHtml(raw) {
    return raw.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }

  function processInlineMarkdown(text) {
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g
    const links = []
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

  const html = []
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
      // Add line break after each line
      html.push('<br/>')
    }
  }

  return html.join('')
}

// Minimal Markdown → HTML converter
function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n")

  function escapeHtml(raw) {
    return raw.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }

  function processInlineMarkdown(text) {
    // First escape HTML, then convert markdown links to HTML <a> tags
    // We use a placeholder to protect link syntax during escaping
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g
    const links = []
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

  const html = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]

    if (/^\s*$/.test(line)) {
      i++
      continue
    }

    if (/^```/.test(line)) {
      const code = []
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
      const quote = []
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        quote.push(lines[i].replace(/^>\s?/, ""))
        i++
      }
      html.push(`<blockquote>${escapeHtml(quote.join("\n")).replace(/\n/g, "<br/>")}</blockquote>`)
      continue
    }

    if (/^[-*]\s+/.test(line)) {
      const items = []
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        const itemText = processInlineMarkdown(lines[i].replace(/^[-*]\s+/, ""))
        items.push(`<li>${itemText}</li>`)
        i++
      }
      html.push(`<ul>${items.join("")}</ul>`)
      continue
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = []
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        const itemText = processInlineMarkdown(lines[i].replace(/^\d+\.\s+/, ""))
        items.push(`<li>${itemText}</li>`)
        i++
      }
      html.push(`<ol>${items.join("")}</ol>`)
      continue
    }

    const para = [line]
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

// Generate notes content
function generateNotes() {
  const notesDir = path.join(rootDir, "content/notes")
  const files = fs.readdirSync(notesDir).filter((f) => f.endsWith(".mdx"))

  const notes = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "")
    const fullPath = path.join(notesDir, filename)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      content: markdownToHtml(content),
    }
  })

  const output = `export interface Note {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const notes: Note[] = ${JSON.stringify(notes, null, 2)}
`

  fs.writeFileSync(path.join(rootDir, "content/notes.tsx"), output)
  console.log(`✓ Generated content for ${notes.length} notes`)
}

// Generate books content
function generateBooks() {
  const booksDir = path.join(rootDir, "content/books")
  if (!fs.existsSync(booksDir)) {
    console.log("⚠ Skipping books (directory not found)")
    return
  }
  const files = fs.readdirSync(booksDir).filter((f) => f.endsWith(".mdx"))

  const books = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "")
    const fullPath = path.join(booksDir, filename)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content: mdxContent } = matter(fileContents)

    // Read metadata from frontmatter with defaults
    const title = data.title || slug
    const author = data.author || ""
    const year = data.year || 0
    const lastUpdated = data.lastUpdated
    const hasNotes = data.hasNotes ?? (mdxContent.trim().length > 0)
    const isReading = data.isReading ?? false
    const content = markdownToHtml(mdxContent)

    return {
      slug,
      title,
      author,
      year,
      ...(lastUpdated && { lastUpdated }),
      hasNotes,
      isReading,
      content,
    }
  })

  const output = `export interface Book {
  slug: string
  title: string
  author: string
  year: number
  lastUpdated?: string
  hasNotes: boolean
  isReading: boolean
  content: string
}

export const books: Book[] = ${JSON.stringify(books, null, 2)}
`

  fs.writeFileSync(path.join(rootDir, "content/books.tsx"), output)
  console.log(`✓ Generated content for ${books.length} books`)
}

// Generate modelos mentais content
function generateModelosMentais() {
  const modelosMentaisDir = path.join(rootDir, "content/modelos-mentais")
  if (!fs.existsSync(modelosMentaisDir)) {
    console.log("⚠ Skipping modelos mentais (directory not found)")
    return
  }
  const files = fs.readdirSync(modelosMentaisDir).filter((f) => f.endsWith(".mdx"))

  const modelosMentais = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "")
    const fullPath = path.join(modelosMentaisDir, filename)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      content: markdownToHtml(content),
    }
  })

  const output = `export interface ModeloMental {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const modelosMentais: ModeloMental[] = ${JSON.stringify(modelosMentais, null, 2)}
`

  fs.writeFileSync(path.join(rootDir, "content/modelos-mentais.tsx"), output)
  console.log(`✓ Generated content for ${modelosMentais.length} modelos mentais`)
}

// Generate projetos content
function generateProjetos() {
  const projetosDir = path.join(rootDir, "content/projetos")
  if (!fs.existsSync(projetosDir)) {
    console.log("⚠ Skipping projetos (directory not found)")
    return
  }
  const files = fs.readdirSync(projetosDir).filter((f) => f.endsWith(".mdx"))

  const projetos = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "")
    const fullPath = path.join(projetosDir, filename)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      content: markdownToHtml(content),
    }
  })

  const output = `export interface Projeto {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const projetos: Projeto[] = ${JSON.stringify(projetos, null, 2)}
`

  fs.writeFileSync(path.join(rootDir, "content/projetos.tsx"), output)
  console.log(`✓ Generated content for ${projetos.length} projetos`)
}

// Helper function to parse date string and return comparable timestamp
function parseDate(dateString) {
  if (!dateString) return 0
  // Try to parse different date formats
  if (dateString.includes("-")) {
    const [month, day, year] = dateString.split("-").map(Number)
    return new Date(year, month - 1, day).getTime()
  }
  // For formats like "September 2025" or "Novembro 2025"
  const months = {
    "janeiro": 0, "fevereiro": 1, "março": 2, "abril": 3, "maio": 4, "junho": 5,
    "julho": 6, "agosto": 7, "setembro": 8, "outubro": 9, "novembro": 10, "dezembro": 11,
    "january": 0, "february": 1, "march": 2, "april": 3, "may": 4, "june": 5,
    "july": 6, "august": 7, "september": 8, "october": 9, "november": 10, "december": 11
  }
  const parts = dateString.toLowerCase().split(" ")
  if (parts.length >= 2) {
    const month = months[parts[0]]
    const year = parseInt(parts[1])
    if (month !== undefined && !isNaN(year)) {
      return new Date(year, month, 1).getTime()
    }
  }
  // Fallback: return 0 for unparseable dates
  return 0
}

// Generate poemas content
function generatePoemas() {
  const poemasDir = path.join(rootDir, "content/poemas")
  if (!fs.existsSync(poemasDir)) {
    console.log("⚠ Skipping poemas (directory not found)")
    return
  }
  const files = fs.readdirSync(poemasDir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))

  const poemas = files.map((filename) => {
    const slug = filename.replace(/\.(mdx|md)$/, "")
    const fullPath = path.join(poemasDir, filename)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      content: markdownToHtmlPoema(content),
    }
  }).sort((a, b) => parseDate(b.date) - parseDate(a.date))

  const output = `export interface Poema {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const poemas: Poema[] = ${JSON.stringify(poemas, null, 2)}
`

  fs.writeFileSync(path.join(rootDir, "content/poemas.tsx"), output)
  console.log(`✓ Generated content for ${poemas.length} poemas`)
}

// Run generators
generateNotes()
generateBooks()
generateModelosMentais()
generateProjetos()
generatePoemas()
