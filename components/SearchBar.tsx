"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { HiOutlineSearch } from "react-icons/hi"

export default function SearchBar() {
    const router = useRouter()
    const [query, setQuery] = useState("")

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!query.trim()) return
        router.push(`/search?query=${query}`)
    }

    return (
        <form onSubmit={onSubmit} className="relative">
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search movies..."
                className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white w-40 md:w-60 transition"
            />
            <button type="submit" className="absolute right-3 top-2 text-white/70">
                <HiOutlineSearch size={18} />
            </button>
        </form>
    )
}
