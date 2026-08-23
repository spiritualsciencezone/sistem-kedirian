export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-serif text-base tracking-wide">
          Sistem <span className="text-primary">Kedirian</span>
        </p>

        <nav aria-label="Navigasi footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[0.65rem] tracking-hairline uppercase text-muted-foreground">
            <li>
              <a href="/#istilah" className="transition-colors hover:text-primary">
                Pilar
              </a>
            </li>
            <li>
              <a href="/#laku" className="transition-colors hover:text-primary">
                Laku
              </a>
            </li>
            <li>
              <a href="#/tentang" className="transition-colors hover:text-primary">
                Tentang
              </a>
            </li>
          </ul>
        </nav>

        <p className="text-[0.65rem] tracking-hairline uppercase text-muted-foreground">
          © {new Date().getFullYear()} Sistem Kedirian
        </p>
      </div>
    </footer>
  )
}
