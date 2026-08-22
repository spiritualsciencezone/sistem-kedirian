import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { entries, getEntry, editorialNote } from '@/lib/kedirian'

export function generateStaticParams() {
  return entries.map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const entry = getEntry(slug)
  if (!entry) return {}

  return {
    title: `${entry.name} (${entry.formal}) | Sistem Kedirian`,
    description: entry.definition,
  }
}

export default async function EntryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry = getEntry(slug)

  if (!entry) notFound()

  const previous = entry.previous ? getEntry(entry.previous) : undefined
  const next = entry.next ? getEntry(entry.next) : undefined
  const parent = entry.parent ? getEntry(entry.parent) : undefined
  const children = (entry.children ?? [])
    .map((child) => getEntry(child))
    .filter((child): child is NonNullable<typeof child> => Boolean(child))

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <article>
          <header className="relative overflow-hidden border-b border-border/60">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  'radial-gradient(ellipse at 15% 0%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 60%)',
              }}
            />
            <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
              <nav
                aria-label="Jejak halaman"
                className="flex flex-wrap items-center gap-2 text-[0.6rem] tracking-hairline uppercase text-muted-foreground"
              >
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
                <span aria-hidden="true" className="text-border">
                  /
                </span>
                <Link
                  href="/sistem-kedirian"
                  className="transition-colors hover:text-primary"
                >
                  Sistem Kedirian
                </Link>
                {parent ? (
                  <>
                    <span aria-hidden="true" className="text-border">
                      /
                    </span>
                    <Link
                      href={`/${parent.slug}`}
                      className="transition-colors hover:text-primary"
                    >
                      {parent.name}
                    </Link>
                  </>
                ) : null}
                <span aria-hidden="true" className="text-border">
                  /
                </span>
                <span className="text-primary/80">{entry.name}</span>
              </nav>

              <p className="mt-10 text-[0.65rem] tracking-hairline uppercase text-primary/80">
                Entri {entry.order} — {entry.label}
              </p>
              <h1 className="mt-6 font-serif text-5xl leading-none font-light text-balance sm:text-7xl">
                {entry.name}
              </h1>
              <p className="mt-5 font-serif text-2xl leading-none font-light text-muted-foreground">
                ({entry.formal})
              </p>
              <p className="mt-8 max-w-2xl font-serif text-xl leading-relaxed font-light text-foreground/90 text-pretty sm:text-2xl">
                {entry.definition}
              </p>
            </div>
          </header>

          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
            <div>
              <h2 className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
                Definisi
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-foreground/90 text-pretty">
                {entry.definition}
              </p>

              <h2 className="mt-16 text-[0.65rem] tracking-hairline uppercase text-primary/80">
                Kedudukan dalam Sistem
              </h2>
              <ul className="mt-8 divide-y divide-border/60 border-y border-border/60">
                {entry.structure.map((item) => (
                  <li key={item} className="flex gap-6 py-6">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rotate-45 bg-primary/70"
                    />
                    <p className="leading-relaxed text-muted-foreground text-pretty">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-12 border-l border-primary/40 pl-6 text-sm leading-relaxed text-muted-foreground text-pretty">
                {editorialNote}
              </p>
            </div>

            <aside className="flex flex-col gap-10 lg:sticky lg:top-28 lg:self-start">
              <div>
                <h2 className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
                  Istilah
                </h2>
                <dl className="mt-5 divide-y divide-border/40 border-y border-border/40 text-sm">
                  <div className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-[0.6rem] tracking-hairline uppercase text-muted-foreground">
                      Indonesia
                    </dt>
                    <dd className="font-serif text-base">{entry.name}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-[0.6rem] tracking-hairline uppercase text-muted-foreground">
                      Inggris
                    </dt>
                    <dd className="font-serif text-base">{entry.formal}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-[0.6rem] tracking-hairline uppercase text-muted-foreground">
                      Padanan
                    </dt>
                    <dd className="font-serif text-base">{entry.label}</dd>
                  </div>
                </dl>
              </div>

              {children.length > 0 ? (
                <div>
                  <h2 className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
                    Wilayah Utama
                  </h2>
                  <ul className="mt-5 flex flex-col gap-px bg-border/60">
                    {children.map((child) => (
                      <li key={child.slug}>
                        <Link
                          href={`/${child.slug}`}
                          className="group flex items-start justify-between gap-4 bg-card/40 p-5 transition-colors hover:bg-card"
                        >
                          <span>
                            <span className="block font-serif text-lg transition-colors group-hover:text-primary">
                              {child.name}
                            </span>
                            <span className="mt-1 block text-[0.6rem] tracking-hairline uppercase text-muted-foreground">
                              {child.formal}
                            </span>
                          </span>
                          <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div>
                <h2 className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
                  Seluruh entri
                </h2>
                <ul className="mt-5 flex flex-col">
                  {entries.map((item) => {
                    const active = item.slug === entry.slug
                    return (
                      <li
                        key={item.slug}
                        className="border-b border-border/40 last:border-0"
                      >
                        <Link
                          href={`/${item.slug}`}
                          aria-current={active ? 'page' : undefined}
                          className={`flex items-baseline gap-4 py-3 text-sm transition-colors hover:text-primary ${
                            active ? 'text-primary' : 'text-muted-foreground'
                          } ${item.parent === 'lalo' ? 'pl-5' : ''}`}
                        >
                          <span className="font-serif text-xs text-primary/60">
                            {item.order}
                          </span>
                          <span className="font-serif text-base">{item.name}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </aside>
          </div>

          <nav
            aria-label="Entri sebelumnya dan berikutnya"
            className="border-t border-border/60"
          >
            <div className="mx-auto grid max-w-6xl gap-px bg-border/60 sm:grid-cols-2">
              {previous ? (
                <Link
                  href={`/${previous.slug}`}
                  className="group flex flex-col gap-2 bg-background px-6 py-10 transition-colors hover:bg-card"
                >
                  <span className="flex items-center gap-2 text-[0.6rem] tracking-hairline uppercase text-muted-foreground">
                    <ArrowLeft className="size-3.5" /> Sebelumnya
                  </span>
                  <span className="font-serif text-2xl transition-colors group-hover:text-primary">
                    {previous.name}
                  </span>
                </Link>
              ) : (
                <Link
                  href="/sistem-kedirian"
                  className="group flex flex-col gap-2 bg-background px-6 py-10 transition-colors hover:bg-card"
                >
                  <span className="flex items-center gap-2 text-[0.6rem] tracking-hairline uppercase text-muted-foreground">
                    <ArrowLeft className="size-3.5" /> Kembali
                  </span>
                  <span className="font-serif text-2xl transition-colors group-hover:text-primary">
                    Sistem Kedirian
                  </span>
                </Link>
              )}

              {next ? (
                <Link
                  href={`/${next.slug}`}
                  className="group flex flex-col items-end gap-2 bg-background px-6 py-10 text-right transition-colors hover:bg-card"
                >
                  <span className="flex items-center gap-2 text-[0.6rem] tracking-hairline uppercase text-muted-foreground">
                    Berikutnya <ArrowRight className="size-3.5" />
                  </span>
                  <span className="font-serif text-2xl transition-colors group-hover:text-primary">
                    {next.name}
                  </span>
                </Link>
              ) : (
                <Link
                  href="/sistem-kedirian"
                  className="group flex flex-col items-end gap-2 bg-background px-6 py-10 text-right transition-colors hover:bg-card"
                >
                  <span className="flex items-center gap-2 text-[0.6rem] tracking-hairline uppercase text-muted-foreground">
                    Daftar entri <ArrowRight className="size-3.5" />
                  </span>
                  <span className="font-serif text-2xl transition-colors group-hover:text-primary">
                    Sistem Kedirian
                  </span>
                </Link>
              )}
            </div>
          </nav>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
