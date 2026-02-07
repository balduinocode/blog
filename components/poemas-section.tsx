"use client"

import { PoemasList } from "./poemas-list"
import { PoemaReader } from "./poema-reader"
import { ContentPanel } from "./content-panel"
import { useState } from "react"
import { useResizable } from "@/hooks/use-resizable"

interface PoemasSectionProps {
  sidebarWidth: number
  selectedPoema?: string | null
  onSelectPoema?: (slug: string | null) => void
}

export function PoemasSection({ sidebarWidth, selectedPoema: controlledPoema, onSelectPoema }: PoemasSectionProps) {
  const [internalPoema, setInternalPoema] = useState<string | null>(null)
  const isControlled = controlledPoema !== undefined && onSelectPoema !== undefined
  const selectedPoema = isControlled ? controlledPoema : internalPoema
  const setSelectedPoema = isControlled ? onSelectPoema! : setInternalPoema

  const poemasList = useResizable({
    initialWidth: 600,
    minWidth: 200,
    maxWidth: 600,
    offsetX: sidebarWidth,
  })

  return (
    <>
      <PoemasList
        selectedPoema={selectedPoema}
        onSelectPoema={(slug) => setSelectedPoema(slug)}
        width={poemasList.width}
        isDragging={poemasList.isDragging}
        onMouseDown={poemasList.handleMouseDown}
      />
      {selectedPoema && (
        <ContentPanel onClose={() => setSelectedPoema(null)}>
          <PoemaReader slug={selectedPoema} />
        </ContentPanel>
      )}
    </>
  )
}

