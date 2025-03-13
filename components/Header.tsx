"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
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
          <span className="text-xl font- text-white">Dr. Allan Iombriller </span>
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
            {/* <li>
              <Link className="text-sm hover:text-gold" href="#testimonials">
                Depoimentos
              </Link>
            </li> */}
            <li>
              <Link className="text-sm hover:text-gold" href="#contact">
                Contato
              </Link>
            </li>
            <li>
              <a href="https://wa.me/5565992476890?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer"><Button className="bg-gold text-black hover:bg-gold/80"><FaWhatsapp/>Agendar Consulta</Button></a>
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
                <Link className="block py-2 text-sm hover:text-gold" href="/" onClick={toggleMenu}>
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
  )
}

