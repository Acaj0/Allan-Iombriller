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
                Profissional dedicado e altamente qualificado na área da odontologia, com 15 anos de experiência em diagnóstico, tratamento e prevenção de doenças bucais. Especializado em implantodontia, estética dental e reabilitações extensas com foco em proporcionar atendimento personalizado e de excelência aos pacientes.
              </p>
              <p>
                Possuo amplo conhecimento em procedimentos clínicos, como restaurações, extrações, planejamento e execução de tratamentos estéticos e funcionais. Comprometido com a atualização constante, participo regularmente de cursos, workshops e congressos para aplicar as técnicas mais modernas e eficazes na prática clínica.
              </p>
              <p>
                Além disso, valorizo o relacionamento humano, buscando sempre criar um ambiente acolhedor e seguro para os pacientes, com comunicação clara e transparente sobre os procedimentos e cuidados necessários. Minha ética profissional, aliada à busca contínua por resultados de alta qualidade, reflete meu compromisso com a saúde e o bem-estar bucal de todos os meus pacientes.
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

