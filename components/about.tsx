import Link from 'next/link'
import { editorialNote } from '@/lib/kedirian'

export function About() {
  return (
    <section id="tentang" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] tracking-hairline uppercase text-primary/80">
            Tentang
          </p>

          <h2 className="mt-8 font-serif text-3xl leading-snug font-light text-balance sm:text-4xl">
            Sistem Kedirian adalah sebuah kerangka untuk memahami bagaimana Diri mengalami, memberi makna, dan memanifestasikan realitas melalui suatu sistem konteks. Titik berangkatnya adalah pembedaan antara Diri dan pengalaman yang dialami oleh Diri. Diri bukan sekadar tubuh, pikiran, emosi, peran sosial, atau keadaan hidup; semua itu merupakan bagian dari pengalaman yang muncul dalam suatu struktur kedirian. Karena itu, Sistem Kedirian tidak terutama bertanya “Apa yang terjadi pada saya?”, tetapi lebih mendasar: “Dari konteks aku yang mana pengalaman ini sedang dipahami dan dimaknai?”
          </h2>

          <p className="mt-10 leading-relaxed text-muted-foreground text-pretty">
            Istilah KAWUTOHA, KAINODIHAKU, LALO, KOLALO, KAKOLALO, dan GHULU adalah
            istilah khusus yang memiliki definisi tertentu. Nama-nama tersebut tidak
            diterjemahkan; istilah formal bahasa Inggris hanya ditampilkan dalam tanda
            kurung setelah istilah Indonesia.
          </p>

          <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
            {editorialNote}
          </p>

          <div className="mt-14 flex justify-center">
            <Link
              href="/sistem-kedirian"
              className="border-b border-primary/50 pb-1 text-xs tracking-hairline uppercase text-primary transition-colors hover:border-primary"
            >
              Baca ikhtisar Sistem Kedirian
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
