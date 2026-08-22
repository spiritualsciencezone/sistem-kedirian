const steps = [
  {
    title: 'Mengheningkan',
    body: 'Menurunkan kebisingan sebelum melihat. Tanpa hening, yang tampak hanyalah gema kebiasaan.',
  },
  {
    title: 'Mengenali',
    body: 'Menamai apa yang muncul — rasa, dorongan, ketakutan — tanpa menghakimi atau membenarkan.',
  },
  {
    title: 'Melintasi',
    body: 'Menjalani apa yang sudah dikenali. Pemahaman menjadi nyata hanya setelah dilalui.',
  },
  {
    title: 'Kembali',
    body: 'Membawa hasil perjalanan ke keseharian, lalu memulai lagi dari hening yang lebih dalam.',
  },
]

export function Practice() {
  return (
    <section id="laku" className="border-b border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <header>
          <p className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
            Laku
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight font-light text-balance sm:text-5xl">
            Kesadaran dilatih, bukan dihafal
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
            Sistem Kedirian bekerja sebagai lingkaran, bukan garis lurus. Setiap
            putaran mengembalikan kita ke tempat yang sama dengan mata yang berbeda.
          </p>
        </header>

        <ol className="divide-y divide-border/60 border-y border-border/60">
          {steps.map((step) => (
            <li key={step.title} className="flex gap-6 py-7 sm:gap-10">
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rotate-45 bg-primary/70"
              />
              <div>
                <h3 className="font-serif text-2xl leading-none font-normal">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
