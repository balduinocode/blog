"use client"

import { ModelosMentaisList } from "./modelos-mentais-list"
import { ModeloMentalReader } from "./modelo-mental-reader"
import { ContentPanel } from "./content-panel"
import { useState } from "react"
import { useResizable } from "@/hooks/use-resizable"

interface ModelosMentaisSectionProps {
  sidebarWidth: number
}

export function ModelosMentaisSection({ sidebarWidth }: ModelosMentaisSectionProps) {
  const [selectedModeloMental, setSelectedModeloMental] = useState<string | null>(null)
  
  const modelosMentaisList = useResizable({
    initialWidth: 600,
    minWidth: 200,
    maxWidth: 600,
    offsetX: sidebarWidth,
  })

  return (
    <>
      <ModelosMentaisList
        selectedModeloMental={selectedModeloMental}
        onSelectModeloMental={setSelectedModeloMental}
        width={modelosMentaisList.width}
        isDragging={modelosMentaisList.isDragging}
        onMouseDown={modelosMentaisList.handleMouseDown}
      />
      {selectedModeloMental && (
        <ContentPanel onClose={() => setSelectedModeloMental(null)}>
          <ModeloMentalReader slug={selectedModeloMental} />
        </ContentPanel>
      )}
    </>
  )
}

