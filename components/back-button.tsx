"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function BackButton() {
    const searchParams = useSearchParams()
    const category = searchParams.get('category')
    const href = category ? `/?category=${encodeURIComponent(category)}` : '/'

    return (
        <Link
            href={href}
            className="flex items-center text-foreground hover:text-foreground/80 transition-colors mr-4"
        >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Retour
        </Link>
    )
}
