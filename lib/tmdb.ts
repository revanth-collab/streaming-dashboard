import { Movie } from "@/types/movie"
import { GenreResponse } from "@/types/genre"

const API_URL = process.env.TMDB_API_URL!
const API_KEY = process.env.TMDB_API_KEY!

export async function getPopularMovies() {
    const res = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`, {
        // Server component revalidate
        next: { revalidate: 3600 }
    })

    if (!res.ok) throw new Error("Failed to fetch movies")

    return res.json()
}

export async function getMovieById(id: string): Promise<Movie> {
    const res = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
    if (!res.ok) throw new Error("Movie not found")
    return res.json()
}

export async function searchMovies(query: string) {
    const res = await fetch(
        `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    )

    if (!res.ok) throw new Error("Search failed")

    return res.json()
}

export async function getMovieVideos(id: string) {
    const res = await fetch(`${API_URL}/movie/${id}/videos?api_key=${API_KEY}`)
    const json = await res.json()
    return json.results.filter((v: any) => v.site === "YouTube")
}

export async function getPopularMoviesPage(page: number) {
    const res = await fetch(
        `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
    );

    if (!res.ok) throw new Error("Failed to fetch next page");

    return res.json();
}


export async function getMoviesByGenre(genreId: string) {
    const res = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`)
    if (!res.ok) throw new Error("Failed to fetch genre movies")
    return res.json()
}

export async function getPopularShows() {
    const res = await fetch(`${API_URL}/tv/popular?api_key=${API_KEY}`)
    if (!res.ok) throw new Error("Failed to fetch shows")
    return res.json()
}

export async function getGenres(): Promise<GenreResponse> {
    const res = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)
    if (!res.ok) throw new Error("Failed to fetch genres")
    return res.json()
}

