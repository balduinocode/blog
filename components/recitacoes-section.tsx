"use client"

import { RecitacoesList } from "./recitacoes-list"
import { RecitacaoPlayer } from "./recitacao-player"
import { ContentPanel } from "./content-panel"
import { useState } from "react"
import { useResizable } from "@/hooks/use-resizable"

interface RecitacoesSectionProps {
  sidebarWidth: number
}

export function RecitacoesSection({ sidebarWidth }: RecitacoesSectionProps) {
  const [selectedRecitacao, setSelectedRecitacao] = useState<string | null>(null)
  
  const recitacoesList = useResizable({
    initialWidth: 600,
    minWidth: 200,
    maxWidth: 600,
    offsetX: sidebarWidth,
  })

  return (
    <>
      <RecitacoesList
        selectedRecitacao={selectedRecitacao}
        onSelectRecitacao={setSelectedRecitacao}
        width={recitacoesList.width}
        isDragging={recitacoesList.isDragging}
        onMouseDown={recitacoesList.handleMouseDown}
      />
      {selectedRecitacao && (
        <ContentPanel onClose={() => setSelectedRecitacao(null)}>
          <RecitacaoPlayer slug={selectedRecitacao} />
        </ContentPanel>
      )}
    </>
  )
}





