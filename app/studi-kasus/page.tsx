import { SiteHeader } from '@/components/site-header'

const studiKasus = [
  {
    number: '01',
    title: 'Kesadaran dan Kedirian',
    category: 'Kesadaran',
    description:
      'Mengkaji bagaimana manusia membentuk pengalaman tentang dirinya melalui pikiran, emosi, identitas, dan pengalaman yang terjadi di dalam kehidupan.',
    points: [
      'Membedakan Diri Sejati dan Ego',
      'Mengamati pola pikiran dan emosi',
      'Memahami hubungan antara kesadaran dan pengalaman',
    ],
  },
  {
    number: '02',
    title: 'Human Design dan Struktur Kedirian',
    category: 'Human Design',
    description:
      'Menggunakan BodyGraph sebagai peta untuk mengamati bagaimana energi, keterbukaan, conditioning, dan mekanisme pengambilan keputusan bekerja dalam diri.',
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
      'Mengamati bagian diri yang muncul melalui ketakutan, kebutuhan akan validasi, pencarian identitas, dan pola respons otomatis terhadap lingkungan.',
    points: [
      'Mengenali Shadow',
      'Melihat conditioning yang berulang',
      'Mengubah pengamatan menjadi awareness',
    ],
  },
  {
    number: '04',
    title: 'Keputusan dan Otoritas Internal',
    category: 'Eksperimen',
    description:
      'Mempelajari bagaimana keputusan dapat muncul dari mekanisme internal yang berbeda dari dorongan pikiran, tekanan lingkungan, atau kebutuhan untuk membuktikan diri.',
    points: [
      'Menunggu Strategy',
      'Mengenali Authority',
      'Mengamati respons tubuh',
    ],
  },
  {
    number: '05',
    title: 'Pikiran, Emosi, dan Realitas',
    category: 'Psikologi Kesadaran',
    description:
      'Mengkaji bagaimana pikiran dan emosi membentuk cara seseorang menafsirkan realitas, serta bagaimana pengamatan yang sadar dapat menciptakan jarak dari identifikasi.',
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
      'Studi integratif mengenai perjalanan dari identifikasi terhadap pola diri menuju kemampuan mengamati pola tersebut tanpa kehilangan pusat kesadaran.',
    points: [
      'Mengamati tanpa menghakimi',
      'Memisahkan pengalaman dari identitas',
      'Mengintegrasikan kesadaran ke kehidupan sehari-hari',
    ],
  },
]

const proses = [
  {
    step: '01',
    title: 'Observe',
    description: 'Mengamati apa yang sedang terjadi tanpa langsung memberikan penilaian.',
  },
  {
    step: '02',
    title: 'Recognize',
    description: 'Mengenali pola yang berulang dalam pikiran, emosi, tubuh, dan perilaku.',
  },
  {
    step: '03',
    title: 'Understand',
    description: 'Memahami struktur yang berada di balik pola tersebut.',
  },
  {
    step: '04',
    title: 'Experiment',
    description: 'Menguji pemahaman melalui pengalaman nyata, bukan hanya melalui teori.',
  },
  {
    step: '05',
    title: 'Integrate',
    description: 'Membawa hasil pengamatan ke dalam kehidupan sehingga menjadi pengetahuan yang hidup.',
  },
]

