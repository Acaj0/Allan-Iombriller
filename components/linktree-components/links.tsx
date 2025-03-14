import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Globe } from "lucide-react"
import { FaWhatsapp, FaGoogle, FaWaze } from "react-icons/fa"

export default function Links() {
  return (
    <CardContent className="grid gap-4">
      <Link
        className="w-full"
        href="https://wa.me/5565992476890?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="h-12 w-full bg-blue-500 text-white hover:bg-blue-600" size="lg">
          <FaWhatsapp className="mr-2 h-5 w-5" />
          Agendar Consulta
        </Button>
      </Link>
      <Link
        className="w-full"
        href="https://maps.app.goo.gl/d64QQP3679yUsDE49"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          className="h-12 w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/20"
          size="lg"
        >
          <FaGoogle className="mr-2 h-5 w-5" />
          Google Maps
        </Button>
      </Link>
      <Link
        className="w-full"
        href="https://waze.com/ul?ll=-15.613839,-56.0386047&navigate=yes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          className="h-12 w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/20"
          size="lg"
        >
          <FaWaze className="mr-2 h-5 w-5" />
          Waze
        </Button>
      </Link>
      {/* <Link
        className="w-full"
        href="tel:+5511999999999"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          className="h-12 w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/20"
          size="lg"
        >
          <Phone className="mr-2 h-5 w-5" />
          Ligar Agora
        </Button>
      </Link> */}
      <Link className="w-full" href="/">
        <Button
          variant="outline"
          className="h-12 w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/20"
          size="lg"
        >
          <Globe className="mr-2 h-5 w-5" />
          Site
        </Button>
      </Link>
    </CardContent>
  )
}

