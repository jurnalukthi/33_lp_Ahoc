"use client"

import { Accordion, AccordionItem } from "@/components/ui/accordion"
import { chapters } from "@/data/chapters"

export function TableOfContents() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            18 BAB Lengkap
          </h2>
          <p className="text-lg text-[var(--color-foreground)] opacity-80">
            Spektrum lengkap materi hukum pidana korupsi dari dasar hingga perkembangan terkini
          </p>
        </div>
        
        <Accordion className="max-w-4xl mx-auto">
          {chapters.map((chapter) => (
            <AccordionItem
              key={chapter.number}
              trigger={
                <div className="flex items-start gap-4">
                  <span className="font-bold text-[var(--color-primary)] text-lg shrink-0">
                    BAB {chapter.number.toString().padStart(2, '0')}
                  </span>
                  <span className="font-medium">{chapter.title}</span>
                </div>
              }
            >
              <p className="text-[var(--color-foreground)] opacity-80 pl-16">
                {chapter.description}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
