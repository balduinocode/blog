"use client"

import { PoemasList } from "./poemas-list"
import { PoemaReader } from "./poema-reader"
import { ContentPanel } from "./content-panel"
import { useState } from "react"
import { useResizable } from "@/hooks/use-resizable"

interface PoemasSectionProps {
  sidebarWidth: number
}

export function PoemasSection({ sidebarWidth }: PoemasSectionProps) {
  const [selectedPoema, setSelectedPoema] = useState<string | null>(null)
  
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
        onSelectPoema={setSelectedPoema}
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

