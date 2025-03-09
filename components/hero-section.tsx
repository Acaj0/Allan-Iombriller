"use client"
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-clip flex min-h-screen items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Gold accents - ajustado para diferentes tamanhos de tela */}
      <div className="absolute inset-0 z-[1]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute left-0 sm:left-[5%] md:left-[10%] lg:-left-[10%] top-1/4 h-64 w-64 md:h-96 md:w-96 rounded-full bg-gold/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute right-0 sm:right-[5%] md:right-[10%] lg:-right-[10%] top-1/2 h-64 w-64 md:h-96 md:w-96 rounded-full bg-gold/20 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-3xl space-y-8"
        >
          <h1 className="font-serif text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Transforme Seu Sorriso com <span className="text-gold">Excelência</span>
          </h1>
          <p className="mx-auto max-w-2xl text-gray-300 sm:text-xl">
            Especialista em implantes e estética dental e facial, Dr. Allan oferece tratamentos personalizados com
            tecnologia de ponta para resultados excepcionais.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button className="bg-gold text-lg text-black hover:bg-gold/80"><FaWhatsapp/>Agendar Consulta</Button>
            <a href="#services"><Button variant="outline" className="border-gold/50 text-lg bg-gold/10 text-gold">
              Conheça Nossos Serviços
            </Button></a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

