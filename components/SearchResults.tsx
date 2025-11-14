import Link from "next/link"
import Image from "next/image"
import { Movie } from "@/types/movie"

export default function SearchResults({ movies }: { movies: Movie[] }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {movies.map((movie) => (
                <Link key={movie.id} href={`/movie/${movie.id}`} className="group">
                    <div className="relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-gray-800">
                        <Image
                            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                            alt={movie.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                        />
                    </div>
                    <h3 className="mt-2 text-sm text-gray-300 group-hover:text-white transition">
                        {movie.title}
                    </h3>
                </Link>
            ))}
        </div>
    )
}
