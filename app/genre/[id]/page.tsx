import { getMoviesByGenre, getGenres } from "@/lib/tmdb"
import MovieRow from "@/components/MovieRow"

export default async function GenrePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const genreList = await getGenres()
    const genre = genreList.genres.find((g) => g.id.toString() === id)

    const data = await getMoviesByGenre(id)

    return (
        <div className="pt-24 px-4 md:px-10 lg:px-20 space-y-8">
            <h1 className="text-4xl font-bold text-white">
                {genre?.name || "Genre"}
            </h1>

            <MovieRow title={`${genre?.name} Movies`} movies={data.results} />
        </div>
    )
}
