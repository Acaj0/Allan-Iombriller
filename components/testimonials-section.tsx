"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      content:
        "Minha experiência com Dr. Allan foi incrível. Ele transformou meu sorriso com implantes e facetas, e o resultado superou todas as minhas expectativas. Profissional extremamente competente e atencioso.",
      author: "Mariana Silva",
      service: "Implantes e Facetas",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "Após anos de insegurança com meu sorriso, decidi procurar o Dr. Allan. O tratamento com alinhadores invisíveis e clareamento mudou completamente minha autoestima. Recomendo a todos!",
      author: "Carlos Mendes",
      service: "Ortodontia e Clareamento",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "A harmonização facial realizada pelo Dr. Allan foi sutil e natural, exatamente o que eu queria. O ambiente da clínica é acolhedor e toda a equipe é muito profissional. Estou extremamente satisfeita com os resultados.",
      author: "Patrícia Oliveira",
      service: "Harmonização Facial",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section
      id="testimonials"
      className="relative z-10 border-t border-gold/20 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-24"
    >
      {/* Subtle gold accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            O Que Nossos <span className="text-gold">Pacientes</span> Dizem
          </h2>
          <p className="mt-4 text-gray-300">Experiências reais de transformação</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gold/20 bg-gradient-to-br from-black/80 to-zinc-900/50 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mb-6 text-gray-300">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

