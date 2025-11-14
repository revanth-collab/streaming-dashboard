import Image from "next/image"
import { getMovieById, getMovieVideos } from "@/lib/tmdb"
import TrailerButton from "@/components/TrailerButton"

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const movie = await getMovieById(id)
    const videos = await getMovieVideos(id)
    const trailer = videos.find((v: any) => v.type === "Trailer")

    return (
        <div className="pt-24 px-4 md:px-10 lg:px-20">


            <div className="grid gap-10 md:grid-cols-3 items-start">


                <div className="w-full md:col-span-1 flex justify-center md:justify-start">
                    <div className="relative aspect-[2/3] w-64 md:w-full rounded-xl overflow-hidden shadow-xl bg-gray-800">
                        <Image
                            src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                            alt={movie.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>


                <div className="md:col-span-2 space-y-6">

                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                        {movie.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                        <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur">
                            ⭐ {movie.vote_average.toFixed(1)}
                        </span>

                        <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur">
                            📅 {movie.release_date}
                        </span>

                        {movie.runtime && (
                            <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur">
                                ⏱ {movie.runtime} min
                            </span>
                        )}
                    </div>

                    <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                        {movie.overview}
                    </p>

                    <div>
                        {trailer && (
                            <TrailerButton videoKey={trailer.key} />
                        )}
                    </div>

                </div>
            </div>

        </div>
    )
}
