import { CardContent } from "@/components/ui/card"

export default function Footer() {
    return (
        <CardContent className="pb-6">
        <div className="text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Dr. Allan Iombriller Rodrigues</p>
            <p>Todos os direitos reservados</p>
        </div>
        </CardContent>
    )
}