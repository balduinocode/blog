import { Footer } from "./footer"

export function AboutSection() {
  return (
    <div className="flex flex-col justify-between min-h-full">
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-serif mb-2">argo·blog</h1>
          <p className="text-muted-foreground text-sm">/feito por alex martins/</p>
        </div>

        <div className="space-y-4">
          <p className="text-muted-foreground">substantivo</p>
          <ol className="space-y-2 list-decimal list-inside">
            <li className="text-foreground">
              graduando em filosofia, diretor de arte amador, poeta amador, programador amador, etc...
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-0.5 pt-4 min-w-0">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 min-w-0">
            <span className="text-muted-foreground shrink-0">Contato:</span>
            <span className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
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
              <a
                href="mailto:contato@alexmartins.work"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground opacity-70 underline decoration-dotted decoration-1 underline-offset-2 transition-all hover:opacity-100 hover:decoration-solid"
              >
                Email
              </a>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 min-w-0">
            <span className="text-muted-foreground shrink-0">Trabalho:</span>
            <span className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
              <span className="text-foreground opacity-50 cursor-not-allowed">
                Bots/Sistemas
              </span>
              <a
                href="https://cdn.jsdelivr.net/gh/balduinocode/blog@b56e0f6c38070a0bc2ce0327e5b8b23ba32c73b4/pdf-dda.pdf#view=Fit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground opacity-70 underline decoration-dotted decoration-1 underline-offset-2 transition-all hover:opacity-100 hover:decoration-solid"
              >
                Direção de Arte
              </a>
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