export default function StudiKasusPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#181817]">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-black/50" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-black/55">
                Studi Kasus
              </span>
            </div>

            <h1 className="text-5xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Memahami Diri
              <br />
              melalui pengalaman.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60 sm:text-xl">
              Studi kasus adalah ruang untuk membawa Sistem Kedirian keluar
              dari wilayah konsep dan mengujinya melalui pengalaman manusia
              yang nyata.
            </p>
          </div>

          <div className="mt-16 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                Fokus
              </p>
              <p className="mt-2 text-base">Diri · Kesadaran · Conditioning</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                Pendekatan
              </p>
              <p className="mt-2 text-base">Observasi · Eksperimen · Integrasi</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                Tujuan
              </p>
              <p className="mt-2 text-base">
                Melihat pola tanpa menjadi pola
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full border border-black/5" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-black/5" />
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-black/40">
              Mengapa Studi Kasus?
            </span>

            <h2 className="mt-5 max-w-md text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
              Teori menjadi hidup ketika bertemu pengalaman.
            </h2>
          </div>

          <div className="max-w-3xl space-y-6 text-base leading-8 text-black/65 sm:text-lg">
            <p>
              Sistem Kedirian tidak dimaksudkan hanya sebagai kumpulan konsep
              tentang manusia. Ia adalah kerangka untuk mengamati bagaimana
              pengalaman manusia terbentuk dari hubungan antara kesadaran,
              pikiran, emosi, tubuh, identitas, dan dunia yang dihadapi.
            </p>

            <p>
              Karena itu, studi kasus menjadi bagian penting dari proses
              memahami sistem ini. Setiap kasus memberikan kesempatan untuk
              melihat bagaimana sebuah pola bekerja ketika berhadapan dengan
              kehidupan nyata.
            </p>

            <p>
              Yang dicari bukanlah label baru untuk seseorang, melainkan
              kejernihan dalam melihat struktur yang sedang bekerja.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="border-y border-black/10 bg-[#efeee9]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-14 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-black/40">
              Koleksi Studi
            </span>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
              Enam pintu untuk melihat kedirian.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
            {studiKasus.map((study) => (
              <article
                key={study.number}
                className="group bg-[#f8f7f3] p-7 transition-colors duration-300 hover:bg-white sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-medium tracking-[0.2em] text-black/35">
                    {study.number}
                  </span>

                  <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-black/45">
                    {study.category}
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-medium tracking-[-0.02em]">
                  {study.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-black/60">
                  {study.description}
                </p>

                <div className="mt-7 border-t border-black/10 pt-5">
                  <ul className="space-y-3">
                    {study.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm text-black/60"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-black/30" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-black/35 transition-colors group-hover:text-black/70">
                  <span>Explore</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-black/40">
              Kerangka Pengamatan
            </span>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">
              Bukan menghakimi diri.
              <br />
              Melainkan melihat diri.
            </h2>
          </div>

          <div>
            <div className="space-y-0 border-t border-black/10">
              {proses.map((item) => (
                <div
                  key={item.step}
                  className="grid gap-4 border-b border-black/10 py-7 sm:grid-cols-[70px_180px_1fr] sm:items-start"
                >
                  <span className="text-xs tracking-[0.2em] text-black/35">
                    {item.step}
                  </span>

                  <h3 className="text-lg font-medium">{item.title}</h3>

                  <p className="max-w-xl text-sm leading-7 text-black/55">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SISTEM KEDIRIAN */}
      <section className="bg-[#171716] text-[#f5f3ed]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-white/40">
                Sistem Kedirian
              </span>

              <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">
                Dari pengalaman menuju pengenalan.
              </h2>
            </div>

            <div className="space-y-7 text-base leading-8 text-white/60 sm:text-lg">
              <p>
                Setiap manusia mengalami dunia melalui sebuah struktur
                kedirian. Di dalamnya terdapat apa yang kita sebut sebagai
                pikiran, emosi, tubuh, identitas, keinginan, ketakutan, dan
                pengalaman.
              </p>

              <p>
                Sistem Kedirian mencoba membaca struktur tersebut tanpa
                menjadikan struktur itu sebagai identitas terakhir manusia.
              </p>

              <p className="text-white/85">
                Sebab yang mengamati pengalaman bukanlah pengalaman itu
                sendiri.
              </p>

              <div className="border-l border-white/20 pl-6 pt-2">
                <p className="text-xl italic leading-8 text-white/80">
                  “Aku memiliki pengalaman, tetapi aku bukan sekadar
                  pengalaman itu.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="rounded-2xl border border-black/10 bg-[#efeee9] px-7 py-12 sm:px-12 sm:py-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-black/40">
              Langkah Berikutnya
            </span>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
              Jangan hanya memahami sistem.
              <br />
              Amati dirimu sendiri.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/60">
              Studi kasus adalah undangan untuk berpindah dari pengetahuan
              konseptual menuju pengamatan langsung terhadap kehidupan.
            </p>

            <div className="mt-8">
              <a
                href="/artikel"
                className="inline-flex items-center gap-3 rounded-full bg-[#181817] px-6 py-3 text-sm text-white transition-transform duration-300 hover:translate-x-1"
              >
                <span>Lihat Artikel</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Sistem Kedirian</p>
          <p>Awareness · Understanding · Integration</p>
        </div>
      </footer>
    </main>
  )
}
