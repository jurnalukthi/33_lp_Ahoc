import { Check } from "lucide-react"
import { whatYouGet } from "@/data/features"

export function WhatYouGet() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-muted)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apa yang Anda Dapatkan?
          </h2>
          <p className="text-lg text-[var(--color-foreground)] opacity-80">
            Paket lengkap untuk menguasai hukum pidana korupsi
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {whatYouGet.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <span className="text-[var(--color-foreground)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
