import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
// import { Verified } from "lucide-react"

export default function Profile() {
    return (
        <CardContent className="pt-6">
        <div className="flex flex-col items-center space-y-4">
            <div className="relative">
            <Image
                src="/perfil.jpg"
                alt="Dr. Allan Iombriller Rodrigues"
                width={96}
                height={96}
                className="rounded-full border-4 border-white/10 shadow-xl"
                priority
            />
            {/* <Verified className="absolute -right-1 -bottom-1 h-6 w-6 text-blue-400" /> */}
            </div>
            <div className="text-center">
            <h1 className="text-2xl font-bold text-white">Dr. Allan Iombriller Rodrigues</h1>
            <p className="text-gray-300">Dentista | CRO/MT 5532</p>
            </div>
            <div className="flex gap-2">
            <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                Implantes
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                Estética Dental e Facial
            </Badge>
            </div>
        </div>
        </CardContent>
    )
}