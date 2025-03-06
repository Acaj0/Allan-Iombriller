"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Calendar } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-gold" />,
      title: "Localização",
      details: ["Av. Paulista, 1000, Conjunto 101", "Bela Vista, São Paulo - SP"]
    },
    {
      icon: <Phone className="h-6 w-6 text-gold" />,
      title: "Telefone",
      details: ["(11) 99999-9999", "(11) 3333-3333"]
    },
    {
      icon: <Clock className="h-6 w-6 text-gold" />,
      title: "Horário de Atendimento",
      details: ["Segunda a Sexta: 9h às 19h", "Sábado: 9h às 14h"]
    },
    {
      icon: <Calendar className="h-6 w-6 text-gold" />,
      title: "Agendamento Online",
      details: ["Agende sua consulta pelo site ou WhatsApp", "Respondemos em até 2 horas"]
    }
  ]

  return (
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
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="rounded-full bg-gold/10 p-3">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className=" text-xl font-bold">{info.title}</h3>
                    <p className="mt-2 text-gray-300">
                      {info.details.map((detail, i) => (
                        <span key={i}>
                          {detail}
                          {i < info.details.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
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
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  return (
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
  )
}
