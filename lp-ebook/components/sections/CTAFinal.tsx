import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { pricing, formatPrice } from "@/data/pricing"
import { ArrowRight } from "lucide-react"

export function CTAFinal() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-6">
          Promo Terbatas
        </Badge>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Investasi Terjangkau untuk<br />Karir Hukum Anda
        </h2>
        
        <p className="text-xl mb-4 opacity-90">
          Diskon 60% hanya untuk peluncuran perdana!
        </p>
        
        <p className="text-lg mb-10 opacity-80">
          Mulai kuasai Hukum Pidana Korupsi 2026 hari ini
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="default" 
            className="bg-white text-[var(--color-primary)] hover:bg-gray-100 shadow-xl w-full sm:w-auto"
            asChild
          >
            <a href={pricing.online.ctaUrl} className="flex items-center gap-2">
              {pricing.online.cta} - {formatPrice(pricing.online.salePrice)}
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto"
            asChild
          >
            <a href={pricing.pdf.ctaUrl} className="flex items-center gap-2">
              {pricing.pdf.cta} - {formatPrice(pricing.pdf.salePrice)}
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
        
        <p className="text-sm mt-8 opacity-70">
          Pembayaran aman melalui platform Lynk
        </p>
      </div>
    </section>
  )
}
