export type Entry = {
  slug: string
  /** Nama istilah. Tidak diterjemahkan. */
  name: string
  /** Istilah formal bahasa Inggris, ditampilkan dalam tanda kurung. */
  formal: string
  /** Padanan Indonesia dari istilah formal. */
  label: string
  order: string
  /** Definisi resmi. Tidak boleh diubah atau ditafsirkan ulang. */
  definition: string
  /** Keterangan kedudukan struktural, tanpa penafsiran baru. */
  structure: string[]
  parent?: string
  children?: string[]
  previous?: string
  next?: string
}

export const entries: Entry[] = [
  {
    slug: 'kawutoha',
    name: 'KAWUTOHA',
    formal: 'Divine Context',
    label: 'Konteks Ilahi',
    order: '01',
    definition:
      'KAWUTOHA adalah ranah Divine Context, yaitu konteks ilahi atau konteks keberadaan yang menjadi latar bagi keseluruhan Sistem Kedirian.',
    structure: [
      'KAWUTOHA berkedudukan sebagai konteks, bukan sebagai wilayah internal maupun isi eksternal.',
      'Sebagai latar bagi keseluruhan Sistem Kedirian, KAWUTOHA menaungi istilah-istilah lain di dalam sistem ini.',
      'Nama KAWUTOHA tidak diterjemahkan. Istilah formalnya adalah Divine Context.',
    ],
    next: 'kainodihaku',
  },
  {
    slug: 'kainodihaku',
    name: 'KAINODIHAKU',
    formal: 'Human Domain',
    label: 'Ranah Pengalaman Manusia',
    order: '02',
    definition:
      'KAINODIHAKU adalah Human Domain, yaitu ranah pengalaman manusia sebagai makhluk yang mengalami keberadaan dalam konteks kehidupan manusia.',
    structure: [
      'KAINODIHAKU adalah ranah pengalaman manusia, yakni ranah manusia sebagai makhluk yang mengalami keberadaan.',
      'Pengalaman pada ranah ini berlangsung dalam konteks kehidupan manusia.',
      'Nama KAINODIHAKU tidak diterjemahkan. Istilah formalnya adalah Human Domain.',
    ],
    previous: 'kawutoha',
    next: 'lalo',
  },
  {
    slug: 'lalo',
    name: 'LALO',
    formal: 'Internal Field',
    label: 'Medan Internal Kedirian',
    order: '03',
    definition: 'LALO adalah Internal Field, yaitu medan internal kedirian.',
    structure: [
      'LALO memiliki dua wilayah utama: KOLALO dan KAKOLALO.',
      'KOLALO adalah Thought Domain, wilayah pikiran atau proses pemikiran.',
      'KAKOLALO adalah Emotion Domain, wilayah emosi atau pengalaman emosional.',
      'Nama LALO tidak diterjemahkan. Istilah formalnya adalah Internal Field.',
    ],
    children: ['kolalo', 'kakolalo'],
    previous: 'kainodihaku',
    next: 'kolalo',
  },
  {
    slug: 'kolalo',
    name: 'KOLALO',
    formal: 'Thought Domain',
    label: 'Wilayah Pikiran',
    order: '03a',
    definition:
      'KOLALO adalah Thought Domain, wilayah pikiran atau proses pemikiran. KOLALO merupakan salah satu dari dua wilayah utama LALO.',
    structure: [
      'KOLALO adalah wilayah pikiran atau proses pemikiran.',
      'KOLALO merupakan wilayah utama pertama di dalam LALO, medan internal kedirian.',
      'Nama KOLALO tidak diterjemahkan. Istilah formalnya adalah Thought Domain.',
    ],
    parent: 'lalo',
    previous: 'lalo',
    next: 'kakolalo',
  },
  {
    slug: 'kakolalo',
    name: 'KAKOLALO',
    formal: 'Emotion Domain',
    label: 'Wilayah Emosi',
    order: '03b',
    definition:
      'KAKOLALO adalah Emotion Domain, wilayah emosi atau pengalaman emosional. KAKOLALO merupakan salah satu dari dua wilayah utama LALO.',
    structure: [
      'KAKOLALO adalah wilayah emosi atau pengalaman emosional.',
      'KAKOLALO merupakan wilayah utama kedua di dalam LALO, medan internal kedirian.',
      'Nama KAKOLALO tidak diterjemahkan. Istilah formalnya adalah Emotion Domain.',
    ],
    parent: 'lalo',
    previous: 'kolalo',
    next: 'ghulu',
  },
  {
    slug: 'ghulu',
    name: 'GHULU',
    formal: 'External Content',
    label: 'Isi Eksternal',
    order: '04',
    definition:
      'GHULU adalah External Content, yaitu isi atau realitas eksternal yang berhubungan dengan pengalaman kedirian di luar medan internal LALO.',
    structure: [
      'GHULU adalah isi atau realitas eksternal.',
      'GHULU berhubungan dengan pengalaman kedirian di luar medan internal LALO.',
      'Nama GHULU tidak diterjemahkan. Istilah formalnya adalah External Content.',
    ],
    previous: 'kakolalo',
  },
]

export function getEntry(slug: string) {
  return entries.find((entry) => entry.slug === slug)
}

/** Entri utama: KAWUTOHA, KAINODIHAKU, LALO, GHULU. */
export const mainEntries = entries.filter((entry) => entry.parent !== 'lalo')

/**
 * Catatan editorial yang ditampilkan pada halaman entri dan ikhtisar.
 * Istilah-istilah Sistem Kedirian tidak boleh diberi tafsir tambahan.
 */
export const editorialNote =
  'Halaman ini memuat definisi istilah sebagaimana ditetapkan dalam Sistem Kedirian, tanpa tafsir tambahan. Uraian lanjutan akan dilengkapi pada tahap berikutnya.'
