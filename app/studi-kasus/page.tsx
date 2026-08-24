import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Studi Kasus | Sistem Kedirian',
  description:
    'Studi kasus mengenai Sistem Kedirian, kesadaran, pengalaman manusia, conditioning, dan pengenalan Diri.',
}

const studiKasus = [
  {
    number: '01',
    title: 'Memahami Diri dan Pengalaman',
    category: 'Kesadaran',
    description:
      'Mengamati perbedaan antara Diri sebagai yang mengalami dan berbagai pengalaman yang muncul dalam kehidupan.',
    points: [
      'Diri dan pengalaman',
      'Kesadaran dan pengamatan',
      'Pengalaman sebagai sesuatu yang diamati',
    ],
  },
  {
    number: '02',
    title: 'Human Design dan Struktur Kedirian',
    category: 'Human Design',
    description:
      'Menggunakan Human Design sebagai salah satu peta untuk mengamati bagaimana energi, conditioning, dan mekanisme pengambilan keputusan bekerja.',
    points: [
      'Defined dan Undefined Centers',
      'Strategy dan Authority',
      'Not-Self Theme dan conditioning',
    ],
  },
  {
    number: '03',
    title: 'Shadow dan Conditioning',
    category: 'Shadow Work',
    description:
      'Mengamati pola yang muncul melalui ketakutan, kebutuhan akan validasi, pencarian identitas, dan respons otomatis terhadap lingkungan.',
    points: [
      'Mengenali Shadow',
      'Mengamati conditioning',
      'Membedakan pola dan Diri',
    ],
  },
  {
    number: '04',
    title: 'Keputusan dan Otoritas Internal',
    category: 'Eksperimen',
    description:
      'Mempelajari bagaimana keputusan dapat muncul dari mekanisme internal yang berbeda dari dorongan pikiran dan tekanan lingkungan.',
    points: [
      'Menunggu Strategy',
      'Mengenali Authority',
      'Mengamati respons internal',
    ],
  },
  {
    number: '05',
    title: 'Pikiran, Emosi, dan Realitas',
    category: 'Kesadaran',
    description:
      'Mengkaji bagaimana pikiran dan emosi memengaruhi cara seseorang mengalami dan menafsirkan realitas.',
    points: [
      'Thought Domain',
      'Emotion Domain',
      'Awareness sebagai ruang pengamatan',
    ],
  },
  {
    number: '06',
    title: 'Dari Conditioning menuju Kesadaran',
    category: 'Integrasi',
    description:
      'Mengamati perjalanan dari identifikasi terhadap pola diri menuju kemampuan melihat pola tersebut tanpa menjadikannya sebagai identitas.',
    points: [
      'Mengamati tanpa menghakimi',
      'Memisahkan pengalaman dari identitas',
      'Mengintegrasikan awareness',
    ],
  },
]

const proses = [
  {
    step: '01',
    title: 'Observe',
    description:
      'Mengamati apa yang sedang terjadi tanpa langsung memberikan penilaian.',
  },
  {
    step: '02',
    title: 'Recognize',
    description:
      'Mengenali pola yang berulang dalam pikiran, emosi, tubuh, dan perilaku.',
  },
  {
    step: '03',
    title: 'Understand',
    description:
      'Memahami struktur yang berada di balik pola tersebut.',
  },
  {
    step: '04',
    title: 'Experiment',
    description:
      'Menguji pemahaman melalui pengalaman nyata, bukan hanya melalui teori.',
  },
  {
    step: '05',
    title: 'Integrate',
    description:
      'Membawa hasil pengamatan ke dalam kehidupan sehingga menjadi pengetahuan yang hidup.',
  },
]

