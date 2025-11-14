"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Movie } from "@/.next/types/movie"
import { FaPlay } from "react-icons/fa"
import { FiInfo } from "react-icons/fi"
import TrailerModal from "@/components/TrailerModal"
import Link from "next/link"

interface CarouselMovie extends Movie {
    trailerKey?: string | null
}


export default function HeroCarousel({ movies }: { movies: CarouselMovie[] }) {
    const [index, setIndex] = useState(0)
    const [open, setOpen] = useState(false)
    const [direction, setDirection] = useState<"left" | "right">("right")

    // Auto slide every 4s
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 4000)
        return () => clearInterval(interval)
    }, [index])

    const nextSlide = () => {
        setDirection("right")
        setIndex((i) => (i + 1) % movies.length)
    }

    const prevSlide = () => {
        setDirection("left")
        setIndex((i) => (i - 1 + movies.length) % movies.length)
    }

    // Preload next backdrop image
    useEffect(() => {
        if (typeof window === "undefined") return

        const next = new window.Image()
        const nextMovie = movies[(index + 1) % movies.length]
        next.src = `https://image.tmdb.org/t/p/original${nextMovie.backdrop_path}`
    }, [index, movies])

    const movie = movies[index]

    return (
        <section className="relative h-[65vh] w-full overflow-hidden rounded-xl">

            {/* BACKGROUND IMAGE WITH SLIDE + FADE */}
            <div
                key={movie.id}
                className={`absolute inset-0 transition-all duration-700 ease-out
          ${direction === "right" ? "animate-slide-left" : "animate-slide-right"}
        `}
            >
                <Image
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-16 left-10 max-w-xl text-white space-y-4">
                <h1 className="text-5xl font-bold drop-shadow-xl">{movie.title}</h1>
                <p className="hidden md:block opacity-90 text-sm line-clamp-3">
                    {movie.overview}
                </p>

                <div className="flex gap-4 mt-4">
                    <button
                        onClick={() => setOpen(true)}
                        className="cursor-pointer flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
                    >
                        <FaPlay /> Play
                    </button>
                    {/* <button className="flex items-center gap-2 bg-white/30 text-white px-6 py-2 rounded-md hover:bg-white/40 transition">
                        <FiInfo /> More Info
                    </button> */}
                    <Link
                        href={`/movie/${movie.id}`}
                        className="flex items-center gap-2 bg-white/30 text-white px-6 py-2 rounded-md hover:bg-white/40 transition"
                    >
                        <FiInfo /> More Info
                    </Link>
                </div>
            </div>

            {/* ARROWS */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/30 px-3 py-1 rounded-full hover:bg-black/60 transition cursor-pointer"
            >
                ‹
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/30 px-3 py-1 rounded-full hover:bg-black/60 transition cursor-pointer"
            >
                ›
            </button>

            {/* DOTS */}
            <div className="absolute bottom-5 right-10 flex gap-2">
                {movies.map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 w-2 rounded-full
            ${i === index ? "bg-white" : "bg-white/40"}`}
                    />
                ))}
            </div>
            {open && movie.trailerKey && (
                <TrailerModal videoKey={movie.trailerKey} onClose={() => setOpen(false)} />
            )}

        </section>
    )
}
