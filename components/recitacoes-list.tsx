"use client"

import { cn } from "@/lib/utils"
import { sortByDateDesc } from "@/lib/date"
import { ResizeHandle } from "./resize-handle"
import { Footer } from "./footer"
import { useState, useEffect } from "react"

interface Recitacao {
  slug: string
  title: string
  author: string
  date: string
  audioFile: string
}

interface RecitacoesListProps {
  selectedRecitacao: string | null
  onSelectRecitacao: (slug: string) => void
  width: number
  isDragging: boolean
  onMouseDown: (e: React.MouseEvent) => void
}

export function RecitacoesList({ selectedRecitacao, onSelectRecitacao, width, isDragging, onMouseDown }: RecitacoesListProps) {
  const [recitacoes, setRecitacoes] = useState<Recitacao[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch recitacoes from API
    fetch("/api/recitacoes")
      .then(res => res.json())
      .then(data => {
        if (data.recitacoes) {
          setRecitacoes(data.recitacoes)
        }
        setLoading(false)
      })
      .catch(err => {
        console.error("Error fetching recitacoes:", err)
        setLoading(false)
      })
  }, [])

  const sortedRecitacoes = sortByDateDesc(recitacoes)

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
          <p className="text-muted-foreground mb-8">Poemas recitados em áudio.</p>
          {loading ? (
            <p className="text-muted-foreground">Carregando...</p>
          ) : sortedRecitacoes.length === 0 ? (
            <p className="text-muted-foreground">Nenhuma recitação encontrada.</p>
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
                    <p className="text-xs text-muted-foreground">{recitacao.author}</p>
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
