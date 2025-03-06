"use client"

import { motion } from "framer-motion"

export default function ServicesSection() {
  const services = [
    {
      title: "Implantes Dentários",
      description:
        "Recupere sua função mastigatória e estética com implantes de titânio de alta qualidade e tecnologia avançada.",
    },
    {
      title: "Estética Dental",
      description: "Transforme seu sorriso com facetas, lentes de contato dental e clareamento de última geração.",
    },
    {
      title: "Harmonização Facial",
      description: "Procedimentos minimamente invasivos para realçar sua beleza natural e rejuvenescer sua aparência.",
    },
    {
      title: "Ortodontia Invisível",
      description: "Alinhe seus dentes discretamente com alinhadores transparentes personalizados para seu caso.",
    },
    {
      title: "Reabilitação Oral",
      description: "Restaure a função e estética de sua boca com tratamentos completos e personalizados.",
    },
    {
      title: "Odontologia Digital",
      description:
        "Planejamento e execução de tratamentos com tecnologia digital para resultados precisos e previsíveis.",
    },
  ]

  return (
    <section
      id="services"
      className="relative z-10 border-t border-gold/20 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-24"
    >
      {/* Subtle gold accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
        <div className="absolute -left-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nossos <span className="text-gold">Serviços</span>
          </h2>
          <p className="mt-4 text-gray-300">Tratamentos de excelência para transformar seu sorriso</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-gold/20 bg-gradient-to-br from-zinc-900/90 via-black/80 to-zinc-800/30 p-6 backdrop-blur-sm transition-all hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

