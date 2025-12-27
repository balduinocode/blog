import { Footer } from "./footer"

export function AboutSection() {
  return (
    <div className="flex flex-col justify-between min-h-full">
      <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-serif mb-2">argo·blog</h1>
        <p className="text-muted-foreground text-sm">/ˈargo.blog/</p>
      </div>

      <div className="space-y-4">
        <p className="text-muted-foreground">noun</p>
        <ol className="space-y-2 list-decimal list-inside">
          <li className="text-foreground">
            graduando em filosofia
          </li>
          <li className="text-foreground">
            founding design engineer at{" "}
            <a
              href="https://paradigmai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground opacity-70 underline decoration-dotted decoration-1 underline-offset-2 transition-all hover:opacity-100 hover:decoration-solid"
            >
              Paradigm
            </a>
            ; previously at{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground opacity-70 underline decoration-dotted decoration-1 underline-offset-2 transition-all hover:opacity-100 hover:decoration-solid"
            >
              Vercel
            </a>
            .
          </li>
        </ol>
      </div>

      <div className="flex items-center gap-4 pt-4">
        <span className="text-muted-foreground">Contato:</span>
        <a
          href="https://instagram.com/1martinsalex"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground opacity-70 underline decoration-dotted decoration-1 underline-offset-2 transition-all hover:opacity-100 hover:decoration-solid"
        >
          Instagram
        </a>
        <a
          href="https://www.youtube.com/@oalexmartins"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground opacity-70 underline decoration-dotted decoration-1 underline-offset-2 transition-all hover:opacity-100 hover:decoration-solid"
        >
          Youtube
        </a>
      </div>
      </div>

      <Footer />
    </div>
  )
}
