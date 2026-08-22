import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

type NodeProps = {
  slug: string
  name: string
  meaning: string
  order: string
  variant?: 'primary' | 'branch'
}

function DiagramNode({ slug, name, meaning, order, variant = 'primary' }: NodeProps) {
  const isBranch = variant === 'branch'

  return (
    <Link
      href={`/${slug}`}
      className="group relative block w-full max-w-sm border border-border/70 bg-card/40 px-6 py-5 text-center transition-all duration-500 hover:border-primary/60 hover:bg-card focus-visible:border-primary/60 focus-visible:outline-none"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
        style={{
          boxShadow: '0 0 40px -12px var(--primary)',
        }}
      />
      <span className="relative flex flex-col items-center gap-2">
        <span className="text-[0.55rem] tracking-hairline uppercase text-primary/60">
          {order}
        </span>
        <span
          className={`font-serif leading-none transition-colors duration-500 group-hover:text-primary ${
            isBranch ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
          }`}
        >
          {name}
        </span>
        <span className="text-[0.6rem] tracking-hairline uppercase text-muted-foreground">
          {meaning}
        </span>
      </span>
    </Link>
  )
}

function Connector({ label }: { label?: string }) {
  return (
    <div aria-hidden="true" className="flex flex-col items-center gap-1 py-3">
      <span className="h-8 w-px bg-border" />
      <ChevronDown className="size-3.5 text-primary/50" />
      {label ? (
        <span className="text-[0.55rem] tracking-hairline uppercase text-muted-foreground/70">
          {label}
        </span>
      ) : null}
    </div>
  )
}

export function SystemDiagram() {
  return (
    <section id="diagram" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <header className="max-w-2xl">
          <p className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
            Peta Sistem
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight font-light text-balance sm:text-5xl">
            Struktur istilah Sistem Kedirian
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
            Setiap simpul dapat dibuka untuk membaca definisinya. LALO (Internal
            Field) memiliki dua wilayah utama, yaitu KOLALO (Thought Domain) dan
            KAKOLALO (Emotion Domain).
          </p>
        </header>

        <div className="mt-16 flex flex-col items-center">
          <DiagramNode
            slug="kawutoha"
            name="KAWUTOHA"
            meaning="Divine Context"
            order="01"
          />

          <Connector />

          <DiagramNode
            slug="kainodihaku"
            name="KAINODIHAKU"
            meaning="Human Domain"
            order="02"
          />

          <Connector />

          <DiagramNode slug="lalo" name="LALO" meaning="Internal Field" order="03" />

          {/* percabangan */}
          <div aria-hidden="true" className="flex flex-col items-center pt-3">
            <span className="h-6 w-px bg-border" />
          </div>

          <div className="w-full max-w-2xl">
            <div
              aria-hidden="true"
              className="mx-auto flex w-1/2 items-start justify-between"
            >
              <span className="h-px w-1/2 bg-border" />
              <span className="h-px w-1/2 bg-border" />
            </div>
            <div className="mx-auto flex w-1/2 justify-between">
              <span aria-hidden="true" className="h-6 w-px bg-border" />
              <span aria-hidden="true" className="h-6 w-px bg-border" />
            </div>

            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-stretch sm:justify-center sm:gap-10">
              <div className="flex w-full justify-center">
                <DiagramNode
                  slug="kolalo"
                  name="KOLALO"
                  meaning="Thought Domain"
                  order="03a"
                  variant="branch"
                />
              </div>
              <div className="flex w-full justify-center">
                <DiagramNode
                  slug="kakolalo"
                  name="KAKOLALO"
                  meaning="Emotion Domain"
                  order="03b"
                  variant="branch"
                />
              </div>
            </div>

            <div className="mx-auto flex w-1/2 justify-between pt-0">
              <span aria-hidden="true" className="h-6 w-px bg-border" />
              <span aria-hidden="true" className="h-6 w-px bg-border" />
            </div>
            <div
              aria-hidden="true"
              className="mx-auto flex w-1/2 items-start justify-between"
            >
              <span className="h-px w-1/2 bg-border" />
              <span className="h-px w-1/2 bg-border" />
            </div>
          </div>

          <Connector />

          <DiagramNode slug="ghulu" name="GHULU" meaning="Lapis Kedalaman" order="04" />
        </div>
      </div>
    </section>
  )
}
