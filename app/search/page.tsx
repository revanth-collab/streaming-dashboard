import { searchMovies } from "@/lib/tmdb"
import SearchResults from "@/components/SearchResults"

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ query: string }> }) {
    const { query } = await searchParams

    if (!query) {
        return <div className="pt-24 text-center text-gray-300">Enter a search term.</div>
    }

    const results = await searchMovies(query)

    return (
        <div className="pt-24">
            <h1 className="text-2xl mb-6">Search results for: <strong>{query}</strong></h1>
            <SearchResults movies={results.results} />
        </div>
    )
}
