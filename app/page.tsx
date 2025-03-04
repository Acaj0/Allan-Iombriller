"use client"

import { motion } from "framer-motion"
import { Calendar, CheckCircle, MapPin, Phone, Star, Clock, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-gold/20 bg-black/90 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between px-4">
          <Link className="flex items-center space-x-2" href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-02-24_at_22.23.48_433d7aba-removebg-preview-EhbeTs9I1wT6EzcEEBIO1fojxPCxT4.png"
              alt="Dr. Allan Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="  text-xl font- text-white">Dr. Allan Iombriller </span>
          </Link>

          {/* Mobile menu button */}
          <button className="block md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X className="h-6 w-6 text-gold" /> : <Menu className="h-6 w-6 text-gold" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link className="text-sm hover:text-gold" href="#home">
                  Início
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:text-gold" href="#services">
                  Serviços
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:text-gold" href="#about">
                  Sobre
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:text-gold" href="#testimonials">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:text-gold" href="#contact">
                  Contato
                </Link>
              </li>
              <li>
                <Button className="bg-gold text-black hover:bg-gold/80">Agendar Consulta</Button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gold/20 bg-black md:hidden"
          >
            <nav className="container py-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link className="block py-2 text-sm hover:text-gold" href="#home" onClick={toggleMenu}>
                    Início
                  </Link>
                </li>
                <li>
                  <Link className="block py-2 text-sm hover:text-gold" href="#services" onClick={toggleMenu}>
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link className="block py-2 text-sm hover:text-gold" href="#about" onClick={toggleMenu}>
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link className="block py-2 text-sm hover:text-gold" href="#testimonials" onClick={toggleMenu}>
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link className="block py-2 text-sm hover:text-gold" href="#contact" onClick={toggleMenu}>
                    Contato
                  </Link>
                </li>
                <li>
                  <Button className="w-full bg-gold text-black hover:bg-gold/80" onClick={toggleMenu}>
                    Agendar Consulta
                  </Button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Gold accents */}
        <div className="absolute inset-0 z-[1] overflow-clip">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-gold/20 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute -right-1/4 top-1/2 h-96 w-96 rounded-full bg-gold/20 blur-3xl"
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
            <h1 className="font-serif text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Transforme Seu Sorriso com <span className="text-gold">Excelência</span>
            </h1>
            <p className="mx-auto max-w-2xl text-gray-300 sm:text-xl">
              Especialista em implantes e estética dental e facial, Dr. Allan oferece tratamentos personalizados com
              tecnologia de ponta para resultados excepcionais.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button className="bg-gold text-lg text-black hover:bg-gold/80">Agendar Consulta</Button>
              <Button variant="outline" className="border-gold/50 text-lg  bg-gold/10 text-gold">
                Conheça Nossos Serviços
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 border-t border-gold/20 bg-black py-24">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nossos <span className="text-gold">Serviços</span>
            </h2>
            <p className="mt-4 text-gray-300">Tratamentos de excelência para transformar seu sorriso</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-gold/20 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <div className="mb-4 h-16 w-16 rounded-full bg-gold/10 p-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Implantes Dentários"
                  width={40}
                  height={40}
                  className="h-8 w-8 text-gold"
                />
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold">Implantes Dentários</h3>
              <p className="text-gray-300">
                Recupere sua função mastigatória e estética com implantes de titânio de alta qualidade e tecnologia
                avançada.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-gold/20 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <div className="mb-4 h-16 w-16 rounded-full bg-gold/10 p-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Estética Dental"
                  width={40}
                  height={40}
                  className="h-8 w-8 text-gold"
                />
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold">Estética Dental</h3>
              <p className="text-gray-300">
                Transforme seu sorriso com facetas, lentes de contato dental e clareamento de última geração.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-gold/20 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <div className="mb-4 h-16 w-16 rounded-full bg-gold/10 p-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Harmonização Facial"
                  width={40}
                  height={40}
                  className="h-8 w-8 text-gold"
                />
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold">Harmonização Facial</h3>
              <p className="text-gray-300">
                Procedimentos minimamente invasivos para realçar sua beleza natural e rejuvenescer sua aparência.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-gold/20 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <div className="mb-4 h-16 w-16 rounded-full bg-gold/10 p-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Ortodontia"
                  width={40}
                  height={40}
                  className="h-8 w-8 text-gold"
                />
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold">Ortodontia Invisível</h3>
              <p className="text-gray-300">
                Alinhe seus dentes discretamente com alinhadores transparentes personalizados para seu caso.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-gold/20 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <div className="mb-4 h-16 w-16 rounded-full bg-gold/10 p-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Reabilitação Oral"
                  width={40}
                  height={40}
                  className="h-8 w-8 text-gold"
                />
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold">Reabilitação Oral</h3>
              <p className="text-gray-300">
                Restaure a função e estética de sua boca com tratamentos completos e personalizados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-gold/20 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <div className="mb-4 h-16 w-16 rounded-full bg-gold/10 p-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Odontologia Digital"
                  width={40}
                  height={40}
                  className="h-8 w-8 text-gold"
                />
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold">Odontologia Digital</h3>
              <p className="text-gray-300">
                Planejamento e execução de tratamentos com tecnologia digital para resultados precisos e previsíveis.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 border-t border-gold/20 bg-black py-24">
        <div className="container px-4">
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
                src="/placeholder.svg?height=600&width=500"
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
                  Com mais de 15 anos de experiência, Dr. Allan é referência em implantodontia e estética dental e
                  facial, combinando técnica apurada, tecnologia de ponta e um olhar artístico para proporcionar
                  resultados naturais e harmoniosos.
                </p>
                <p>
                  Formado pela Universidade de São Paulo (USP) e com especializações internacionais, Dr. Allan mantém-se
                  constantemente atualizado com as mais recentes técnicas e tecnologias do setor.
                </p>
                <p>
                  Seu compromisso é oferecer tratamentos personalizados que transformam não apenas sorrisos, mas também
                  a autoestima e qualidade de vida de seus pacientes.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-lg border border-gold/20 bg-black/50 p-4 text-center">
                  <p className="font-serif text-3xl font-bold text-gold">15+</p>
                  <p className="text-sm text-gray-300">Anos de Experiência</p>
                </div>
                <div className="rounded-lg border border-gold/20 bg-black/50 p-4 text-center">
                  <p className="font-serif text-3xl font-bold text-gold">5k+</p>
                  <p className="text-sm text-gray-300">Pacientes Atendidos</p>
                </div>
                <div className="rounded-lg border border-gold/20 bg-black/50 p-4 text-center">
                  <p className="font-serif text-3xl font-bold text-gold">3k+</p>
                  <p className="text-sm text-gray-300">Implantes Realizados</p>
                </div>
                <div className="rounded-lg border border-gold/20 bg-black/50 p-4 text-center">
                  <p className="font-serif text-3xl font-bold text-gold">12+</p>
                  <p className="text-sm text-gray-300">Certificações</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 border-t border-gold/20 bg-black py-24">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              O Que Nossos <span className="text-gold">Pacientes</span> Dizem
            </h2>
            <p className="mt-4 text-gray-300">Experiências reais de transformação</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gold/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mb-6 text-gray-300">
                "Minha experiência com Dr. Allan foi incrível. Ele transformou meu sorriso com implantes e facetas, e o
                resultado superou todas as minhas expectativas. Profissional extremamente competente e atencioso."
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Paciente"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Mariana Silva</p>
                  <p className="text-sm text-gray-400">Implantes e Facetas</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gold/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mb-6 text-gray-300">
                "Após anos de insegurança com meu sorriso, decidi procurar o Dr. Allan. O tratamento com alinhadores
                invisíveis e clareamento mudou completamente minha autoestima. Recomendo a todos!"
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Paciente"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Carlos Mendes</p>
                  <p className="text-sm text-gray-400">Ortodontia e Clareamento</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gold/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mb-6 text-gray-300">
                "A harmonização facial realizada pelo Dr. Allan foi sutil e natural, exatamente o que eu queria. O
                ambiente da clínica é acolhedor e toda a equipe é muito profissional. Estou extremamente satisfeita com
                os resultados."
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Paciente"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Patrícia Oliveira</p>
                  <p className="text-sm text-gray-400">Harmonização Facial</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 border-t border-gold/20 bg-black py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-gold/20 bg-gradient-to-r from-black to-black/80 p-8 text-center backdrop-blur-sm md:p-12 lg:p-16">
            <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl">
              Transforme Seu Sorriso <span className="text-gold">Hoje</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-300">
              Agende uma consulta e descubra como podemos ajudar você a alcançar o sorriso dos seus sonhos.
            </p>
            <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-4 text-left">
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-gold" />
                <span>Primeira consulta com avaliação completa</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-gold" />
                <span>Plano de tratamento personalizado</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-gold" />
                <span>Tecnologia de ponta para resultados excepcionais</span>
              </li>
            </ul>
            <Button className="mt-8 bg-gold text-lg text-black hover:bg-gold/80">Agendar Consulta</Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 border-t border-gold/20 bg-black py-24">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Entre em <span className="text-gold">Contato</span>
            </h2>
            <p className="mt-4 text-gray-300">Estamos prontos para atender você</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-gold/10 p-3">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold">Localização</h3>
                    <p className="mt-2 text-gray-300">
                      Av. Paulista, 1000, Conjunto 101
                      <br />
                      Bela Vista, São Paulo - SP
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-gold/10 p-3">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold">Telefone</h3>
                    <p className="mt-2 text-gray-300">
                      (11) 99999-9999
                      <br />
                      (11) 3333-3333
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-gold/10 p-3">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold">Horário de Atendimento</h3>
                    <p className="mt-2 text-gray-300">
                      Segunda a Sexta: 9h às 19h
                      <br />
                      Sábado: 9h às 14h
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-gold/10 p-3">
                    <Calendar className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold">Agendamento Online</h3>
                    <p className="mt-2 text-gray-300">
                      Agende sua consulta pelo site ou WhatsApp
                      <br />
                      Respondemos em até 2 horas
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mapa da localização"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-lg border border-gold/20 bg-black/50 p-3 text-white placeholder:text-gray-500 focus:border-gold focus:outline-none"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-lg border border-gold/20 bg-black/50 p-3 text-white placeholder:text-gray-500 focus:border-gold focus:outline-none"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-gold/20 bg-black/50 p-3 text-white placeholder:text-gray-500 focus:border-gold focus:outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-lg border border-gold/20 bg-black/50 p-3 text-white focus:border-gold focus:outline-none"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="implantes">Implantes Dentários</option>
                    <option value="estetica">Estética Dental</option>
                    <option value="harmonizacao">Harmonização Facial</option>
                    <option value="ortodontia">Ortodontia Invisível</option>
                    <option value="reabilitacao">Reabilitação Oral</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-lg border border-gold/20 bg-black/50 p-3 text-white placeholder:text-gray-500 focus:border-gold focus:outline-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <Button className="w-full bg-gold text-lg text-black hover:bg-gold/80">Enviar Mensagem</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/20 bg-black py-12">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <Link className="flex items-center space-x-2" href="/">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-02-24_at_22.23.48_433d7aba-removebg-preview-EhbeTs9I1wT6EzcEEBIO1fojxPCxT4.png"
                  alt="Dr. Allan Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="font-serif text-xl font-bold text-gold">Dr. Allan</span>
              </Link>
              <p className="mt-4 text-sm text-gray-400">
                Transformando sorrisos e vidas com excelência e tecnologia de ponta.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-serif text-lg font-bold">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-gray-400 hover:text-gold" href="#home">
                    Início
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gold" href="#services">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gold" href="#about">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gold" href="#testimonials">
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gold" href="#contact">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-serif text-lg font-bold">Serviços</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-gray-400 hover:text-gold" href="#services">
                    Implantes Dentários
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gold" href="#services">
                    Estética Dental
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gold" href="#services">
                    Harmonização Facial
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gold" href="#services">
                    Ortodontia Invisível
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-gold" href="#services">
                    Reabilitação Oral
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-serif text-lg font-bold">Contato</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span className="text-gray-400">Av. Paulista, 1000, São Paulo - SP</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gold" />
                  <span className="text-gray-400">(11) 99999-9999</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gold" />
                  <span className="text-gray-400">Seg-Sex: 9h-19h | Sáb: 9h-14h</span>
                </li>
              </ul>
              <div className="mt-4 flex space-x-4">
                <Link href="#" className="rounded-full bg-gold/10 p-2 text-gold hover:bg-gold/20">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="rounded-full bg-gold/10 p-2 text-gold hover:bg-gold/20">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="rounded-full bg-gold/10 p-2 text-gold hover:bg-gold/20">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gold/20 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Dr. Allan - Implantes e Estética Dental e Facial. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

