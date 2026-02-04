/**
 * Parse date string from content (e.g. "Janeiro 2026", "November 2025", "2025-12-01")
 * and return a comparable timestamp for chronological sorting.
 */
export function parseContentDate(dateString: string): number {
  if (!dateString || typeof dateString !== "string") return 0

  const trimmed = dateString.trim()

  // ISO or numeric format: YYYY-MM-DD or MM-DD-YYYY
  if (trimmed.includes("-")) {
    const parts = trimmed.split("-").map((p) => parseInt(p, 10))
    if (parts.length >= 3) {
      // YYYY-MM-DD
      if (parts[0] > 31) {
        return new Date(parts[0], parts[1] - 1, parts[2] || 1).getTime()
      }
      // MM-DD-YYYY
      return new Date(parts[2], parts[0] - 1, parts[1] || 1).getTime()
    }
  }

  // "Month Year" format (Portuguese and English)
  const months: Record<string, number> = {
    janeiro: 0,
    fevereiro: 1,
    março: 2,
    abril: 3,
    maio: 4,
    junho: 5,
    julho: 6,
    agosto: 7,
    setembro: 8,
    outubro: 9,
    novembro: 10,
    dezembro: 11,
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  }

  const parts = trimmed.toLowerCase().split(/\s+/)
  if (parts.length >= 2) {
    const month = months[parts[0]]
    const year = parseInt(parts[1], 10)
    if (month !== undefined && !isNaN(year)) {
      return new Date(year, month, 1).getTime()
    }
  }

  return 0
}

/** Sort items by date, newest first (reverse chronological). */
export function sortByDateDesc<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => parseContentDate(b.date) - parseContentDate(a.date))
}
