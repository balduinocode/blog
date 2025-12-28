"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { ResizeHandle } from "./resize-handle"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import * as Switch from "@radix-ui/react-switch"

type Tab = "inicio" | "notas" | "modelos-mentais" | "poemas" | "projetos"

interface SidebarProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
  width: number
  isDragging: boolean
  onMouseDown: (e: React.MouseEvent) => void
  mobileMenuOpen: boolean
}

const tabLabels: Record<Tab, string> = {
  inicio: "Início",
  notas: "Notas",
  "modelos-mentais": "Modelos Mentais",
  poemas: "Poemas",
  projetos: "Projetos",
}

export function Sidebar({ activeTab, onTabChange, width, isDragging, onMouseDown, mobileMenuOpen }: SidebarProps) {
  const tabs: Tab[] = ["inicio", "notas", "modelos-mentais", "poemas", "projetos"]
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const isDark = theme === "dark"

  return (
    <aside
      style={{ width: `${width}px`, borderRight: '3px double var(--border)' }}
      className={cn(
        "relative shrink-0 bg-background",
        "max-md:fixed max-md:inset-y-0 max-md:left-0 max-md:z-40 max-md:shadow-lg",
        "max-md:transition-transform max-md:duration-150",
        mobileMenuOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full",
      )}
    >
      {/* Ribbon Bookmark */}
      <div className="absolute top-0 left-8 w-8 h-40 z-10 group">
        <div
          className="w-full h-full relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, oklch(0.42 0.18 25), oklch(0.52 0.18 25) 50%, oklch(0.42 0.18 25))',
            border: '1px solid oklch(0.42 0.18 25)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 12px), 0 100%)',
            boxShadow: '2px 2px 6px rgba(0,0,0,0.3), inset -1px -1px 2px rgba(0,0,0,0.2)',
          }}
        >
        </div>
      </div>
      <style jsx>{`
        @keyframes sheen {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
      <nav className="flex flex-col gap-2 p-8 pt-54">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={cn(
              "text-left py-1 transition-colors uppercase tracking-widest text-xs",
              activeTab === tab ? "text-foreground" : "text-foreground/40 hover:text-foreground/70",
            )}
          >
            {tabLabels[tab]}
          </button>
        ))}
        
        {/* Theme Toggle Switch */}
        {mounted && (
          <div className="flex items-center gap-2 mt-6 pt-2">
            <Sun className="w-3 h-3 text-foreground/30" />
            <Switch.Root
              checked={isDark}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              className="relative w-8 h-4 bg-foreground/10 rounded-full data-[state=checked]:bg-foreground/20 transition-colors outline-none cursor-pointer"
            >
              <Switch.Thumb className="block w-3 h-3 bg-foreground/30 rounded-full transition-transform duration-200 translate-x-0.5 data-[state=checked]:translate-x-[18px]" />
            </Switch.Root>
            <Moon className="w-3 h-3 text-foreground/30" />
          </div>
        )}
      </nav>

      <ResizeHandle onMouseDown={onMouseDown} isDragging={isDragging} />
    </aside>
  )
}
