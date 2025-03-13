import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Facebook, Instagram } from "lucide-react";

export default function Socials() {
    return (
        <CardContent>
            <div className="flex justify-center gap-4">
                <Link href="https://www.instagram.com/allaniombriller/" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="ghost" className="rounded-full text-white hover:bg-white/10 hover:text-white">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                    </Button>
                </Link>
                <Link href="https://facebook.com/allaniombriller" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="ghost" className="rounded-full text-white hover:bg-white/10 hover:text-white">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                    </Button>
                </Link>
            </div>
        </CardContent>
    );
}