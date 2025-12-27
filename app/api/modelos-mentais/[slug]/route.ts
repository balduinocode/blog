import { NextResponse } from "next/server"
import { getModeloMentalBySlug, markdownToHtml } from "@/lib/mdx"
import { modelosMentais } from "@/content/modelos-mentais"

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params

  const mdx = getModeloMentalBySlug(slug)
  if (mdx) {
    return NextResponse.json({
      slug: mdx.slug,
      title: mdx.title,
      date: mdx.date,
      contentHtml: markdownToHtml(mdx.content),
    })
  }

  // Fallback to inline modelos mentais content
  const modeloMental = modelosMentais.find((m) => m.slug === slug)
  if (modeloMental) {
    return NextResponse.json({
      slug: modeloMental.slug,
      title: modeloMental.title,
      date: modeloMental.date,
      contentHtml: modeloMental.content, // already HTML
    })
  }

  return NextResponse.json({ message: "Not found" }, { status: 404 })
}

