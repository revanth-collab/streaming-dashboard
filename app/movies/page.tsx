import { getPopularMovies } from "@/lib/tmdb"
import MovieRow from "@/components/MovieRow"

export default async function MoviesPage() {
    const data = await getPopularMovies()

    return (
        <div className="pt-24 px-4 md:px-10 lg:px-20 space-y-8">
            <h1 className="text-4xl font-bold">Movies</h1>
            <MovieRow title="Popular Movies" movies={data.results} />
        </div>
    )
}
