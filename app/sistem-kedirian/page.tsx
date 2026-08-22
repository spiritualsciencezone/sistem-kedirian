import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { entries, editorialNote } from '@/lib/kedirian'

export const metadata: Metadata = {
  title: 'Sistem Kedirian — Ikhtisar Istilah',
  description:
    'Ikhtisar kerangka konseptual Sistem Kedirian beserta definisi istilah KAWUTOHA, KAINODIHAKU, LALO, KOLALO, KAKOLALO, dan GHULU.',
}

const structure = [
  {
    title: 'Konteks',
    body: 'KAWUTOHA (Divine Context) adalah konteks ilahi atau konteks keberadaan yang menjadi latar bagi keseluruhan Sistem Kedirian.',
  },
  {
    title: 'Ranah manusia',
    body: 'KAINODIHAKU (Human Domain) adalah ranah pengalaman manusia sebagai makhluk yang mengalami keberadaan dalam konteks kehidupan manusia.',
  },
  {
    title: 'Medan internal',
    body: 'LALO (Internal Field) adalah medan internal kedirian, dengan dua wilayah utama: KOLALO (Thought Domain) dan KAKOLALO (Emotion Domain).',
  },
  {
    title: 'Isi eksternal',
    body: 'GHULU (External Content) adalah isi atau realitas eksternal yang berhubungan dengan pengalaman kedirian di luar medan internal LALO.',
  },
]

export default function SistemKedirianPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <header className="relative overflow-hidden border-b border-border/60">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(ellipse at 20% 0%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 60%)',
            }}
          />
          <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <p className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
              Ikhtisar
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-none font-light text-balance sm:text-6xl">
              Sistem Kedirian
            </h1>
            <p className="mt-8 max-w-2xl font-serif text-xl leading-relaxed font-light text-muted-foreground text-pretty sm:text-2xl">
              Kerangka konseptual yang menggunakan enam istilah khusus. Setiap istilah
              memiliki definisi tertentu dan namanya tidak diterjemahkan.
            </p>
          </div>
        </header>

        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <h2 className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
              Struktur Konseptual
            </h2>
            <dl className="mt-10 grid gap-px border border-border/60 bg-border/60 sm:grid-cols-2">
              {structure.map((item) => (
                <div key={item.title} className="bg-background p-8 sm:p-10">
                  <dt className="font-serif text-2xl leading-none">{item.title}</dt>
                  <dd className="mt-5 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {item.body}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 max-w-2xl border-l border-primary/40 pl-6 text-sm leading-relaxed text-muted-foreground text-pretty">
              {editorialNote}
            </p>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <header className="max-w-2xl">
              <h2 className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
                Daftar Istilah
              </h2>
              <p className="mt-5 font-serif text-3xl leading-tight font-light text-balance sm:text-4xl">
                Enam istilah khusus
              </p>
            </header>

            <ul className="mt-12 border-t border-border/60">
              {entries.map((entry) => (
                <li key={entry.slug} className="border-b border-border/60">
                  <Link
                    href={`/${entry.slug}`}
                    className={`group flex flex-col gap-3 py-7 transition-colors duration-500 hover:bg-card/60 sm:flex-row sm:items-baseline sm:gap-8 ${
                      entry.parent === 'lalo' ? 'sm:pl-10' : ''
                    }`}
                  >
                    <span className="w-12 shrink-0 font-serif text-sm text-primary/60">
                      {entry.order}
                    </span>
                    <span className="flex-1">
                      <span className="flex flex-wrap items-baseline gap-3">
                        <span className="font-serif text-2xl leading-none transition-colors duration-500 group-hover:text-primary sm:text-3xl">
                          {entry.name}
                        </span>
                        <span className="font-serif text-base leading-none text-muted-foreground">
                          ({entry.formal})
                        </span>
                        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:text-primary group-hover:opacity-100" />
                      </span>
                      <span className="mt-3 block max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
                        {entry.definition}
                      </span>
                    </span>
                    <span className="shrink-0 text-[0.6rem] tracking-hairline uppercase text-muted-foreground sm:text-right">
                      {entry.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
