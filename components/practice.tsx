const steps = [
  {
    title: 'Menempatkan',
    english: 'Contextualizing',
    body: 'Menyadari konteks tempat Diri berada. Laku dimulai dengan mengenali hubungan antara KAWUTOHA sebagai Divine Context dan KAINODIHAKU sebagai Human Domain, sebelum menentukan apa yang harus dilakukan.',
  },
  {
    title: 'Menyaksikan',
    english: 'Witnessing',
    body: 'Mengamati apa yang berlangsung dalam LALO sebagai Internal Field — pikiran melalui KOLALO dan emosi melalui KAKOLALO — tanpa segera menganggap setiap gerakan yang muncul sebagai Diri.',
  },
  {
    title: 'Membedakan',
    english: 'Discerning',
    body: 'Membedakan Diri dari apa yang hadir di dalam pengalaman: pikiran, emosi, dorongan, ketakutan, ingatan, maupun pengaruh GHULU sebagai External Content. Yang muncul dalam diri tidak selalu merupakan Diri itu sendiri.',
  },
  {
    title: 'Menghadirkan',
    english: 'Embodying',
    body: 'Membawa kesadaran yang telah dikenali ke dalam kehidupan nyata. Laku menjadi nyata ketika pemahaman hadir dalam cara berada, memilih, bertindak, dan berelasi di dalam KAINODIHAKU.',
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
            Kesadaran dijalani, bukan sekadar diketahui
          </h2>

          <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
            Laku adalah cara Diri menjalani kesadaran di dalam keseluruhan
            Sistem Kedirian. Ia bergerak dari pengenalan konteks, penyaksian
            medan internal, pembedaan antara Diri dan isi pengalaman, hingga
            menghadirkan kesadaran itu dalam kehidupan nyata.
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
                  <span className="ml-2 text-sm font-normal italic text-muted-foreground">
                    — {step.english}
                  </span>
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
