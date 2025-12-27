import { modelosMentais } from "@/content/modelos-mentais"

interface ModeloMentalReaderProps {
  slug: string
}

export function ModeloMentalReader({ slug }: ModeloMentalReaderProps) {
  const modeloMental = modelosMentais.find((m) => m.slug === slug)

  if (!modeloMental) return null

  return (
    <article className="prose prose-sm prose-neutral dark:prose-invert max-w-none text-muted-foreground">
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">{modeloMental.date}</p>
      <h1 className="text-4xl font-serif mb-8 text-foreground">{modeloMental.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: modeloMental.content }} />
    </article>
  )
}

