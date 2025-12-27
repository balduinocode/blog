import { NextResponse } from "next/server"
import { getProjetoBySlug, markdownToHtml } from "@/lib/mdx"
import { projetos } from "@/content/projetos"

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params

  const mdx = getProjetoBySlug(slug)
  if (mdx) {
    return NextResponse.json({
      slug: mdx.slug,
      title: mdx.title,
      date: mdx.date,
      contentHtml: markdownToHtml(mdx.content),
    })
  }

  // Fallback to inline projetos content
  const projeto = projetos.find((p) => p.slug === slug)
  if (projeto) {
    return NextResponse.json({
      slug: projeto.slug,
      title: projeto.title,
      date: projeto.date,
      contentHtml: projeto.content, // already HTML
    })
  }

  return NextResponse.json({ message: "Not found" }, { status: 404 })
}

