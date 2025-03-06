"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  const stats = [
    { value: "15+", label: "Anos de Experiência" },
    { value: "5k+", label: "Pacientes Atendidos" },
    { value: "3k+", label: "Implantes Realizados" },
    { value: "12+", label: "Certificações" },
  ]

  return (
    <section id="about" className="relative z-10 border-t border-gold/20 bg-gradient-to-b from-black to-zinc-950 py-24">
      {/* Subtle gold accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-gold"></div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-gold"></div>
            <Image
              src="/AllanFoto.png"
              alt="Dr. Allan"
              width={500}
              height={600}
              className="h-full w-full rounded-lg object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Dr. <span className="text-gold">Allan</span>
            </h2>
            <p className="mt-2 text-gold">Especialista em Implantes e Estética Dental e Facial</p>
            <div className="mt-6 space-y-4 text-gray-300">
              <p>
                Com mais de 15 anos de experiência, Dr. Allan é referência em implantodontia e estética dental e facial,
                combinando técnica apurada, tecnologia de ponta e um olhar artístico para proporcionar resultados
                naturais e harmoniosos.
              </p>
              <p>
                Formado pela Universidade de São Paulo (USP) e com especializações internacionais, Dr. Allan mantém-se
                constantemente atualizado com as mais recentes técnicas e tecnologias do setor.
              </p>
              <p>
                Seu compromisso é oferecer tratamentos personalizados que transformam não apenas sorrisos, mas também a
                autoestima e qualidade de vida de seus pacientes.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gold/20 bg-gradient-to-br from-black/80 to-zinc-900/50 p-4 text-center backdrop-blur-sm"
                >
                  <p className="font-serif text-3xl font-bold text-gold">{stat.value}</p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

