"use client"

import { ProjetosList } from "./projetos-list"
import { ProjetoReader } from "./projeto-reader"
import { ContentPanel } from "./content-panel"
import { useState } from "react"
import { useResizable } from "@/hooks/use-resizable"

interface ProjetosSectionProps {
  sidebarWidth: number
  selectedProjeto?: string | null
  onSelectProjeto?: (slug: string | null) => void
}

export function ProjetosSection({ sidebarWidth, selectedProjeto: controlledProjeto, onSelectProjeto }: ProjetosSectionProps) {
  const [internalProjeto, setInternalProjeto] = useState<string | null>(null)
  const isControlled = controlledProjeto !== undefined && onSelectProjeto !== undefined
  const selectedProjeto = isControlled ? controlledProjeto : internalProjeto
  const setSelectedProjeto = isControlled ? onSelectProjeto! : setInternalProjeto

  const projetosList = useResizable({
    initialWidth: 600,
    minWidth: 200,
    maxWidth: 600,
    offsetX: sidebarWidth,
  })

  return (
    <>
      <ProjetosList
        selectedProjeto={selectedProjeto}
        onSelectProjeto={(slug) => setSelectedProjeto(slug)}
        width={projetosList.width}
        isDragging={projetosList.isDragging}
        onMouseDown={projetosList.handleMouseDown}
      />
      {selectedProjeto && (
        <ContentPanel onClose={() => setSelectedProjeto(null)}>
          <ProjetoReader slug={selectedProjeto} />
        </ContentPanel>
      )}
    </>
  )
}

