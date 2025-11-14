"use client"

import { Movie } from "@/types/movie"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function InfiniteMovieRow({
    initialMovies,
    fetchMore,
    title,
}: {
    initialMovies: Movie[]
    fetchMore: (page: number) => Promise<Movie[]>
    title: string
}) {
    const [movies, setMovies] = useState(initialMovies)
    const [page, setPage] = useState(2)
    const rowRef = useRef<HTMLDivElement | null>(null)
    const loading = useRef(false)

    async function loadMore() {
        if (loading.current) return
        loading.current = true

        const more = await fetchMore(page)
        if (more.length > 0) {
            setMovies((prev) => [...prev, ...more])
            setPage((p) => p + 1)
        }

        loading.current = false
    }

    useEffect(() => {
        const el = rowRef.current
        if (!el) return

        const onScroll = () => {
            if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 200) {
                loadMore()
            }
        }

        el.addEventListener("scroll", onScroll)
        return () => el.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <section className="mb-6">
            <h2 className="text-xl font-bold mb-3">{title}</h2>

            <div
                ref={rowRef}
                className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
            >
                {movies.map((m) => (
                    <Link
                        key={m.id}
                        href={`/movie/${m.id}`}
                        className="min-w-[160px] relative group"
                    >
                        <div className="relative h-48 w-[160px] rounded-md overflow-hidden">
                            <Image
                                src={`https://image.tmdb.org/t/p/w342${m.poster_path}`}
                                alt={m.title}
                                fill
                                className="object-cover group-hover:scale-105 transition"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
