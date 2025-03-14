"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-gold" />,
      title: "Localização",
      details: ["Av. Rui Barbosa, 1044, Galeria JL, 2º andar, Sala 9", "Jardim Universitário, Cuiabá - MT"],
    },
    {
      icon: <Phone className="h-6 w-6 text-gold" />,
      title: "Telefone",
      details: ["(65) 99247-6890"],
    },
    {
      icon: <Clock className="h-6 w-6 text-gold" />,
      title: "Horário de Atendimento",
      details: ["Segunda a Sexta: 8h às 12h e 14h às 17h"],
    },
    {
      icon: <Calendar className="h-6 w-6 text-gold" />,
      title: "Agendamento Online",
      details: [
        "Agende sua consulta pelo WhatsApp",
        <a
          key="whatsapp-link"
          href="https://wa.me/5565992476890?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-4 bg-gold text-lg text-black hover:bg-gold/80">
            <FaWhatsapp className="mr-2" />
            Agendar Consulta
          </Button>
        </a>,
      ],
    },
  ]

  return (
    <section id="contact" className="relative z-10 border-t border-gold/20 bg-black py-24">
      <div className="container px-4">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Onde <span className="text-gold">Estamos</span>
          </h2>
          <p className="mt-4 text-gray-300">Visite nossa clínica ou entre em contato</p>
        </div>

        <div className="grid gap-12 items-center md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="rounded-full bg-gold/10 p-3">{info.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{info.title}</h3>
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="h-full w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.5843864553417!2d-56.0386047!3d-15.613839099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939daf221eaad9e7%3A0xe7ca0d79f909703b!2sCENTRO%20CL%C3%8DNICO%20AIR!5e0!3m2!1spt-BR!2sbr!4v1741889630836!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ minHeight: "500px", border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica"
                className="h-full w-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

