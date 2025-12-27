"use client"

import { ProjetosList } from "./projetos-list"
import { ProjetoReader } from "./projeto-reader"
import { ContentPanel } from "./content-panel"
import { useState } from "react"
import { useResizable } from "@/hooks/use-resizable"

interface ProjetosSectionProps {
  sidebarWidth: number
}

export function ProjetosSection({ sidebarWidth }: ProjetosSectionProps) {
  const [selectedProjeto, setSelectedProjeto] = useState<string | null>(null)
  
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
        onSelectProjeto={setSelectedProjeto}
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

