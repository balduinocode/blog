import { modelosMentais } from "@/content/modelos-mentais"
import { cn } from "@/lib/utils"
import { sortByDateDesc } from "@/lib/date"
import { ResizeHandle } from "./resize-handle"
import { Footer } from "./footer"

interface ModelosMentaisListProps {
  selectedModeloMental: string | null
  onSelectModeloMental: (slug: string) => void
  width: number
  isDragging: boolean
  onMouseDown: (e: React.MouseEvent) => void
}

export function ModelosMentaisList({ selectedModeloMental, onSelectModeloMental, width, isDragging, onMouseDown }: ModelosMentaisListProps) {
  const sortedModelosMentais = sortByDateDesc(modelosMentais)
  return (
    <div
      style={{ width: `${width}px` }}
      className={cn(
        "relative overflow-y-auto shrink-0 border-r border-border",
        selectedModeloMental && "max-md:hidden",
      )}
    >
      <div className="px-8 md:px-16 pt-28 md:pt-16 pb-0 max-w-3xl flex flex-col justify-between min-h-full">
        <div>
          <h1 className="text-4xl font-serif mb-8">Modelos Mentais</h1>
          <p className="text-muted-foreground mb-8">Frameworks e estruturas de pensamento para entender o mundo.</p>
          <div className="space-y-0">
            {sortedModelosMentais.map((modeloMental, index) => (
              <div key={modeloMental.slug} className="relative">
                <button
                  onClick={() => onSelectModeloMental(modeloMental.slug)}
                  className="w-full text-left space-y-1.5 py-3 transition-colors group"
                >
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-base font-medium text-foreground">{modeloMental.title}</h2>
                    <span className="text-muted-foreground text-sm transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">{modeloMental.date}</p>
                </button>
                {index < sortedModelosMentais.length - 1 && (
                  <div className="h-px bg-border my-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>

      {selectedModeloMental && <ResizeHandle onMouseDown={onMouseDown} isDragging={isDragging} />}
    </div>
  )
}

