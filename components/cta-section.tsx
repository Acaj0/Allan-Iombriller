"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  const benefits = [
    "Primeira consulta com avaliação completa",
    "Plano de tratamento personalizado",
    "Tecnologia de ponta para resultados excepcionais",
  ]

  return (
    <section className="relative z-10 border-t border-gold/20 bg-gradient-to-b from-black to-zinc-950 py-24">
      {/* Subtle gold accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/2 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gold/20 bg-gradient-to-br from-zinc-900 to-black p-8 text-center backdrop-blur-sm md:p-12 lg:p-16">
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl">
            Transforme Seu Sorriso <span className="text-gold">Hoje</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Agende uma consulta e descubra como podemos ajudar você a alcançar o sorriso dos seus sonhos.
          </p>
          <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-4 text-left">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-gold" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <Button className="mt-8 bg-gold text-lg text-black hover:bg-gold/80">Agendar Consulta</Button>
        </div>
      </div>
    </section>
  )
}

