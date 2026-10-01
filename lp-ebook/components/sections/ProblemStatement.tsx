import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export function ProblemStatement() {
  const problems = [
    {
      question: "Bagaimana pemetaan delik korupsi ke Pasal 603-604 KUHP Nasional?",
      icon: "📋"
    },
    {
      question: "Kapan menerapkan UU Tipikor lama vs KUHP baru? Bagaimana asas lex mitior?",
      icon: "⚖️"
    },
    {
      question: "Bagaimana mempersiapkan ujian dengan materi yang terus berubah?",
      icon: "📚"
    }
  ]
  
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <span className="text-sm font-medium text-amber-900">Tantangan Transisi Hukum 2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transisi KUHP Nasional 2026:<br />Tantangan Baru dalam Hukum Tipikor
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <p className="text-[var(--color-foreground)] font-medium">{problem.question}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-[var(--color-muted)] rounded-lg p-8">
          <p className="text-xl font-medium text-[var(--color-foreground)]">
            Buku ini menjawab semua tantangan tersebut dengan <span className="text-[var(--color-primary)] font-bold">300 soal jawab tervalidasi</span> dan materi komprehensif sesuai regulasi terkini
          </p>
        </div>
      </div>
    </section>
  )
}
