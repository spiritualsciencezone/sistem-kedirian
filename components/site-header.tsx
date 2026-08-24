'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const links = [
  { label: 'Home', href: '/' },

  {
    label: 'Sistem Kedirian',
    href: '/sistem-kedirian',
    children: [
      { label: 'Kawutoha', href: '/kawutoha' },
      { label: 'Kainodihaku', href: '/kainodihaku' },
      { label: 'Lalo', href: '/lalo' },
      { label: 'Ghulu', href: '/ghulu' },
    ],
  },

  { label: 'Artikel', href: '/artikel' },
  { label: 'Studi Kasus', href: '/studi-kasus' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Sistem Kedirian, ke beranda"
        >
          <span
            aria-hidden="true"
            className="size-2 rotate-45 border border-primary/70 bg-primary/25"
          />

          <span className="font-serif text-lg leading-none tracking-wide">
            Sistem <span className="text-primary">Kedirian</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Navigasi utama"
          className="hidden lg:block"
        >
          <ul className="flex items-center gap-6 text-[0.65rem] tracking-hairline uppercase text-muted-foreground">
            {links.map((link) => {
              const hasChildren =
                'children' in link && link.children

              const childActive =
                hasChildren &&
                link.children.some(
                  (child) => pathname === child.href
                )

              const active =
                pathname === link.href || childActive

              return (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    hasChildren && setSubmenuOpen(true)
                  }
                  onMouseLeave={() =>
                    hasChildren && setSubmenuOpen(false)
                  }
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={link.href}
                      aria-current={
                        active ? 'page' : undefined
                      }
                      className={`flex items-center gap-1 py-6 transition-colors hover:text-primary ${
                        active ? 'text-primary' : ''
                      }`}
                    >
                      {link.label}

                      {hasChildren && (
                        <ChevronDown
                          aria-hidden="true"
                          className="size-3"
                        />
                      )}
                    </Link>
                  </div>

                  {/* DESKTOP SUBMENU */}
                  {hasChildren && submenuOpen && (
                    <div className="absolute left-0 top-full min-w-48 border border-border/60 bg-background/95 p-2 shadow-sm backdrop-blur-md">
                      <ul className="flex flex-col">
                        {link.children.map((child) => {
                          const childIsActive =
                            pathname === child.href

                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                aria-current={
                                  childIsActive
                                    ? 'page'
                                    : undefined
                                }
                                className={`block px-4 py-3 text-[0.65rem] tracking-hairline uppercase transition-colors hover:bg-primary/5 hover:text-primary ${
                                  childIsActive
                                    ? 'text-primary'
                                    : 'text-muted-foreground'
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-seluler"
          className="-mr-2 inline-flex size-10 items-center justify-center text-muted-foreground transition-colors hover:text-primary lg:hidden"
        >
          <span className="sr-only">
            {open ? 'Tutup menu' : 'Buka menu'}
          </span>

          {open ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {open && (
        <nav
          id="menu-seluler"
          aria-label="Navigasi seluler"
          className="border-t border-border/60 bg-background lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {links.map((link) => {
              const hasChildren =
                'children' in link && link.children

              const childActive =
                hasChildren &&
                link.children.some(
                  (child) => pathname === child.href
                )

              const active =
                pathname === link.href || childActive

              return (
                <li
                  key={link.href}
                  className="border-b border-border/40 last:border-0"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={
                        active ? 'page' : undefined
                      }
                      className={`block py-4 text-xs tracking-hairline uppercase transition-colors hover:text-primary ${
                        active
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {link.label}
                    </Link>

                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() =>
                          setSubmenuOpen((v) => !v)
                        }
                        aria-expanded={submenuOpen}
                        aria-label={`Buka submenu ${link.label}`}
                        className="inline-flex size-10 items-center justify-center text-muted-foreground hover:text-primary"
                      >
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            submenuOpen
                              ? 'rotate-180'
                              : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* MOBILE SUBMENU */}
                  {hasChildren && submenuOpen && (
                    <ul className="mb-3 ml-4 border-l border-border/60 pl-4">
                      {link.children.map((child) => {
                        const childIsActive =
                          pathname === child.href

                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              aria-current={
                                childIsActive
                                  ? 'page'
                                  : undefined
                              }
                              className={`block py-3 text-[0.6rem] tracking-hairline uppercase transition-colors hover:text-primary ${
                                childIsActive
                                  ? 'text-primary'
                                  : 'text-muted-foreground'
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}
