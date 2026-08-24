import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import {
  getAllArticles,
  getArticleBySlug,
} from '@/lib/articles'

type ArticlePageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const articles = getAllArticles()

  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan | Sistem Kedirian',
    }
  }

  return {
    title: `${article.title} | Sistem Kedirian`,
    description: article.excerpt,
  }
}

export default async function ArticleDetailPage({
  params,
}: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        <article>
          {/* HEADER ARTIKEL */}
          <header className="relative overflow-hidden border-b border-border/60">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  'radial-gradient(ellipse at 15% 0%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 60%)',
              }}
            />

            <div className="relative mx-auto max-w-4xl px-6 py-20 sm:py-28">
              <Link
                href="/artikel"
                className="text-[0.6rem] tracking-hairline uppercase text-primary/70 transition-colors hover:text-primary"
              >
                ← Kembali ke Artikel
              </Link>

              <p className="mt-10 text-[0.65rem] tracking-hairline uppercase text-primary/80">
                {article.category}
              </p>

              <h1 className="mt-5 font-serif text-4xl leading-tight font-light text-balance sm:text-6xl">
                {article.title}
              </h1>

              <p className="mt-7 max-w-3xl font-serif text-lg leading-relaxed font-light text-muted-foreground text-pretty sm:text-xl">
                {article.excerpt}
              </p>

              <div className="mt-8 text-[0.6rem] tracking-hairline uppercase text-muted-foreground">
                {article.date}
              </div>
            </div>
          </header>

          {/* ISI ARTIKEL */}
          <section>
            <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
              <div className="space-y-7">
                {article.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-serif text-lg leading-relaxed text-foreground/85 sm:text-xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* NAVIGASI BAWAH */}
          <section className="border-t border-border/60">
            <div className="mx-auto max-w-3xl px-6 py-12">
              <Link
                href="/artikel"
                className="text-[0.65rem] tracking-hairline uppercase text-muted-foreground transition-colors hover:text-primary"
              >
                ← Semua Artikel
              </Link>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
    </>
  )
}
