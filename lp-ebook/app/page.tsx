import { Hero } from "@/components/sections/Hero"
import { ProblemStatement } from "@/components/sections/ProblemStatement"
import { Features } from "@/components/sections/Features"
import { TableOfContents } from "@/components/sections/TableOfContents"
import { TargetAudience } from "@/components/sections/TargetAudience"
import { WhatYouGet } from "@/components/sections/WhatYouGet"
import { Comparison } from "@/components/sections/Comparison"
import { FAQ } from "@/components/sections/FAQ"
import { CTAFinal } from "@/components/sections/CTAFinal"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <Features />
      <TableOfContents />
      <TargetAudience />
      <WhatYouGet />
      <Comparison />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  )
}
