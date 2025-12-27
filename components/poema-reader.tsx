import { poemas } from "@/content/poemas"

interface PoemaReaderProps {
  slug: string
}

export function PoemaReader({ slug }: PoemaReaderProps) {
  const poema = poemas.find((p) => p.slug === slug)

  if (!poema) return null

  return (
    <article className="prose prose-sm prose-neutral dark:prose-invert max-w-none text-muted-foreground">
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">{poema.date}</p>
      <h1 className="text-4xl font-serif mb-8 text-foreground">{poema.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: poema.content }} />
    </article>
  )
}