export default function StudiKasusPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* HERO */}
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
              Studi Kasus
            </p>

            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-none font-light text-balance sm:text-7xl">
              Memahami Diri melalui pengalaman
            </h1>

            <p className="mt-8 max-w-2xl font-serif text-xl leading-relaxed font-light text-muted-foreground text-pretty sm:text-2xl">
              Ruang untuk membawa Sistem Kedirian keluar dari wilayah konsep
              dan mengamatinya melalui pengalaman manusia yang nyata.
            </p>
          </div>
        </header>

        {/* INTRO */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <header>
                <p className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
                  Mengapa Studi Kasus?
                </p>

                <h2 className="mt-5 font-serif text-3xl leading-tight font-light text-balance sm:text-4xl">
                  Teori menjadi hidup ketika bertemu pengalaman
                </h2>
              </header>

              <div className="max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  Sistem Kedirian tidak dimaksudkan hanya sebagai kumpulan
                  konsep tentang manusia. Ia merupakan kerangka untuk
                  mengamati hubungan antara Diri, pikiran, emosi, tubuh,
                  identitas, pengalaman, dan realitas.
                </p>

                <p>
                  Karena itu, studi kasus menjadi bagian penting dalam proses
                  memahami sistem ini. Setiap kasus memberikan kesempatan untuk
                  melihat bagaimana sebuah pola bekerja ketika berhadapan
                  dengan kehidupan nyata.
                </p>

                <p>
                  Yang dicari bukanlah label baru untuk seseorang, melainkan
                  kejernihan dalam melihat struktur yang sedang bekerja.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DAFTAR STUDI KASUS */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <header className="max-w-2xl">
              <p className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
                Koleksi Studi
              </p>

              <h2 className="mt-5 font-serif text-3xl leading-tight font-light text-balance sm:text-4xl">
                Enam pintu untuk melihat kedirian
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Setiap studi melihat aspek yang berbeda, namun semuanya
                kembali pada satu pertanyaan: bagaimana manusia mengalami dan
                mengenali dirinya?
              </p>
            </header>

            <div className="mt-12 border-t border-border/60">
              {studiKasus.map((study) => (
                <article
                  key={study.number}
                  className="border-b border-border/60 py-10 sm:py-12"
                >
                  <div className="grid gap-8 lg:grid-cols-[80px_1fr_1fr] lg:gap-12">
                    <div>
                      <span className="text-[0.65rem] tracking-hairline text-primary/70">
                        {study.number}
                      </span>
                    </div>

                    <div>
                      <p className="text-[0.6rem] tracking-hairline uppercase text-primary/70">
                        {study.category}
                      </p>

                      <h3 className="mt-4 font-serif text-2xl leading-tight font-normal sm:text-3xl">
                        {study.title}
                      </h3>

                      <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                        {study.description}
                      </p>
                    </div>

                    <div>
                      <p className="text-[0.6rem] tracking-hairline uppercase text-muted-foreground">
                        Fokus Pengamatan
                      </p>

                      <ul className="mt-5 space-y-3">
                        {study.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* KERANGKA PENGAMATAN */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <header>
                <p className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
                  Kerangka Pengamatan
                </p>

                <h2 className="mt-5 font-serif text-3xl leading-tight font-light text-balance sm:text-4xl">
                  Bukan menghakimi diri.
                  <br />
                  Melainkan melihat diri.
                </h2>
              </header>

              <div className="border-t border-border/60">
                {proses.map((item) => (
                  <div
                    key={item.step}
                    className="grid gap-4 border-b border-border/60 py-7 sm:grid-cols-[70px_160px_1fr]"
                  >
                    <span className="text-[0.65rem] tracking-hairline text-primary/70">
                      {item.step}
                    </span>

                    <h3 className="font-serif text-lg font-normal">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SISTEM KEDIRIAN */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <div className="relative overflow-hidden border border-border/60 px-7 py-12 sm:px-12 sm:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background:
                    'radial-gradient(ellipse at 85% 50%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 65%)',
                }}
              />

              <div className="relative grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                <header>
                  <p className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
                    Sistem Kedirian
                  </p>

                  <h2 className="mt-5 font-serif text-3xl leading-tight font-light text-balance sm:text-4xl">
                    Dari pengalaman menuju pengenalan
                  </h2>
                </header>

                <div className="space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    Setiap manusia mengalami dunia melalui sebuah struktur
                    kedirian. Di dalamnya terdapat apa yang kita sebut sebagai
                    pikiran, emosi, tubuh, identitas, keinginan, ketakutan,
                    dan pengalaman.
                  </p>

                  <p>
                    Sistem Kedirian mencoba membaca struktur tersebut tanpa
                    menjadikan struktur itu sebagai identitas terakhir manusia.
                  </p>

                  <p className="font-serif text-xl leading-relaxed text-foreground">
                    Sebab yang mengamati pengalaman bukanlah pengalaman itu
                    sendiri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <div className="max-w-3xl">
              <p className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
                Langkah Berikutnya
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight font-light text-balance sm:text-5xl">
                Jangan hanya memahami sistem.
                <br />
                Amati dirimu sendiri.
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Studi kasus adalah undangan untuk berpindah dari pengetahuan
                konseptual menuju pengamatan langsung terhadap kehidupan.
              </p>

              <div className="mt-8">
                <a
                  href="/artikel"
                  className="inline-flex items-center gap-3 border border-border px-5 py-3 text-[0.65rem] tracking-hairline uppercase text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <span>Lihat Artikel</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
