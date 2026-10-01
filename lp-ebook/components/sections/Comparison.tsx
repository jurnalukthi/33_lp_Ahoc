import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { pricing, formatPrice } from "@/data/pricing"
import { Check, X } from "lucide-react"

export function Comparison() {
  const comparisonData = [
    { feature: "Harga Normal", online: formatPrice(pricing.online.normalPrice), pdf: formatPrice(pricing.pdf.normalPrice), highlight: false },
    { feature: "Harga Promo (60%)", online: formatPrice(pricing.online.salePrice), pdf: formatPrice(pricing.pdf.salePrice), highlight: true },
    { feature: "Akses", online: "Multi-device via Lynk", pdf: "Download file PDF", highlight: false },
    { feature: "Akses Offline", online: "Terbatas", pdf: "Full offline", highlight: false },
    { feature: "Format", online: "Platform Lynk", pdf: "PDF portable", highlight: false },
    { feature: "Cocok untuk", online: "Belajar online praktis", pdf: "Arsip permanen", highlight: false },
    { feature: "Mulai Belajar", online: "Dalam 1 menit", pdf: "Setelah download", highlight: false }
  ]
  
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pilih Paket yang Sesuai
          </h2>
          <p className="text-lg text-[var(--color-foreground)] opacity-80">
            Dua pilihan akses dengan keunggulan masing-masing
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="border-2">
            <CardHeader className="text-center">
              <Badge variant="default" className="mb-4 mx-auto">Hemat 60%</Badge>
              <CardTitle className="text-3xl mb-2">{pricing.online.name}</CardTitle>
              <div className="space-y-1">
                <p className="text-sm line-through opacity-60">{formatPrice(pricing.online.normalPrice)}</p>
                <p className="text-4xl font-bold text-[var(--color-primary)]">{formatPrice(pricing.online.salePrice)}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {pricing.online.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
              <Button className="w-full mt-6" size="lg" asChild>
                <a href={pricing.online.ctaUrl}>{pricing.online.cta}</a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-[var(--color-accent)]">
            <CardHeader className="text-center">
              <Badge variant="secondary" className="mb-4 mx-auto bg-[var(--color-accent)] text-white">Hemat 60%</Badge>
              <CardTitle className="text-3xl mb-2">{pricing.pdf.name}</CardTitle>
              <div className="space-y-1">
                <p className="text-sm line-through opacity-60">{formatPrice(pricing.pdf.normalPrice)}</p>
                <p className="text-4xl font-bold text-[var(--color-accent)]">{formatPrice(pricing.pdf.salePrice)}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {pricing.pdf.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
              <Button className="w-full mt-6" size="lg" variant="secondary" asChild>
                <a href={pricing.pdf.ctaUrl}>{pricing.pdf.cta}</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
