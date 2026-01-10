"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useResizable } from "@/hooks/use-resizable"
import { Sidebar } from "@/components/sidebar"
import { AboutSection } from "@/components/about-section"
import { NotesList } from "@/components/notes-list"
import { NoteReader } from "@/components/note-reader"
import { ContentPanel } from "@/components/content-panel"
import { ModelosMentaisSection } from "@/components/modelos-mentais-section"
import { PoemasSection } from "@/components/poemas-section"
import { ProjetosSection } from "@/components/projetos-section"

type Tab = "inicio" | "notas" | "modelos-mentais" | "poemas" | "projetos"

export default function PersonalWebsite() {
  const [activeTab, setActiveTab] = useState<Tab>("inicio")
  const [selectedNote, setSelectedNote] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sidebar = useResizable({ initialWidth: 192, minWidth: 150, maxWidth: 400 })
  const notesList = useResizable({
    initialWidth: 600,
    minWidth: 200,
    maxWidth: 600,
    offsetX: sidebar.width,
  })

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab)
    setMobileMenuOpen(false)
  }

  return (
    <div className="flex min-h-screen">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-6 left-6 z-50 md:hidden bg-background border border-border rounded-lg p-2.5 hover:bg-muted shadow-sm"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <Sidebar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        width={sidebar.width}
        isDragging={sidebar.isDragging}
        onMouseDown={sidebar.handleMouseDown}
        mobileMenuOpen={mobileMenuOpen}
      />

      {activeTab === "notas" ? (
        <>
          <NotesList
            selectedNote={selectedNote}
            onSelectNote={setSelectedNote}
            width={notesList.width}
            isDragging={notesList.isDragging}
            onMouseDown={notesList.handleMouseDown}
          />
          {selectedNote && (
            <ContentPanel onClose={() => setSelectedNote(null)}>
              <NoteReader slug={selectedNote} />
            </ContentPanel>
          )}
        </>
      ) : activeTab === "modelos-mentais" ? (
        <ModelosMentaisSection sidebarWidth={sidebar.width} />
      ) : activeTab === "projetos" ? (
        <ProjetosSection sidebarWidth={sidebar.width} />
      ) : activeTab === "poemas" ? (
        <PoemasSection sidebarWidth={sidebar.width} />
      ) : (
        <main className="flex-1 px-8 md:px-16 max-w-3xl overflow-y-auto pt-28 md:pt-16 flex flex-col justify-between min-h-screen pb-0">
          {activeTab === "inicio" && <AboutSection />}
        </main>
      )}

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}
    </div>
  )
}
