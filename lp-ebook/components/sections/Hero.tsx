import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { pricing, formatPrice } from "@/data/pricing"
import { Check } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[var(--color-background)] to-[var(--color-muted)] py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="destructive" className="text-sm px-4 py-2">
              🔥 Promo Peluncuran: Hemat 60%!
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              300 Soal Jawab<br />
              <span className="text-[var(--color-primary)]">Hukum Pidana Korupsi 2026</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--color-foreground)] opacity-80">
              Referensi komprehensif untuk mahasiswa hukum, advokat, dan calon hakim ad hoc Pengadilan Tindak Pidana Korupsi
            </p>
            
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>300 Soal Jawab Tervalidasi</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>Update KUHP Nasional 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>20 Diagram Alur + 50 Rujukan Silang</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" variant="default" asChild>
                <a href={pricing.online.ctaUrl}>
                  {pricing.online.cta} - {formatPrice(pricing.online.salePrice)}
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href={pricing.pdf.ctaUrl}>
                  {pricing.pdf.cta} - {formatPrice(pricing.pdf.salePrice)}
                </a>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-primary)] opacity-10 blur-3xl rounded-full"></div>
              <div className="relative bg-white rounded-lg shadow-2xl p-8 max-w-md">
                <div className="aspect-[3/4] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-md flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl mb-4">⚖️</div>
                    <h3 className="text-2xl font-bold mb-2">300 Soal Jawab</h3>
                    <p className="text-sm opacity-90">Hukum Pidana Korupsi 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
