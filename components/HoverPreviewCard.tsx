"use client"
import { useState } from "react"
import Image from "next/image"

export default function HoverPreviewCard({ movie }: { movie: any }) {
    const [hover, setHover] = useState(false)

    return (
        <div
            className="relative group"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {!hover && (
                <Image
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt={movie.title}
                    width={170}
                    height={220}
                    className="rounded-md"
                />
            )}

            {hover && (
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute top-0 left-0 rounded-xl shadow-xl w-[300px] h-[200px] z-50"
                    src="/sample-preview.mp4"
                />
            )}
        </div>
    )
}
