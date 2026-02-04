import { poemas } from "@/content/poemas"
import { cn } from "@/lib/utils"
import { sortByDateDesc } from "@/lib/date"
import { ResizeHandle } from "./resize-handle"
import { Footer } from "./footer"

interface PoemasListProps {
  selectedPoema: string | null
  onSelectPoema: (slug: string) => void
  width: number
  isDragging: boolean
  onMouseDown: (e: React.MouseEvent) => void
}

export function PoemasList({ selectedPoema, onSelectPoema, width, isDragging, onMouseDown }: PoemasListProps) {
  const sortedPoemas = sortByDateDesc(poemas)
  return (
    <div
      style={{ width: `${width}px` }}
      className={cn(
        "relative overflow-y-auto shrink-0 border-r border-border",
        selectedPoema && "max-md:hidden",
      )}
    >
      <div className="px-8 md:px-16 pt-28 md:pt-16 pb-0 max-w-3xl flex flex-col justify-between min-h-full">
        <div>
          <h1 className="text-4xl font-serif mb-8">Poemas</h1>
          <p className="text-muted-foreground mb-8">Versos e reflexões poéticas.</p>
          <div className="space-y-0">
            {sortedPoemas.map((poema, index) => (
              <div key={poema.slug} className="relative">
                <button
                  onClick={() => onSelectPoema(poema.slug)}
                  className="w-full text-left space-y-1.5 py-3 transition-colors group"
                >
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-base font-medium text-foreground">{poema.title}</h2>
                    <span className="text-muted-foreground text-sm transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">{poema.date}</p>
                </button>
                {index < sortedPoemas.length - 1 && (
                  <div className="h-px bg-border my-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>

      {selectedPoema && <ResizeHandle onMouseDown={onMouseDown} isDragging={isDragging} />}
    </div>
  )
}

