export function addToContinueWatching(movie: any) {
    const saved = JSON.parse(localStorage.getItem("continue") || "[]")
    const exists = saved.find((m: any) => m.id === movie.id)
    if (!exists) {
        saved.unshift(movie)
        localStorage.setItem("continue", JSON.stringify(saved.slice(0, 12)))
    }
}

export function getContinueWatching() {
    return JSON.parse(localStorage.getItem("continue") || "[]")
}
