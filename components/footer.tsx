import Link from "next/link"
import { Instagram, Mail, Phone, Clapperboard } from "lucide-react"

export default function Footer() {
    return (
        <footer className="w-full border-t bg-background py-12 mt-auto">
            <div className="container mx-auto px-4 md:px-8" suppressHydrationWarning>
                <div className="flex flex-col items-center justify-center gap-8" suppressHydrationWarning>

                    {/* Social Links & Contact */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12" suppressHydrationWarning>
                        <Link
                            href="https://www.imdb.com/es-es/name/nm12979873/?ref_=nv_sr_srsg_0_tt_2_nm_6_in_0_q_emna%2520boua"
                            target="_blank"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            <div className="p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors" suppressHydrationWarning>
                                <Clapperboard className="w-5 h-5" />
                            </div>
                            <span className="font-medium">IMDb</span>
                        </Link>

                        <Link
                            href="https://www.instagram.com/emnabouaoun/"
                            target="_blank"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            <div className="p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors" suppressHydrationWarning>
                                <Instagram className="w-5 h-5" />
                            </div>
                            <span className="font-medium">Instagram</span>
                        </Link>

                        <Link
                            href="https://wa.me/34640385170"
                            target="_blank"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            <div className="p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors" suppressHydrationWarning>
                                <Phone className="w-5 h-5" />
                            </div>
                            <span className="font-medium">Whatsapp</span>
                        </Link>

                        <a
                            href="mailto:emnabc@gmail.com?subject=Contact from Portfolio"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            <div className="p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors" suppressHydrationWarning>
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="font-medium">Email</span>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-sm text-muted-foreground/60 mt-4" suppressHydrationWarning>
                        <p>&copy; {new Date().getFullYear()} Emna Bouaoun. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
