"use client"

import { useEffect } from "react"

export default function TrailerModal({
    videoKey,
    onClose,
}: {
    videoKey: string
    onClose: () => void
}) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [])

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative w-full max-w-3xl">
                <iframe
                    className="w-full aspect-video rounded-xl"
                    src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
                    allowFullScreen
                />
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 px-3 py-1 bg-white text-black rounded"
                >
                    Close
                </button>
            </div>
        </div>
    )
}
