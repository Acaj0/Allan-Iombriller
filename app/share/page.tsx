import Profile from "@/components/linktree-components/profile"
import Links from "@/components/linktree-components/links"
import Socials from "@/components/linktree-components/socials"
import Footer from "@/components/linktree-components/footer"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Page() {
    return (
        <main className="min-h-screen bg-[url('/fundo.png')] bg-cover bg-center bg-no-repeat">
        <div className="min-h-screen backdrop-brightness-[0.35] py-12 px-4">
            <Card className="mx-auto max-w-md border-none bg-black/20 backdrop-blur-md">
            <Profile />
            <Separator className="my-6 bg-white/10" />
            <Links />
            <Separator className="my-6 bg-white/10" />
            <Socials />
            <Separator className="my-6 bg-white/10" />
            <Footer />
            </Card>
        </div>
        </main>
    )
}