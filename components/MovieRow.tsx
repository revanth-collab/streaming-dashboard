'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Movie } from '@/.next/types/movie'
import { useRef } from 'react'

const BASE = process.env.TMDB_IMG_BASE || 'https://image.tmdb.org/t/p'

export default function MovieRow({ movies, title }: { movies: Movie[]; title: string }) {
    const scrollerRef = useRef<HTMLDivElement | null>(null)

    function onKey(e: React.KeyboardEvent) {
        const el = scrollerRef.current
        if (!el) return
        const step = 200
        if (e.key === 'ArrowRight') el.scrollBy({ left: step, behavior: 'smooth' })
        if (e.key === 'ArrowLeft') el.scrollBy({ left: -step, behavior: 'smooth' })
    }

    return (
        <section className="mb-6">
            <h3 className="text-lg font-semibold mb-3">{title}</h3>

            <div
                ref={scrollerRef}
                tabIndex={0}
                onKeyDown={onKey}
                className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
            >
                {movies.map((m) => (
                    <div key={m.id} className="min-w-[150px] flex-shrink-0">
                        <Link href={`/movie/${m.id}`} className="group">
                            {/* IMAGE */}
                            <div className="relative h-40 w-[150px] rounded-md overflow-hidden bg-gray-800">
                                {m.poster_path ? (
                                    <Image
                                        src={`${BASE}/w342${m.poster_path}`}
                                        alt={m.title}
                                        fill
                                        sizes="150px"
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-sm">No Image</div>
                                )}
                            </div>

                            {/* FIXED TITLE AREA */}
                            <p
                                className="text-sm mt-1 truncate max-w-[150px] h-[20px]"
                                title={m.title}
                            >
                                {m.title}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

