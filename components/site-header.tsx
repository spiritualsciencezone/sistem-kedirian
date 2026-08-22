'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Sistem Kedirian', href: '/sistem-kedirian' },
  { label: 'Kawutoha', href: '/kawutoha' },
  { label: 'Kainodihaku', href: '/kainodihaku' },
  { label: 'Lalo', href: '/lalo' },
  { label: 'Ghulu', href: '/ghulu' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Sistem Kedirian, ke beranda">
          <span
            aria-hidden="true"
            className="size-2 rotate-45 border border-primary/70 bg-primary/25"
          />
          <span className="font-serif text-lg leading-none tracking-wide">
            Sistem <span className="text-primary">Kedirian</span>
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-[0.65rem] tracking-hairline uppercase text-muted-foreground">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`transition-colors hover:text-primary ${
                      active ? 'text-primary' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-seluler"
          className="-mr-2 inline-flex size-10 items-center justify-center text-muted-foreground transition-colors hover:text-primary lg:hidden"
        >
          <span className="sr-only">{open ? 'Tutup menu' : 'Buka menu'}</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="menu-seluler"
          aria-label="Navigasi seluler"
          className="border-t border-border/60 bg-background lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href} className="border-b border-border/40 last:border-0">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`block py-4 text-xs tracking-hairline uppercase transition-colors hover:text-primary ${
                      active ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}
