"use client"

import { Accordion, AccordionItem } from "@/components/ui/accordion"
import { faqs } from "@/data/faq"

export function FAQ() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-muted)]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-[var(--color-foreground)] opacity-80">
            Temukan jawaban atas pertanyaan umum seputar buku ini
          </p>
        </div>
        
        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              trigger={<span className="text-lg font-medium">{faq.question}</span>}
            >
              <p className="text-[var(--color-foreground)] opacity-80">
                {faq.answer}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
