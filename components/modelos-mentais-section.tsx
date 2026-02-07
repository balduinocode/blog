"use client"

import { ModelosMentaisList } from "./modelos-mentais-list"
import { ModeloMentalReader } from "./modelo-mental-reader"
import { ContentPanel } from "./content-panel"
import { useState } from "react"
import { useResizable } from "@/hooks/use-resizable"

interface ModelosMentaisSectionProps {
  sidebarWidth: number
  selectedModeloMental?: string | null
  onSelectModeloMental?: (slug: string | null) => void
}

export function ModelosMentaisSection({ sidebarWidth, selectedModeloMental: controlledModelo, onSelectModeloMental }: ModelosMentaisSectionProps) {
  const [internalModelo, setInternalModelo] = useState<string | null>(null)
  const isControlled = controlledModelo !== undefined && onSelectModeloMental !== undefined
  const selectedModeloMental = isControlled ? controlledModelo : internalModelo
  const setSelectedModeloMental = isControlled ? onSelectModeloMental! : setInternalModelo

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
        onSelectModeloMental={(slug) => setSelectedModeloMental(slug)}
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

