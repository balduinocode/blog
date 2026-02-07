"use client"

import { useState, useMemo, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
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

function parsePathname(pathname: string): { tab: Tab; slug: string | null } {
  const segments = pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean)
  if (segments.length === 0) return { tab: "inicio", slug: null }
  const tab = segments[0] as Tab
  const validTabs: Tab[] = ["inicio", "notas", "modelos-mentais", "poemas", "projetos"]
  if (!validTabs.includes(tab)) return { tab: "inicio", slug: null }
  if (tab === "inicio") return { tab: "inicio", slug: null }
  const slug = segments.length >= 2 ? segments[1] : null
  return { tab, slug }
}

export default function PersonalWebsite() {
  const pathname = usePathname()
  const router = useRouter()

  // Derive tab and selection from URL only — no local state, no flash on navigation
  const parsed = useMemo(() => parsePathname(pathname ?? "/"), [pathname])
  const activeTab = parsed.tab
  const selectedNote = parsed.tab === "notas" ? parsed.slug : null
  const selectedPoema = parsed.tab === "poemas" ? parsed.slug : null
  const selectedModeloMental = parsed.tab === "modelos-mentais" ? parsed.slug : null
  const selectedProjeto = parsed.tab === "projetos" ? parsed.slug : null

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleTabChange = useCallback(
    (tab: Tab) => {
      setMobileMenuOpen(false)
      if (tab === "inicio") {
        router.push("/")
      } else {
        router.push("/" + tab)
      }
    },
    [router],
  )

  const handleSelectNote = useCallback(
    (slug: string | null) => {
      if (slug) router.push("/notas/" + slug)
      else router.push("/notas")
    },
    [router],
  )

  const handleSelectPoema = useCallback(
    (slug: string | null) => {
      if (slug) router.push("/poemas/" + slug)
      else router.push("/poemas")
    },
    [router],
  )

  const handleSelectModeloMental = useCallback(
    (slug: string | null) => {
      if (slug) router.push("/modelos-mentais/" + slug)
      else router.push("/modelos-mentais")
    },
    [router],
  )

  const handleSelectProjeto = useCallback(
    (slug: string | null) => {
      if (slug) router.push("/projetos/" + slug)
      else router.push("/projetos")
    },
    [router],
  )

  const sidebar = useResizable({ initialWidth: 192, minWidth: 150, maxWidth: 400 })
  const notesList = useResizable({
    initialWidth: 600,
    minWidth: 200,
    maxWidth: 600,
    offsetX: sidebar.width,
  })

  return (
    <div className="flex min-h-screen min-w-0 overflow-x-hidden">
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
            onSelectNote={(slug) => handleSelectNote(slug)}
            width={notesList.width}
            isDragging={notesList.isDragging}
            onMouseDown={notesList.handleMouseDown}
          />
          {selectedNote && (
            <ContentPanel onClose={() => handleSelectNote(null)}>
              <NoteReader slug={selectedNote} />
            </ContentPanel>
          )}
        </>
      ) : activeTab === "modelos-mentais" ? (
        <ModelosMentaisSection
          sidebarWidth={sidebar.width}
          selectedModeloMental={selectedModeloMental}
          onSelectModeloMental={handleSelectModeloMental}
        />
      ) : activeTab === "projetos" ? (
        <ProjetosSection
          sidebarWidth={sidebar.width}
          selectedProjeto={selectedProjeto}
          onSelectProjeto={handleSelectProjeto}
        />
      ) : activeTab === "poemas" ? (
        <PoemasSection
          sidebarWidth={sidebar.width}
          selectedPoema={selectedPoema}
          onSelectPoema={handleSelectPoema}
        />
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
