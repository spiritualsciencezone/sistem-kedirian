import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { SystemDiagram } from '@/components/system-diagram'
import { Pillars } from '@/components/pillars'
import { Practice } from '@/components/practice'
import { About } from '@/components/about'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SystemDiagram />
        <Pillars />
        <Practice />
        <About />
      </main>
      <SiteFooter />
    </>
  )
}
