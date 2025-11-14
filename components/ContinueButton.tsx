"use client"
import { addToContinueWatching } from "@/lib/continue"

export default function ContinueButton({ movie }: { movie: any }) {
    return (
        <button
            onClick={() => addToContinueWatching(movie)}
            className="px-5 py-2 bg-white/10 rounded hover:bg-white/20"
        >
            Add to Continue Watching
        </button>
    )
}
