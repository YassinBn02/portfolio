"use client"

import Link from "next/link"

interface Item {
  id: number | string
  title: string
  href: string
}

interface Props {
  items: Item[]
  activeCategory?: string
  onSelect?: (category: string) => void
}

export default function HomeGalleryMenu({ items, activeCategory, onSelect }: Props) {
  return (
    <nav className="w-full flex justify-center py-4">
      <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {items.map((item) => (
          <li key={item.id}>
            {item.href && item.href !== "#" ? (
              <Link
                href={item.href}
                className="text-sm md:text-base font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                {item.title}
              </Link>
            ) : (
              <button
                onClick={() => onSelect?.(item.title)}
                className={`text-sm md:text-base font-medium transition-colors tracking-wide uppercase ${activeCategory === item.title
                  ? "text-foreground font-bold border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.title}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
