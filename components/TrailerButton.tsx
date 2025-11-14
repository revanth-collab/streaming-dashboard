"use client"
import { useState } from "react"
import TrailerModal from "./TrailerModal"

export default function TrailerButton({ videoKey }: { videoKey: string }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="mt-3 px-6 py-2 bg-red-600 text-white rounded-lg"
            >
                Watch Trailer
            </button>

            {open && <TrailerModal videoKey={videoKey} onClose={() => setOpen(false)} />}
        </>
    )
}
