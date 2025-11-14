import { getPopularShows } from "@/lib/tmdb"
import MovieRow from "@/components/MovieRow"

export default async function SeriesPage() {
    const data = await getPopularShows()

    return (
        <div className="pt-24 px-4 md:px-10 lg:px-20 space-y-8">
            <h1 className="text-4xl font-bold">TV Shows</h1>
            <MovieRow title="Popular Shows" movies={data.results} />
        </div>
    )
}
