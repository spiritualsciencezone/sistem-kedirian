import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { mainEntries } from '@/lib/kedirian'

export function Pillars() {
  return (
    <section id="istilah" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <header className="max-w-2xl">
          <p className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
            Istilah Utama
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight font-light text-balance sm:text-5xl">
            KAWUTOHA, KAINODIHAKU, LALO, GHULU
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
            Keempat istilah berikut adalah istilah khusus dalam Sistem Kedirian.
            Namanya tidak diterjemahkan; istilah formal bahasa Inggris dicantumkan
            dalam tanda kurung.
          </p>
        </header>

        <ul className="mt-16 grid gap-px border border-border/60 bg-border/60 sm:grid-cols-2">
          {mainEntries.map((entry) => (
            <li key={entry.slug} className="bg-background">
              <Link
                href={`/${entry.slug}`}
                className="group flex h-full flex-col p-8 transition-colors duration-500 hover:bg-card sm:p-10"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-serif text-sm text-primary/70">
                    {entry.order}
                  </span>
                  <span className="text-[0.6rem] tracking-hairline uppercase text-muted-foreground">
                    {entry.label}
                  </span>
                </div>

                <h3 className="mt-6 flex items-center gap-3 font-serif text-3xl leading-none font-normal transition-colors duration-500 group-hover:text-primary sm:text-4xl">
                  {entry.name}
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:text-primary group-hover:opacity-100" />
                </h3>

                <p className="mt-3 font-serif text-lg leading-none font-light text-muted-foreground">
                  ({entry.formal})
                </p>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {entry.definition}
                </p>

                {entry.children && entry.children.length > 0 ? (
                  <p className="mt-8 text-[0.6rem] tracking-hairline uppercase text-primary/70">
                    Wilayah utama: KOLALO · KAKOLALO
                  </p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
