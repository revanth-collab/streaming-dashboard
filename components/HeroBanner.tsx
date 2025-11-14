import Image from "next/image"
import { Movie } from "@/.next/types/movie"

export default function HeroBanner({ movie }: { movie: Movie }) {
    return (
        <section className="relative h-[70vh] w-full rounded-2xl overflow-hidden shadow-2xl mb-10">
            <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                fill
                priority
                className="object-cover brightness-50"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-16 left-10 max-w-2xl text-white space-y-4">
                <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
                    {movie.title}
                </h1>

                <p className="text-base text-gray-200 line-clamp-3 drop-shadow-lg">
                    {movie.overview}
                </p>

                <button className="px-8 py-3 bg-white text-black rounded-lg text-lg font-semibold hover:bg-gray-200 transition">
                    Watch Now
                </button>
            </div>
        </section>
    )
}

