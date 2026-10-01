import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { Features } from "@/components/sections/Features";
import { TableOfContents } from "@/components/sections/TableOfContents";
import { ExamStrategy } from "@/components/sections/ExamStrategy";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemStatement />
        <Features />
        <TableOfContents />
        <ExamStrategy />
        <TargetAudience />
        <WhatYouGet />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}
