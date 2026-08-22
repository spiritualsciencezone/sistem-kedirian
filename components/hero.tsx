import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-border/60 pt-16"
    >
      {/* signature element: cincin kesadaran konsentris */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative size-[min(150vw,900px)]">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="absolute inset-0 rounded-full border border-primary/20"
              style={{
                transform: `scale(${1 - i * 0.17})`,
                opacity: 0.9 - i * 0.14,
              }}
            />
          ))}
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_10%,transparent)_0%,transparent_62%)]" />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
            Kerangka Konseptual
          </p>

          <h1 className="mt-6 font-serif text-6xl leading-[0.95] font-light text-balance sm:text-7xl lg:text-8xl">
            Sistem
            <br />
            Kedirian
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            Sebuah kerangka konseptual tentang kesadaran manusia, tersusun atas
            KAWUTOHA (Divine Context), KAINODIHAKU (Human Domain), LALO (Internal
            Field) beserta dua wilayah utamanya, dan GHULU (External Content).
          </p>

          <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <a
              href="#diagram"
              className="group inline-flex items-center gap-3 border border-primary/60 bg-primary/10 px-8 py-4 text-xs tracking-hairline uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Mulai Menjelajah
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <p className="text-xs leading-relaxed text-muted-foreground">
              KAWUTOHA · KAINODIHAKU · LALO · GHULU
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
