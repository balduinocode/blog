import { NextResponse } from "next/server"
import { getPoemaBySlug, markdownToHtmlPoema } from "@/lib/mdx"
import { poemas } from "@/content/poemas"

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params

  const mdx = getPoemaBySlug(slug)
  if (mdx) {
    return NextResponse.json({
      slug: mdx.slug,
      title: mdx.title,
      date: mdx.date,
      contentHtml: markdownToHtmlPoema(mdx.content),
    })
  }

  // Fallback to inline poemas content
  const poema = poemas.find((p) => p.slug === slug)
  if (poema) {
    return NextResponse.json({
      slug: poema.slug,
      title: poema.title,
      date: poema.date,
      contentHtml: poema.content, // already HTML
    })
  }

  return NextResponse.json({ message: "Not found" }, { status: 404 })
}

