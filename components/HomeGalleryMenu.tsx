"use client"

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Item {
  id: number | string
  title: string
  href: string
}

interface Props {
  items: Item[]
}

export default function HomeGalleryMenu({ items }: Props) {
  const measureRef = useRef<HTMLDivElement | null>(null)
  const outerRef = useRef<HTMLDivElement | null>(null)
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  const [itemWidths, setItemWidths] = useState<number[]>([])
  const [outerWidth, setOuterWidth] = useState<number>(0)
  const [startIndex, setStartIndex] = useState(0)
  const gap = 8 // px gap between pills (gap-2)
  const touchStartX = useRef<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Build a memo list of items with index for measurement
  const measuredItems = useMemo(() => items.map((it, i) => ({ ...it, _i: i })), [items])

  // Measure pill widths using an offscreen container
  useLayoutEffect(() => {
    if (!measureRef.current) return
    const children = Array.from(measureRef.current.children) as HTMLElement[]
    const widths = children.map((el) => Math.ceil(el.getBoundingClientRect().width))
    setItemWidths(widths)
  }, [measuredItems])

  // Measure available outer width (container including arrows area)
  useLayoutEffect(() => {
    const handle = () => {
      if (!outerRef.current) return
      setOuterWidth(Math.ceil(outerRef.current.getBoundingClientRect().width))
      setIsMobile(typeof window !== 'undefined' && window.innerWidth < 640)
    }
    handle()
    window.addEventListener("resize", handle)
    return () => window.removeEventListener("resize", handle)
  }, [])

  // Decide how many to show in one window by fitting into the available width (outer - arrows)
  const desiredCount = useMemo(() => {
    const cap = isMobile ? 3 : 6
    return Math.min(cap, Math.max(1, items.length))
  }, [items.length, isMobile])

  // Clamp startIndex so we don't go out of bounds
  const safeStart = Math.min(startIndex, Math.max(0, items.length - 1))
  const remaining = Math.max(0, items.length - safeStart)
  // Compute visibleCount such that total widths <= available
  const visibleCount = useMemo(() => {
    if (itemWidths.length === 0) return Math.min(desiredCount, remaining)
    const prevW = prevRef.current?.getBoundingClientRect().width ?? 40
    const nextW = nextRef.current?.getBoundingClientRect().width ?? 40
    const available = Math.max(0, outerWidth - (prevW + nextW))
    let used = 0
    let count = 0
    const perViewCap = isMobile ? 3 : 6
    while (count < remaining && count < perViewCap) {
      const idx = safeStart + count
      const w = itemWidths[idx] ?? 100
      const add = count === 0 ? w : w + gap
      if (used + add > available) break
      used += add
      count += 1
    }
    if (count === 0) return 1
    return count
  }, [itemWidths, outerWidth, remaining, safeStart, isMobile])

  const canPrev = safeStart > 0
  const canNext = safeStart + visibleCount < items.length

  const onPrev = () => setStartIndex((s) => Math.max(0, s - 1))
  const onNext = () => setStartIndex((s) => Math.min(Math.max(0, items.length - 1), s + 1))

  const windowItems = items.slice(safeStart, safeStart + visibleCount)

  // Compute pixel width needed for current window
  const windowWidth = useMemo(() => {
    const prevW = prevRef.current?.getBoundingClientRect().width ?? 40
    const nextW = nextRef.current?.getBoundingClientRect().width ?? 40
    const available = Math.max(0, outerWidth - (prevW + nextW))
    if (itemWidths.length === 0) return available || undefined
    let total = 0
    for (let i = 0; i < visibleCount; i++) {
      const idx = safeStart + i
      const w = itemWidths[idx] ?? 100
      total += w
      if (i < visibleCount - 1) total += gap
    }
    return Math.min(total, available || total)
  }, [itemWidths, safeStart, visibleCount, outerWidth])

  // Compute tight container width (arrows + track). Fallback to outerWidth to avoid left shift.
  const prevW = prevRef.current?.getBoundingClientRect().width ?? 40
  const nextW = nextRef.current?.getBoundingClientRect().width ?? 40
  const tightContainerWidth = (windowWidth ?? Math.max(0, outerWidth - (prevW + nextW))) + prevW + nextW

  return (
    <div className="w-full flex justify-center" ref={outerRef}>
      <div className="relative" style={{ width: tightContainerWidth }}>
        <div className="bg-muted/30 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-border/60 rounded-full shadow-sm overflow-hidden">
          <div className="flex items-center justify-center">
            <button
              aria-label="Previous"
              onClick={onPrev}
              disabled={!canPrev}
              ref={prevRef}
              className="p-2 md:p-3 text-foreground/70 hover:text-foreground disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div
              style={{ width: windowWidth }}
              className="overflow-hidden"
              onTouchStart={(e) => {
                touchStartX.current = e.changedTouches[0]?.clientX ?? null
              }}
              onTouchEnd={(e) => {
                const start = touchStartX.current
                const end = e.changedTouches[0]?.clientX
                touchStartX.current = null
                if (start == null || end == null) return
                const dx = end - start
                const threshold = 30
                if (dx > threshold && canPrev) onPrev()
                else if (dx < -threshold && canNext) onNext()
              }}
            >
              <div className="flex items-center justify-center gap-2 px-0 py-1.5">
                {windowItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="inline-flex items-center rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium whitespace-nowrap bg-background hover:bg-accent hover:text-accent-foreground border border-transparent hover:border-accent/40 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <button
              aria-label="Next"
              onClick={onNext}
              disabled={!canNext}
              ref={nextRef}
              className="p-2 md:p-3 text-foreground/70 hover:text-foreground disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Offscreen measurement container */}
      <div className="absolute -z-10 opacity-0 pointer-events-none select-none" aria-hidden="true">
        <div ref={measureRef} className="flex items-center gap-2 px-1 py-2">
          {measuredItems.map((item) => (
            <span
              key={item._i}
              className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap border"
            >
              {item.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
