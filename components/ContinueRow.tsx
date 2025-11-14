"use client"

import { useEffect, useState } from "react"
import MovieRow from "./MovieRow"
import { getContinueWatching } from "@/lib/continue"

export default function ContinueRow() {
    const [movies, setMovies] = useState<any[]>([])

    useEffect(() => {
        setMovies(getContinueWatching())
    }, [])

    if (movies.length === 0) return null

    return (
        <MovieRow title="Continue Watching" movies={movies} />
    )
}
