export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  content: string[]
}

export const articles: Article[] = [
  {
    slug: 'memahami-sistem-kedirian',
    title: 'Memahami Sistem Kedirian',
    excerpt:
      'Pengantar mengenai Sistem Kedirian sebagai kerangka untuk memahami hubungan antara Diri, konteks, pengalaman, dan realitas.',
    category: 'Sistem Kedirian',
    date: '2026-08-24',
    content: [
      'Sistem Kedirian merupakan sebuah kerangka untuk memahami hubungan antara Diri, konteks, pengalaman, dan realitas.',

      'Pembahasan mengenai Sistem Kedirian berangkat dari pengamatan terhadap bagaimana manusia mengalami dirinya sendiri dan dunia di sekitarnya.',

      'Dalam kerangka ini, pengalaman tidak langsung disamakan dengan Diri. Pikiran, emosi, tubuh, identitas, dan berbagai pengalaman yang muncul dalam kehidupan dapat diamati sebagai bagian dari pengalaman manusia.',

      'Dengan demikian, Sistem Kedirian menjadi ruang untuk mempelajari bagaimana seseorang mengalami realitas, bagaimana identitas terbentuk, serta bagaimana kesadaran dapat mengamati seluruh proses tersebut.',
    ],
  },

  {
    slug: 'diri-dan-pengalaman',
    title: 'Diri dan Pengalaman',
    excerpt:
      'Mengamati perbedaan antara Diri sebagai yang mengalami dan berbagai pengalaman yang muncul dalam kehidupan.',
    category: 'Kesadaran',
    date: '2026-08-24',
    content: [
      'Manusia mengalami berbagai hal sepanjang kehidupannya. Pikiran muncul, emosi bergerak, tubuh memberikan sensasi, dan berbagai peristiwa hadir sebagai pengalaman.',

      'Namun pengalaman yang muncul tidak selalu identik dengan Diri.',

      'Seseorang dapat mengalami kesedihan tanpa harus mengatakan bahwa dirinya adalah kesedihan. Seseorang dapat mengalami sebuah pikiran tanpa harus menyimpulkan bahwa dirinya adalah pikiran tersebut.',

      'Pengamatan terhadap perbedaan antara Diri dan pengalaman menjadi salah satu dasar penting dalam memahami kesadaran.',

      'Dari pengamatan tersebut muncul sebuah pertanyaan yang lebih mendasar: siapakah yang mengalami semua pengalaman tersebut?',
    ],
  },
]

export function getAllArticles(): Article[] {
  return articles
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}
