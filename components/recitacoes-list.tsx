import { recitacoes as staticRecitacoes } from "@/content/recitacoes"
import { cn } from "@/lib/utils"
import { ResizeHandle } from "./resize-handle"
import { Footer } from "./footer"
import { useEffect, useState } from "react"

interface RecitacoesListProps {
  selectedRecitacao: string | null
  onSelectRecitacao: (slug: string) => void
  width: number
  isDragging: boolean
  onMouseDown: (e: React.MouseEvent) => void
}

// Helper function to parse date string and return comparable timestamp
function parseDate(dateString: string): number {
  // Try to parse different date formats
  if (dateString.includes("-")) {
    const [month, day, year] = dateString.split("-").map(Number)
    return new Date(year, month - 1, day).getTime()
  }
  // For formats like "September 2025" or "November 2025"
  const months: Record<string, number> = {
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

interface Recitacao {
  slug: string
  title: string
  author: string
  date: string
  audioFile: string
}

// Sort recitacoes in reverse chronological order (newest first)
function sortRecitacoesByDate(recitacoes: Recitacao[]) {
  return [...recitacoes].sort((a, b) => parseDate(b.date) - parseDate(a.date))
}

export function RecitacoesList({ selectedRecitacao, onSelectRecitacao, width, isDragging, onMouseDown }: RecitacoesListProps) {
  const [recitacoes, setRecitacoes] = useState<Recitacao[]>(staticRecitacoes)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch recitacoes from API to get dynamically detected files
    fetch("/api/recitacoes")
      .then(res => res.json())
      .then(data => {
        if (data.recitacoes && data.recitacoes.length > 0) {
          setRecitacoes(data.recitacoes)
        }
        setLoading(false)
      })
      .catch(err => {
        console.error("Error fetching recitacoes:", err)
        setLoading(false)
      })
  }, [])

  const sortedRecitacoes = sortRecitacoesByDate(recitacoes)
  return (
    <div
      style={{ width: `${width}px` }}
      className={cn(
        "relative overflow-y-auto shrink-0 border-r border-border",
        selectedRecitacao && "max-md:hidden",
      )}
    >
      <div className="px-8 md:px-16 pt-28 md:pt-16 pb-0 max-w-3xl flex flex-col justify-between min-h-full">
        <div>
          <h1 className="text-4xl font-serif mb-8">Recitações</h1>
          <p className="text-muted-foreground mb-8">Áudios das minhas recitações de poemas.</p>
          {loading ? (
            <p className="text-muted-foreground">Carregando...</p>
          ) : (
            <div className="space-y-0">
              {sortedRecitacoes.map((recitacao, index) => (
              <div key={recitacao.slug} className="relative">
                <button
                  onClick={() => onSelectRecitacao(recitacao.slug)}
                  className="w-full text-left space-y-1.5 py-3 transition-colors group"
                >
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-base font-medium text-foreground">{recitacao.title}</h2>
                    <span className="text-muted-foreground text-sm transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </div>
                  {recitacao.author && (
                    <p className="text-sm text-muted-foreground italic">{recitacao.author}</p>
                  )}
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">{recitacao.date}</p>
                </button>
                {index < sortedRecitacoes.length - 1 && (
                  <div className="h-px bg-border my-4" />
                )}
              </div>
              ))}
            </div>
          )}
        </div>

        <Footer />
      </div>

      {selectedRecitacao && <ResizeHandle onMouseDown={onMouseDown} isDragging={isDragging} />}
    </div>
  )
}

