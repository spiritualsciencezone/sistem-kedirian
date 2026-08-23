import Image from 'next/image'
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
          Memahami Sistem Kedirian
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground text-pretty">
          Sistem Kedirian adalah sebuah kerangka untuk memahami bagaimana Diri
          mengalami, memberi makna, dan memanifestasikan realitas melalui suatu
          sistem konteks. Titik berangkatnya adalah pembedaan antara Diri dan
          pengalaman yang dialami oleh Diri.
          </p>

          <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
          Diri bukan sekadar tubuh, pikiran, emosi, peran sosial, atau keadaan hidup;
          semua itu merupakan bagian dari pengalaman yang muncul dalam suatu struktur
          kedirian. Karena itu, Sistem Kedirian tidak terutama bertanya “Apa yang
          terjadi pada saya?”, tetapi lebih mendasar: “Dari konteks aku yang mana
          pengalaman ini sedang dipahami dan dimaknai?”
          </p>

          <div className="mt-12 overflow-hidden border border-border/60">
          <Image
          src="/public/images/struktur-sistem-kedirian.png"
          alt="Infografis Struktur Sistem Kedirian"
          width={1536}
          height={2048}
          className="h-auto w-full"
          />
          </div>

          <p className="mt-10 leading-relaxed text-muted-foreground text-pretty">
            Istilah KAWUTOHA, KAINODIHAKU, LALO, KOLALO, KAKOLALO, dan GHULU adalah
            istilah khusus yang memiliki definisi tertentu.
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
