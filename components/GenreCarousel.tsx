"use client"

import Link from "next/link"

export default function GenreCarousel({ genres }: { genres: any[] }) {
    return (
        <div className="flex gap-3 overflow-x-auto scrollbar-hide items-center">
            {genres.map((g) => (
                <Link
                    href={`/genre/${g.id}`}
                    key={g.id}
                    className="px-5 py-2 bg-white/10 rounded-full hover:bg-white/20 text-sm"
                >
                    {g.name}
                </Link>
            ))}
        </div>
    )
}
