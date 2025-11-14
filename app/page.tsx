import InfiniteMovieRow from "@/components/InfiniteMovieRow"
import { getPopularMovies, getPopularMoviesPage, getGenres, getMovieVideos } from "@/lib/tmdb"
import GenreCarousel from "@/components/GenreCarousel"
import HeroBanner from "@/components/HeroBanner"
import MovieRow from "@/components/MovieRow"
import { Movie } from "@/types/movie"
import HeroCarousel from "@/components/HeroCarousel"


export async function getMorePopular(page: number) {
  "use server"
  return getPopularMoviesPage(page).then((d) => d.results)
}

export default async function Home() {
  const data = await getPopularMovies()
  const genres = await getGenres()

  const movies: Movie[] = data.results

  const heroMovies: Movie[] = data.results.slice(0, 5)

  const moviesWithTrailers = await Promise.all(
    heroMovies.map(async (m) => {
      const vids = await getMovieVideos(m.id.toString())
      const trailer = vids.find((v: any) => v.type === "Trailer")
      return { ...m, trailerKey: trailer?.key || null }
    })
  )

  return (
    <div className="space-y-10 pt-20">

      {/* <HeroBanner movie={movies[0]} /> */}

      <HeroCarousel movies={moviesWithTrailers} />

      <GenreCarousel genres={genres.genres} />

      <InfiniteMovieRow
        title="Endless Popular"
        initialMovies={movies}
        fetchMore={getMorePopular}
      />

      <MovieRow title="Popular Now" movies={movies.slice(1, 10)} />
      <MovieRow title="Trending" movies={movies.slice(10, 20)} />
      {/* <MovieRow title="Recommended" movies={movies.slice(20, 30)} /> */}
      <MovieRow
        title="Recommended"
        movies={[...movies].sort(() => Math.random() - 0.5).slice(0, 10)}
      />

      <MovieRow
        title="Most Popular"
        movies={[...movies]
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 10)}
      />

      <MovieRow
        title="Top Rated"
        movies={[...movies]
          .sort((a, b) => b.vote_average - a.vote_average)
          .slice(0, 10)}
      />

      <MovieRow
        title="Action"
        movies={movies.filter((m) => m.genre_ids.includes(28)).slice(0, 10)}
      />

      <MovieRow
        title="Horror"
        movies={movies.filter((m) => m.genre_ids.includes(27)).slice(0, 10)}
      />

      <MovieRow
        title="New in 2025"
        movies={movies
          .filter((m) => m.release_date?.startsWith("2025"))
          .slice(0, 10)}
      />

    </div>
  )
}


