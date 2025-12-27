import { projetos } from "@/content/projetos"

interface ProjetoReaderProps {
  slug: string
}

export function ProjetoReader({ slug }: ProjetoReaderProps) {
  const projeto = projetos.find((p) => p.slug === slug)

  if (!projeto) return null

  return (
    <article className="prose prose-sm prose-neutral dark:prose-invert max-w-none text-muted-foreground">
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">{projeto.date}</p>
      <h1 className="text-4xl font-serif mb-8 text-foreground">{projeto.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: projeto.content }} />
    </article>
  )
}

