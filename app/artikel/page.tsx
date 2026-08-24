import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Artikel | Sistem Kedirian',
  description:
    'Kumpulan artikel mengenai Sistem Kedirian, kesadaran, pengalaman manusia, dan pengembangan pemahaman tentang Diri.',
}

const articles = [
  {
    title: 'Memahami Sistem Kedirian',
    excerpt:
      'Pengantar mengenai Sistem Kedirian sebagai kerangka untuk memahami hubungan antara Diri, konteks, pengalaman, dan realitas.',
    category: 'Sistem Kedirian',
  },
  {
    title: 'Diri dan Pengalaman',
    excerpt:
      'Mengamati perbedaan antara Diri sebagai yang mengalami dan berbagai pengalaman yang muncul dalam kehidupan.',
    category: 'Kesadaran',
  },
]

export default function ArtikelPage() {
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
                'radial-gradient(ellipse at 15% 0%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 60%)',
            }}
          />

          <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <p className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
              Artikel
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-none font-light text-balance sm:text-7xl">
              Gagasan yang terus berkembang
            </h1>

            <p className="mt-8 max-w-2xl font-serif text-xl leading-relaxed font-light text-muted-foreground text-pretty sm:text-2xl">
              Ruang untuk tulisan, pemikiran, dan penjelajahan lebih lanjut
              mengenai Sistem Kedirian dan pengalaman kesadaran manusia.
            </p>
          </div>
        </header>

        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <header className="max-w-2xl">
              <p className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
                Daftar Artikel
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight font-light text-balance sm:text-4xl">
                Tulisan dan penjelajahan
              </h2>
            </header>

            <div className="mt-12 border-t border-border/60">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="border-b border-border/60 py-8 sm:py-10"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
                    <div className="max-w-3xl">
                      <p className="text-[0.6rem] tracking-hairline uppercase text-primary/70">
                        {article.category}
                      </p>

                      <h3 className="mt-4 font-serif text-2xl leading-tight font-normal sm:text-3xl">
                        {article.title}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                        {article.excerpt}
                      </p>
                    </div>

                    <span className="shrink-0 text-[0.6rem] tracking-hairline uppercase text-muted-foreground">
                      Segera
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
